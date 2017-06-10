const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
// const PreviewModal = require('../Modal/PreviewModal')

class AddEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Event: {},
      sources: '',
      hashTags: '',
      years: [],
      datesOfTheMonth: [],
      showSubmitButton: false,
      modalIsOpen: false,
      object: {}
    }
    this.handleHashTag = this.handleHashTag.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  handleHashTag () {
    this.setState({
      hashTags: this.refs.hashTags.value
    })
  }
  closeModal () {
    this.setState({
      modalIsOpen: false
    })
  }
  openModal () {

  }
  componentDidMount () {
    let year = new Date().getFullYear()
    let yearsArray = []
    let dateArray = []

    for (let i = year; i >= 1758; i--) {
      yearsArray.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      dateArray.push(i)
    }

    this.setState({
      years: yearsArray
    })
    this.setState({
      datesOfTheMonth: dateArray
    })
  }
  showSubmitButton (e) {
    if (this.refs.title.value && this.refs.description.value && this.refs.startingMonth.value && this.refs.startingDay.value && this.refs.startingYear.value) {
      this.setState({
        showSubmitButton: true
      })
    } else {
      this.setState({
        showSubmitButton: false
      })
    }
  }
  onSubmit () {
    let object = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      startingMonth: this.refs.startingMonth.value,
      startingDay: this.refs.startingDay.value,
      startingYear: this.refs.startingYear.value,
      endingMonth: this.refs.endingMonth.value,
      endingDay: this.refs.endingDay.value,
      endingYear: this.refs.endingYear.value,
      hashTags: this.refs.hashTags.value
    }
    this.setState({
      object: object,
      modalIsOpen: true
    })

    axios.post(`${domain}/events`, this.state.object)
    .then((res) => {
      this.setState({
        modalIsOpen: true
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
    window.location.href = '/#/'
  }
  render () {
    let submitButton = null
    if (this.state.showSubmitButton) {
      submitButton = <button onClick={this.openModal} >Submit Event</button>
    }
    return (
      <div>
        <h1>this is the add event page</h1>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' onChange={this.showSubmitButton} />
          <br />
          <textArea type='text' ref='description' placeholder='description' onChange={this.showSubmitButton} />
          <br />

          <div>
            <label> Starting Date:
              <select ref='startingMonth' onChange={this.showSubmitButton}>
                <option value='' > Month</option>
                <option value={1} >Jan</option>
                <option value={2} >Feb</option>
                <option value={3} >Mar</option>
                <option value={4} >Apr</option>
                <option value={5} >May</option>
                <option value={6} >Jun</option>
                <option value={7} >July</option>
                <option value={8} >Aug</option>
                <option value={9} >Sep</option>
                <option value={10} >Oct</option>
                <option value={11} >Nov</option>
                <option value={12} >Dec</option>
              </select>
              <select ref='startingDay' onChange={this.showSubmitButton} >
                <option value='' >Day</option>
                {this.state.datesOfTheMonth.map((date, i) => (
                  <option value={date} key={i}> {date} </option>
                ))}
              </select>
              <select ref='startingYear' onChange={this.showSubmitButton} >
                <option value='' > Year </option>
                {this.state.years.map((year, i) => (
                  <option value={year} key={i}> {year}</option>
                ))}
              </select>
            </label>
          </div>
          <br />
          <div>
            <label> Ending Date:
              <select ref='endingMonth' onChange={this.showSubmitButton} >
                <option value='' > Month</option>
                <option value={1} >Jan</option>
                <option value={2} >Feb</option>
                <option value={3} >Mar</option>
                <option value={4} >Apr</option>
                <option value={5} >May</option>
                <option value={6} >Jun</option>
                <option value={7} >July</option>
                <option value={8} >Aug</option>
                <option value={9} >Sep</option>
                <option value={10} >Oct</option>
                <option value={11} >Nov</option>
                <option value={12} >Dec</option>
              </select>
              <select ref='endingDay' onChange={this.showSubmitButton} >
                <option value='' >Day</option>
                {this.state.datesOfTheMonth.map((date, i) => (
                  <option value={date} key={i}> {date} </option>
                ))}
              </select>
              <select ref='endingYear' onChange={this.showSubmitButton} >
                <option value='' > Year </option>
                {this.state.years.map((year, i) => (
                  <option value={year} key={i}> {year}</option>
                ))}
              </select>
            </label>
          </div>

          <input type='text' ref='hashTags' placeholder='hashTags' onChange={this.handleHashTag} />

          <br />

          <select>
            <option value={0}> Source </option>
          </select>

          <div>
            add new source component
          </div>

        </form>
        {submitButton}
      </div>
    )
  }
}

module.exports = AddEvent

        // <PreviewModal type='addEvent' modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} object={this.state.object} onSubmit={this.onSubmit} contentLabel='previewModal' />

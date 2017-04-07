const React = require('react')

class AddEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      date: '',
      Source: '',
      sources: '',
      hashTags: '',
      years: [],
      datesOfTheMonth: []
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }
  handleTitleChange () {
    this.setState({
      title: this.refs.title.value
    })
  }
  handleDescriptionChange () {
    this.setState({
      description: this.refs.description.value
    })
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
  render () {
    return (
      <div>
        <h1>this is the add event page</h1>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' onChange={this.handleTitleChange} />
          <br />
          <textArea type='text' ref='description' placeholder='description' onChange={this.handleDescriptionChange} />
          <br />

          <div>
            <label> Starting Date:
              <select>
                <option value={0} > Month</option>
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
              <select>
                <option value={0} >Day</option>
                {this.state.datesOfTheMonth.map((date, i) => (
                  <option value={date} key={i}> {date} </option>
                ))}
              </select>
              <select>
                <option value={0}> Year </option>
                {this.state.years.map((year, i) => (
                  <option value={year} key={i}> {year}</option>
                ))}
              </select>
            </label>
          </div>
          <br />
          <div>
            <label> Ending Date:
              <select>
                <option value={0} > Month</option>
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
              <select>
                <option value={0} >Day</option>
                {this.state.datesOfTheMonth.map((date, i) => (
                  <option value={date} key={i}> {date} </option>
                ))}
              </select>
              <select>
                <option value={0}> Year </option>
                {this.state.years.map((year, i) => (
                  <option value={year} key={i}> {year}</option>
                ))}
              </select>
            </label>
          </div>

          <input type='text' ref='hashtags' placeholder='hashtags' />

          <select>
            <option value={0}> Source </option>
          </select>

          <div>
            add new source component
          </div>

        </form>
      </div>
    )
  }
}

module.exports = AddEvent

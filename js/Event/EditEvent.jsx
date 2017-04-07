const React = require('react')

class EditEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Event: {}
    }
  }
  componentDidMount () {
    console.log('this is the edit event page')
  }
  render () {
    return (
      <div>
        <h1> Edit event page </h1>
      </div>
    )
  }
}

module.exports = EditEvent

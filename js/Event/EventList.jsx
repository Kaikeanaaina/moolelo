const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')

class EventList extends React.Component {
  componentDidMount () {
    axios.get(`${domain}/events`)
    .then((res) => {
      console.log(333333333)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render () {
    return (
      <div>
        <h1>This is the EventList</h1>
      </div>
    )
  }
}

module.exports = EventList

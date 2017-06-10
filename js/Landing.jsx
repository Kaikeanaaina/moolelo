const React = require('react')
const { Link } = require('react-router')
const MyTitle = require('./MyTitle')
const EventList = require('./Event/EventList')

class MyFirstComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <div>
        <MyTitle title='Moolelo' />
        <br />
        <Link to='/AddEvent'> Add a Event </Link>
        <br />
        <Link to='/AddResource'> Add a Resource </Link>
        <br />
        <EventList />
      </div>
    )
  }
}

module.exports = MyFirstComponent

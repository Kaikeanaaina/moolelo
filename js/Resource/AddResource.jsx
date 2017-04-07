const React = require('react')
const { Link } = require('react-router')

class AddResource extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Source: {}
    }
  }
  componentDidMount () {
    console.log('this is the add resource component')
  }
  render () {
    return (
      <div>
        <h1> this is the add resource component </h1>
        <Link to='/EditResource'> Edit Resource </Link>
      </div>
    )
  }
}

module.exports = AddResource

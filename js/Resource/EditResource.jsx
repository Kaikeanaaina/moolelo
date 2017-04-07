const React = require('react')

class EditResource extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Resource: {}
    }
  }
  componentDidMount () {
    console.log('this is the edit resource page')
  }
  render () {
    return (
      <div>
        <h1> this is the edit resource page</h1>
      </div>
    )
  }
}

module.exports = EditResource

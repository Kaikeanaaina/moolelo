const React = require('react')
const { Link } = require('react-router')
const MyTitle = require('./MyTitle')

class MyFirstComponent extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='Aloha this is kainoa' />
        <Link to='/OtherRoute'>click to english</Link>
      </div>
    )
  }
}

module.exports = MyFirstComponent

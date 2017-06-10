const React = require('react')
const Layout = require('./Layout')
const Landing = require('./Landing')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const AddEvent = require('./Event/AddEvent')
const AddResource = require('./Resource/AddResource')
const EditResource = require('./Resource/EditResource')

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/AddEvent' component={AddEvent} />
    <Route path='/AddResource' component={AddResource} />
    <Route path='/EditResource' component={EditResource} />
  </Route>
)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
}

App.Routes = myRoutes

module.exports = App

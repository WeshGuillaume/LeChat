
import React, {
  AppRegistry,
  Component,
  View,
  Text,
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './src/reducers'
import Main from './src/components/Main'

const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)

const store = createStoreWithMiddlewares(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('App', () => App)

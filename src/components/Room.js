
import React, {
  Component,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native'

import { connect } from 'react-redux'
import { sendMessage } from '../actions/room'
import { initSocketListener } from '../actions/init'

import NavBar from './NavBar'
import MessageList from './MessageList'
import Message from './Message'
import InputSection from './InputSection'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },

})

@connect(
  state => ({
    items: state.room.items
  })
)
class Room extends Component {

  componentDidMount () {
    initSocketListener(this.props.dispatch)
  }

  send = (content) => {
    this.props.dispatch(sendMessage(content))
  }

  render () {

    const { items } = this.props

    return (
      <View style={styles.container}>
        <NavBar />
        <MessageList items={items} />
        <InputSection onSubmit={this.send} />
      </View>
    )
  }
}

export default Room

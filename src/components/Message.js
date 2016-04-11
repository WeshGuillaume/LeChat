
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableNativeFeedback,
} from 'react-native'

import Thumbnail from './Thumbnail'
import EmojiView from './EmojiView'
import Emoji from 'react-native-emoji'

var styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 8,
    backgroundColor: '#1FABFF',
    position: 'relative',
    overflow: 'visible',
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    textAlign: 'left',
    color: '#ffffff',
  },
  incomming: {
    alignSelf: 'flex-start',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  outgoing: {
    alignSelf: 'flex-end',
    marginRight: 20,
    backgroundColor: '#1FDDA4',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

class Message extends Component {

  state = {
    emoji: false,
    reaction: null
  }

  toggleEmoji = () => {
    this.setState({ emoji: !this.state.emoji })
  }

  react = (emoji) => {
    const { reaction } = this.state
    this.setState({ reaction: reaction === emoji ? null : emoji, emoji: false })
  }

  render () {

    const { message, index } = this.props
    const { emoji, reaction } = this.state
    
    return (
      <View>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#e1e1e1', true)}
            onPress={this.toggleEmoji}>
            <View
              style={[
                styles.container, styles[message.incomming ? 'incomming' : 'outgoing']
              ]} >
              <Text style={styles.content}>{message.content}</Text>
            </View>
        </TouchableNativeFeedback>
        {reaction && <Text style={{
          fontSize: 15,
          alignSelf: message.incomming ? 'flex-start' : 'flex-end',
          marginLeft: 20,
          marginRight: 20,
        }}><Emoji name={reaction} /></Text>}
        {emoji && <EmojiView onReaction={this.react} />}
      </View>
    )
  }
}

export default Message

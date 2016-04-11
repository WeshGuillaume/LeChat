
import React, {
  Component,
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableNativeFeedback,
} from 'react-native'

import Emoji from 'react-native-emoji'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  text: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 50,
    flex: 1,
    textAlign: 'center',
  }
})

class EmojiView extends Component {

  react = name => {
    const { onReaction } = this.props
    onReaction(name)
  }

  render () {

    const reactions = [ 'smiley', '+1', 'laughing', 'heart' ].map((name, key) =>
      <TouchableNativeFeedback
        key={key}
        background={TouchableNativeFeedback.Ripple('#e1e1e1', true)}
        onPress={() => this.react(name)}>
        <Text style={styles.text}>
          <Emoji name={name} />
        </Text>
      </TouchableNativeFeedback>
    )

    return (
      <View style={styles.container}>
        {reactions}
      </View>
    )
  }
}

export default EmojiView

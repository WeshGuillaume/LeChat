import React, {
  Component,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native'

import Room from './Room'
import EmojiView from './EmojiView'

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

class Main extends Component {

  render () {
    return (
      <Room />
    )
  }
}

export default Main

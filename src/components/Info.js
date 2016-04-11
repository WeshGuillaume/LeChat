
import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({

  text: {
    color: '#c4c4c4',
    alignSelf: 'center',
    margin: 10,
  }
})

class Info extends Component {

  render () {

    const { message } = this.props
  
    return (
      <Text style={styles.text}>{message.content}</Text>
    )
  }
}

export default Info

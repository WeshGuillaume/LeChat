
import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Input from './Input'
import Icon from 'react-native-vector-icons'

const styles = StyleSheet.create({

  container: {
    padding: 10,
    backgroundColor: '#fcfcfc',
    borderTopColor: '#e1e1e1',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    margin: 8,
    backgroundColor: '#f5f5f5',
    borderColor: '#e9e9e9',
    borderWidth: 1,
    flex: 1,
  },
})

class InputSection extends Component {

  render () {

    const { onSubmit } = this.props
  
    return (
      <View style={styles.container}>
        <Input style={styles.input} placeholder='Type your message' onSubmit={onSubmit} />
      </View>
    )
  }
}

export default InputSection

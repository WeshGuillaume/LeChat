
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native'

const styles = StyleSheet.create({

  container: {
    height: 40,
    paddingTop: -10,
  },

  input: {
    height: 60,
    padding: 5,
    color: '#626262',
  }
})

class InputField extends Component {

  state = {
    text: ''
  }

  submit = () => {
    const { onSubmit } = this.props
    const { text } = this.state

    if (text.trim() === '') return

    onSubmit(text.trim())
    this.setState({ text: '' })
  }

  render () {

    const { style, onSubmit } = this.props
  
    return (
      <View style={[styles.container, style]}>
        <TextInput
          autoCapitalize='sentences'
          onSubmitEditing={this.submit}
          onChangeText={text => this.setState({ text })}
          autoCorrect={true}
          placeholder='Type your message'
          value={this.state.text}
          style={styles.input} />
      </View>
    )
  }
}

export default InputField

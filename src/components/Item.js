
import React, {
  Component,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Alert,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  left: {
  },

  title: {
    fontSize: 20,
    color: 'black',
  }
})

class Item extends Component {

  render () {

    const { title, content, image, onPress } = this.props
  
    return (
      <TouchableNativeFeedback
        onPress={() => onPress(title)}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.container} elevation={10}>
          <View style={styles.left}>
            <Text style={styles.title}>{title}</Text>  
            <Text>{content}</Text>  
          </View>
          <Image style={{ width: 60, height: 60 }} source={{ uri: image }} />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Item

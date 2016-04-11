
import React, {
  Component,
  Image,
  StyleSheet,
} from 'react-native'

class Thumbnail extends Component{

  render () {

    const { size, uri, style } = this.props


    return (
      <Image source={{ uri }} style={[{ width: size, height: size, borderRadius: 50 }, style]} elevation={10} />
    )
  }
}

export default Thumbnail

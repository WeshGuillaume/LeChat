
import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Thumbnail from './Thumbnail'

const styles = StyleSheet.create({

  container: {
    padding: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    paddingLeft: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nameText: {
    marginTop: -3,
    marginLeft: 7,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#828282',
  },
  name: {
    flexDirection: 'row',
  },
})

class NavBar extends Component {

  render () {
  
    const { name } = this.props

    return (
      <View style={styles.container}>
        <View>
        </View>
        <View style={styles.name}>
          <Thumbnail size={15} uri='https://scontent-cdg2-1.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/c0.17.100.100/p100x100/11130197_10206320730077759_3632375336696841778_n.jpg?oh=a1b9b178ac28d42a9876d690eb81bdd4&oe=57B807E4' />
          <Text style={styles.nameText}>John Doe.</Text>
        </View>
        <View>
        </View>
      </View>
    )
  }
}

export default NavBar

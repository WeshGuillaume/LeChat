
import React, {
  Component,
  StyleSheet,
  View,
  Alert,
  Text,
  ScrollView,
} from 'react-native'

import ListItem from './ListItem'
import Emoji from 'react-native-emoji'
import { Icon } from 'react-native-icons'

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  scroll: {
    paddingTop: 20,
  },
})

class MessageList extends Component {

  render () {
  
    const { items, seen = false } = this.props

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {items.map((item, key) =>
            <ListItem
              content={item}
              key={key} />)}
            {seen && <Text style={{ textAlign: 'right', marginRight: 20, marginBottom: 7, color: '#e1e1e1' }}>Seen</Text>}
        </ScrollView>
      </View>
    )
  }
}

export default MessageList


import React, {
  Component,
  View,
  Text,
} from 'react-native'

import Message from './Message'
import Info from './Info'

class ListItem extends Component {

  renderMessage (content) {
    return <Message message={content} />
  }

  renderInfo (content) {
    return <Info message={content} />
  }

  render () {
  
    const { content } = this.props

    return (
      <View>
        {content.type === 'message' && this.renderMessage(content)}
        {content.type === 'info' && this.renderInfo(content)}
      </View>
    )
  }
}

export default ListItem

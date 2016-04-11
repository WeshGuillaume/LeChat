
import { Alert } from 'react-native'
import { createAction } from 'redux-actions'
import { createSocketHandler } from '../socket/client'

import { receiveMessage, seen } from './room'

export const initSocketListener = dispatch =>
  createSocketHandler({
    'room:incomming-message': content => console.log(`received: ${content}`) || dispatch(receiveMessage(content)),
    'room:message-seen': () => dispatch(seen()),
  })(dispatch)

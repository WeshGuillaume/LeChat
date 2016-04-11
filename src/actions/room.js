
import { createAction } from 'redux-actions'

const addItem = createAction('ADD_ITEM', item => item)
const receiveSeen = createAction('RECEIVE_SEEN')

export const sendMessage = content => dispatch => {
  dispatch(addItem({ type: 'message', incomming: false, content }))
}

export const receiveMessage = content => dispatch => {
  dispatch(addItem({ type: 'message', content, incomming: true }))
}

export const seen = () => dispatch => dispatch(receiveSeen())

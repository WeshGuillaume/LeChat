
import { handleActions } from 'redux-actions'

const initial = {
  name: 'John Doe',
  items: [
    { type: 'message', incomming: true, content: 'Hey dude! How is it going?' },
  ],
  icon: null,
  seen: false,
}

export default handleActions({

  ADD_ITEM: (state, { payload: item }) => ({ ...state, seen: false, items: [ ...state.items, item ] }),
  RECEIVE_SEEN: state => ({ ...state, seen: true }),

}, initial)

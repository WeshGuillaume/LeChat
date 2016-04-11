import { Alert } from 'react-native'

if (window.navigator && Object.keys(window.navigator).length == 0) {
  window = Object.assign(window, { navigator: { userAgent: 'ReactNative' }});
}

const io = require('socket.io-client/socket.io')

export const socket = io.connect('http://192.168.1.81:3001', {
  transports: [ 'websocket' ],
  jsonp: false,
})

socket.connect()

socket.on('error', e => console.log(e.message.description))
socket.on('connect_error', e => console.log(e.description))

export const createSocketHandler = actions => dispatch => {

  Object.keys(actions).map(action => {
    const handler = actions[action]
    socket.on(action, data => handler(data))
  })
}

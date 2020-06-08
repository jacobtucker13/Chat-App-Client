import React, {useState, useEffect} from 'react';
import './ChatRoom.css';
import io from 'socket.io-client'
import Messages from '../Messages/Messages'
import { useParams } from 'react-router-dom'

let socket

const ChatRoom = ({location}) => {
  const [name, setName] = useState(location.state.name)
  const [room, setRoom] = useState(location.state.room)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  //We know that componentWillUnmount executes when component is removed from actual DOM.
  //Similarly if we use useEffect with an empty second argument and adding a return function call it
  //will work as componentWillUnmount
  useEffect(() => {
    socket = io.connect('https://react-node-message-app.herokuapp.com/')
    socket.emit('join', {name: name, room: room}, () => {
    })

    return(() => {
      socket.emit('disconnect')
    })
  }, [])

  const updateMessage = (event) => {
    setMessage(event.target.value)
  }

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  useEffect(() => {
    console.log(messages)
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('sendMessage', {name: name, room: room, message: message}, () => setMessage(''));
  }

  return (
    <div className="centered">
      <h1>Room: {room}</h1>
      <div className="messages">
        <Messages messages={messages} name={name}/>
      </div>
      <div>
        <input id="inputing" placeholder='Type a message...' type="text" value={message} onChange={updateMessage} />
        <input id="submiter" type="submit" value="Send Message" onClick={sendMessage} />
      </div>

    </div>
  )
}


export default ChatRoom;

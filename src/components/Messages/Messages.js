import React, {useState} from 'react';
import Message from './Message/Message'
import io from 'socket.io-client'

const Messages = ({messages, name}) => (
    <div>
      {messages.map((message, i) => (
        <div key={i}><Message message={message} name={name} /></div>
      ))}
    </div>
)

export default Messages

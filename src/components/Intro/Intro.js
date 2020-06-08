import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Intro.css';

//Destination URL: www.yoursite.com?myparam1={id1}&myparam2={id2} <-- for linking with paramaters
const Intro = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [interest, setInterest] = useState('')

  const updateName = (event) => {
    setName(event.target.value)
  }

  const updateRoom = (event) => {
    setRoom(event.target.value)
  }

  const updateInterest = (event) => {
    setInterest(event.target.value)
  }

  return(
    <div className="login-box">
      <h2>Join a Room!</h2>
      <form>
        <div className="user-box">
          <input type="text" value={name} required onChange={updateName} />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="text" value={room} required onChange={updateRoom} />
          <label>Room</label>
        </div>
        <div className="user-box">
          <input type="text" value={interest} onChange={updateInterest} />
          <label>Interest</label>
        </div>
        <Link to={{
            pathname: '/ChatRoom',
            search: `?room=${room}`,
            state: {name: name, room: room}
          }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </Link>
      </form>
    </div>
  )
}

export default Intro

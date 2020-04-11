import React from 'react'
import { Joystick } from 'react-joystick-component';
import API from "../../util/API";


const STOP = 's'

const JoystickComponent = (props) => {

  const handleMove = async (e) => {
    try {
      await API.post("/send-mqtt", { message: orderToSend(e.direction)})
    } catch (err) {
      console.log(err)
    }
  }

  const handleStop = async (e) => {
    try {
      await API.post("/send-mqtt", { message: STOP})
    } catch (err) {
      console.log(err)
    }
  }

  const orderToSend = (direction) => {
    switch(direction) {
      case 'FORWARD': 
      return 'f'
      case 'BACKWARD':
        return 'b'
      case 'LEFT':
        return 'l'
      case 'RIGHT':
        return 'r'
      case 'stop':
        return 's'
      default:
        return 
    }
  }

  return (
    <div>
      <Joystick 
        size={100} 
        baseColor="black" 
        stickColor="#565656" 
        move={handleMove} 
        stop={handleStop}
        ></Joystick>
    </div>
  )
}

export default JoystickComponent
import React from 'react'
// import Switch from "react-switch";

import './App.css';

import SocketConnection from './util/socket'

// Components
import NavBar from './components/NavBar/NavBar'
import JoyWrapper from './components/Joystick/Joystick'


// const client  = mqtt.connect('mqtt://192.168.1.63', {clientId:"mqttjs02"})

function App() {
  const serverUrl='http://localhost:3000', topic='evento';
  const { data, isConnected } = SocketConnection(serverUrl, topic);

  // const [checkedRed, setCheckedRed] = useState(false)
  // const [checkedBlue, setCheckedBlue] = useState(false)


  // useEffect(() => {
  //   client.on('connect', function () {
  //     console.log("Connected to mqtt server")
  //   })
    
  //   client.on('message', function (topic, message) {
  //     // message is Buffer
  //     console.log(message.toString())
  //     client.end()
  //   })
  // },[])

  // const handleChangeRed = async () => {
  //   try {
  //     setCheckedRed(!checkedRed)
  //     axios.post("http://localhost:3000/send-mqtt", { message: checkedRed ? '0' : '1'}, config)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const handleChangeBlue = async () => {
  //   try {
  //     setCheckedBlue(!checkedBlue)
  //     axios.post("http://localhost:3000/send-mqtt", { message: checkedBlue ? '4' : '5'}, config)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
    <NavBar socketConnection={isConnected}/>
    <div className="App">
      <div className="switch-container">
        <JoyWrapper />
        {/* <label className="Label">
          <span>LED ROJO</span>
            <Switch 
            onChange={handleChangeRed} 
            onColor={"#b51e1e"}
            checked={checkedRed}
            checkedIcon={false}
            uncheckedIcon={false}
            height={60}
            width={120} 
            />
          </label>
          <label className="Label">
          <span>LED BLUE</span>
            <Switch 
            onChange={handleChangeBlue} 
            onColor={"#006eff"}
            checked={checkedBlue}
            checkedIcon={false}
            uncheckedIcon={false}
            height={60}
            width={120} 
            />
          </label> */}
      </div>
      <div>
        {
          data && <p>{data.message}</p>
        }
      </div>
    </div>
    </>
  );
}

export default App;

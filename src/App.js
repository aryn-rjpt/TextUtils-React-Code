import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';



export default function App() {

  const [displayMode, setDisplayMode] = useState("light");
  // const [alert, setAlert] = useState(null)

  // function showAlert(msg, type) {
  //   setAlert({
  //     msg: msg,
  //     type: type
  //   });
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 2000)
  // }

  function changeMode() {
    displayMode === "light" ? setDisplayMode("dark") : setDisplayMode("light");
    displayMode === "light" ? document.body.style.backgroundColor = '#212529' : document.body.style.backgroundColor = 'white';
    // showAlert(`Changed mode to ${displayMode}`, 'success');
  }





  return <div className={`${displayMode === "light" ? "text-dark" : "text-light"}`}>


    <Navbar title="TextUtils" aboutText="About TextUtils" displayMode={displayMode} changeMode={changeMode} />
    {/* <Alert alert={alert} /> */}
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below: " displayMode={displayMode} />
    </div>


  </div>
}
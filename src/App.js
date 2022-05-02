import "./App.css";
import React, { useState } from 'react';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
//   HashRouter,
} from "react-router-dom";


function App() {

    // dark/light modes : 
    const [mode, setmode] = useState("light");

    // for adding more colors : 
    // let removecolors = () => {
    //     document.body.classList.remove('bg-primary');
    //     document.body.classList.remove('bg-success');
    //     // document.body.classList.remove('bg-dark');
    //     document.body.classList.remove('bg-warning');
    // }

    const togglemode = (color) => {
        // // for adding more colors : 
        // removecolors();
        // document.body.classList.add('bg-'+color);
        if (mode === "light") {
            setmode("dark");
            document.body.style.backgroundColor = "black";
            showAlert("success", "Dark mode is enabled successfully");
            document.title = 'TextUtils - Dark Mode';
        } else {
            setmode("light");
            document.body.style.backgroundColor = "white";
            showAlert("success", "Light mode is enabled successfully");
            document.title = 'TextUtils - Light Mode';
        }
    }

    // alert box :  
    const [alert, setalert] = useState(null);

    let showAlert = (alertType, message) => {
        setalert({
            type: alertType,
            msg: message
        });

        setTimeout(() => {
            setalert(null)
        }, 3000);
    }

    return (
        <>  
            <BrowserRouter>
            <Navbar title="TestUtils" mode={mode} togglemode={togglemode} />
            <Alert alert={alert} />      
                <Routes>
                    <Route exact path="/" element={<Textarea heading="Enter Your Text here : " mode={mode} showAlert={showAlert} />} />
                    <Route exact path="/about" element={<About mode = {mode} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
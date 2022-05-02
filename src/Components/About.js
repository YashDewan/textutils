import React from 'react'

export default function About(props) {

    // const [modeBtn, setModeBtn] = useState("Enable Dark Mode");

    // const [mystyle, setmystyle] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // });

    // let switchMode = () => {
    //     if (mystyle.backgroundColor === "white") {
    //         setmystyle({
    //             backgroundColor: "#212529",
    //             color: "white",
    //             border: "1px solid white"
    //         });
    //         setModeBtn("Enable Light Mode");
    //     } else {
    //         setmystyle({
    //             backgroundColor: "white",
    //             color: "black",
    //         });
    //         setModeBtn("Enable Dark Mode");
    //     }
    // }


    let mystyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'#121111':'white',
    }

    return (
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Free to Use 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatum aliquam deserunt cum atque deleniti, tenetur perspiciatis inventore eligendi, voluptate vitae blanditiis consectetur molestias, aut obcaecati porro molestiae sed provident.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatum aliquam deserunt cum atque deleniti, tenetur perspiciatis inventore eligendi, voluptate vitae blanditiis consectetur molestias, aut obcaecati porro molestiae sed provident.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Dark mode is also available
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatum aliquam deserunt cum atque deleniti, tenetur perspiciatis inventore eligendi, voluptate vitae blanditiis consectetur molestias, aut obcaecati porro molestiae sed provident.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='btn btn-primary my-3' onClick={switchMode}>{modeBtn}</button> */}
        </div>

    )
}

import React , {useState} from "react";
import ComponentTwo from "./ComponentTwo";
import {MyContaxt} from "./Context";

const ComponentOne = () => {
    const [name , setName] = useState("");


    

    return (
        <div>
            <h1>In Component One</h1>
            <input type = "text" onChange = {(e) => setName(e.target.value)}></input>
            <h3>Name : {name}</h3>
            <MyContaxt.Provider value = {name}>
                <ComponentTwo></ComponentTwo>
            </MyContaxt.Provider>
        </div>
    );
}

export default ComponentOne;
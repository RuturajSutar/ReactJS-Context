import React , {useState} from "react";
import {MyContaxt} from "./Context";


const ComponentTwo = () => {

    const [myData , setData] = useState("");

    return (

        <div>
            <br/>
            <h1>In Component Two</h1>
            <MyContaxt.Consumer>
                {
                    (data) => {
                        setData(data)
                    }
                }
            </MyContaxt.Consumer>
            <h3>Name is : {myData}</h3>
        </div>

    );
}

export default ComponentTwo;
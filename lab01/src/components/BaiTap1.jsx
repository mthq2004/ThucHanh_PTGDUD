import "./BaiTap1.css"
import React, { useState } from 'react';

function BaiTap1() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operator, setOperator] = useState('')
    const [output, setOutput] = useState("*");

    function handleChangeA(e){
        setA(e.target.value);
    }
    function handleChangeB(e){
        setB(e.target.value);
    }

    function handleRadio(e){
        setOperator(e.target.value);
    }

    function handleClick(){
        if(operator == "+")
        setOutput(parseInt(a) + parseInt(b));
        else if(operator == "-")
        setOutput(parseInt(a) - parseInt(b));
        else if(operator == "*")
        setOutput(parseInt(a) * parseInt(b));
        else if(operator == "/")
        setOutput(parseInt(a) / parseInt(b));
    }
    return (
        <div>
            <input onChange={handleChangeA} type="text" placeholder='Enter a...' className="txtInput"/>
            <br />
            <input onChange={handleChangeB} type="text" placeholder='Enter b...' className="txtInput"/>
            <br />
            <input onChange={handleRadio} type="radio" name="group" id="" value={"+"} className="rd"/> <span>+</span>
            <input onChange={handleRadio} type="radio" name="group" id="" value={"-"} className="rd"/> <span>-</span>
            <input onChange={handleRadio} type="radio" name="group" id="" value={"*"} className="rd"/> <span>*</span>
            <input onChange={handleRadio} type="radio" name="group" id="" value={"/"} className="rd"/> <span>/</span>
            <br />
            <button className="btn" onClick={handleClick}>Click</button>
            <br />
            <span id="result">Result is: {output}</span>
        </div>
    );
}

export default BaiTap1;

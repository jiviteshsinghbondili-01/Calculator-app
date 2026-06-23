import { useState } from "react"
import "./App.css"
function Calculator(){
    const [value,setValue]=useState("");
    const appendValue=(value)=>{
        setValue(input+value);
    }
    const clearDisplay=()=>{
        setValue("");
    }
    const deleteLast=()=>{
        setValue(input.slice(0,1));
    }
    const calculate=()=>{
         try{
            setInput(eval(input).toString());
         }
        catch{
            setInput("Error");
        }
  };
    return(
        <div>
        <input type="text" value={input} readOnly/>
        <button className="operator" onclick={clearDisplay()}>C</button>
        <button className="operator" onclick={deleteLast()}>Del</button>
        <button className="operator" onclick={()=>appendValue('%')}>%</button>
        <button className="operator" onclick={()=>appendValue('/')}>/</button>
        <button onclick={()=>appendValue('7')}>7</button>
        <button onclick={()=>appendValue('8')}>8</button>
        <button onclick={()=>appendValue('9')}>9</button>
        <button className="operator" onclick={()=>appendValue('*')}>X</button>
        <button onclick={()=>appendValue('4')}>4</button>
        <button onclick={()=>appendValue('5')}>5</button>
        <button onclick={()=>appendValue('6')}>6</button>
        <button className="operator" onclick={()=>appendValue('-')}>-</button>
        <button onclick={()=>appendValue('1')}>1</button>
        <button onclick={()=>appendValue('2')}>2</button>
        <button onclick={()=>appendValue('3')}>3</button>
        <button className="operator" onclick={()=>appendValue('+')}>+</button>
        <button onclick={()=>appendValue('0')}>0</button>
        <button onclick={()=>appendValue('.')}>.</button>
        <button className="operator" onclick={calculate()}>=</button>
        </div>
    );
}
export default Calculator;
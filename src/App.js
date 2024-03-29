import React,{useState} from 'react';
import './App.css';

const App = () => {

  const [result,setResult]=useState("");

  const clickHandler =(event)=> {
    setResult(result.concat(event.target.value));
  };

  const resetInput = () => {
    setResult("");
  };

  const calculateResult = () => {
    setResult(eval(result).toString());
  };
  return(
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="%" className="button" onClick={clickHandler}/>

      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="/" className="button" onClick={clickHandler}/>

      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>

      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      
      
      
      <input type="button" value="CLR" className="button btn1" onClick={resetInput}/>
      <input type="button" value="=" className="button btn1" onClick={calculateResult}/>
    </div>
  );
}

export default App;
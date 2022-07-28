import { useState } from "react";
import "./App.css";
import text from "./helpers/data";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault()
    if(number>=1){
      setData(text.slice(0,(number)))
      setShow(false)
    }else{
      setData([])
      alert('Please enter a number greater than 1')
    }
  };

  // console.log(text.length);
  // console.log(data[0]);
  // console.log(data.slice(0,number));
  return (
    <div className="Ipsum">
      <div className="container m-auto text-center mt-4 bg-secondary">
      <div className="headerDiv ">
        <h1 className="text-warning">TIRED OF BORING LOREM IPSUM?</h1>
      </div>
      <div className="formDiv mt-4">
        <form action='paragraphs'>
          <label className="fw-bold fs-2 " htmlFor=''>Paragraphs : </label>
          <input className="inputDiv"
            onChange={handleChange}
            type='number'
            name='number'
            id='number'
            value={number}
            min='1'
          />
          <button className="submitDiv " onClick={handleClick} type='submit'>
            GENERATE
          </button>
        </form>
      </div>
      <div className="articleDiv mt-5 bg-secondary col-xs-5">
         {show ? (
        <article>
          <div className='list'>
            <p>{text[1]}</p>
          </div>
        </article>
      ) : (
        <article>
          {data.map((item, index) => {
            return (
              <div className="" key={index}>
                <p>{item}</p>
              </div>
            );
          })}
        </article>
      )}
      </div>
    </div>
    </div>
    
  );
}

export default App;

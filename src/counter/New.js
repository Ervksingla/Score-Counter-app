import React, { useState, useEffect } from "react";
import "./new.css";

export const New = () => {
  const [state, setstate] = useState(0);
  const [state2, setstate2] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    console.log("dscbc");
    console.log(fetch("https://fakestoreapi.com/products"));
    fetch("https://fakestoreapi.com/products")
      .then((response) =>{
        if(!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData)=> console.log(actualData))
      .catch((err) =>{
        console.log(err.message);
      });
    
    if (state >= 25 || state2 >= 25) {
      setstate(0);
      setstate2(0);
    }
  }, [state, state2]);

  // let arr= [2,3,4]
  // const {x, y, c} = arr
  // console.log(x,y,c)
  // let c=<h1>vvv</h1>
  // console.log(c);
  // console.log(state);
  // console.log(useState("vikas"))
  //     let c="vikas";
  // const my = (item) =>{
  //   console.log('Entered',item);
  // }
  console.log(state);
  return (
    <div className="btn-class">
      <div className="all">
        HOME
        <button className="btn" onClick={() => setstate(state + 1)}>
          Score +1
        </button>
        <button className="btn" onClick={() => setstate(state + 2)}>
          Score +2
        </button>
        <button className="btn" onClick={() => setstate(state + 3)}>
          Score +3
        </button>
        <div className="state">{state}</div>
      </div>

      <div className="all">
        GUEST
        <button className="btn" onClick={() => setstate2(state2 + 1)}>
          Score +1
        </button>
        <button className="btn" onClick={() => setstate2(state2 + 2)}>
          Score +2
        </button>
        <button className="btn" onClick={() => setstate2(state2 + 3)}>
          Score +3
        </button>
        <div className="state">{state2}</div>
      </div>
    </div>
  );
};

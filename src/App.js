/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./App.css";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";

// function ShowQuotes(props) {
//   useEffect(() => {
//     return () => {
//       console.log("show A se demonte");
//       props.handleReset();
//     };
//   }, [props.show]);
//   return (
//     <div className="showtab">
//       {props.quotes.length > 0 ? (
//         <>
//           <h3></h3>
//           <img></img>
//         </>
//       ) : null}
//     </div>
//   );
// }

function App() {
  const [quotes, setQuotes] = useState([]);
  const [show, setShow] = useState(true);

  const handleReset = () => {
    setQuotes([]);
  };

  const getSomething = async () => {
    const promise = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=1"
    );
    const result = await promise.json();
    // console.log("@@@", promise);
    // console.log("result:", result);
    setQuotes(result);
  };

  return (
    <>
      <button onClick={() => setShow(!show)}>Change Tab</button>
      <div className="App">
        <div className="left">
          {show ? (
            <>
              <button onClick={() => getSomething()}>Get quotes</button>
              <Tab1 show={show} handleReset={handleReset} quotes={quotes} />
            </>
          ) : null}
        </div>
        <div className="right">
          {show ? null : (
            <>
              <button onClick={() => getSomething()}>Get quotes</button>
                <Tab2 show={show} handleReset={handleReset} quotes={quotes}/>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default App;

import {useEffect} from 'react';

function Tab1(props) {
  useEffect(() => {
    return () => {
      console.log("show A se demonte");
      props.handleReset();
    };
  },[props.show]);
  return (
    <div className="showtab">
      {props.quotes.length > 0 ? (
        <>
          <h1>{props.quotes[0].character}</h1>
          <img src={props.quotes[0].image} alt=""></img>
          <h3>{props.quotes[0].quote}</h3>
        </>
      ) : null}
    </div>
  );
}

export default Tab1;

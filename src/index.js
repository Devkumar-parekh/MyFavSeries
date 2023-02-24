import React from "react";
import  ReactDOM  from "react-dom";
import App from "./app";
import './app.css';



// function showCards(val){
//   return(
//       <Card
//           imgsrc= {val.imgsrc}
//           title= {val.title}
//           descr= {val.descr}
//           link= {val.link}
//       />
//   );
  
// }


ReactDOM.render(
  <>
    <div className="container">
      {/* sData.map(showCards); */}
      <App/>
    </div>
  </>,
  document.getElementById('root')
);
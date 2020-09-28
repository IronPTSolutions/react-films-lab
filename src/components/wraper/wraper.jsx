import React from 'react';
import Card from '../card/card'



function Wraper(props) {
  
  



  return (
    <div className="container" >
      <div className="row">
        <div className="col-12">
          <div className="card-columns">
            {<Card />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wraper;

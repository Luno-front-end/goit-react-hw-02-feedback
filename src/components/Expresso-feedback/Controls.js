import React from "react";

export default function Controls({ options, onLeaveFeedback}) {
       const btnMap = Object.keys(options);
    return (<div>
       
        {btnMap.map(item => (
             
            <button
                key={Math.random(3)}
                name={item}
                type="button"
                onClick={onLeaveFeedback}
            >
                {item}
                {/* {a.map(name => name)} */}
            </button>
          ))}
        </div>)
   
     
}

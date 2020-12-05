import React from "react";

export default function Controls({ options, onLeaveFeedback }) {
       const btnMap = Object.keys(options);
    return (<div>
       
        {btnMap.map(item => (
             
            <button
                key={Math.random(3)}
                name={item}
                type="button"
                onClick={onLeaveFeedback}
            >
                {item[0].toUpperCase() + item.slice(1)}
                {/* { btnMap.toUpperCase() + btnMap.slice(1) } */}
            </button>
          ))}
        </div>)
    // (<div> 
    //     <button type="button" onClick={onUpdateGood}>Добре</button>
    //       <button type="button" onClick={onUpdateNeutral}>Нейтрально</button>
    //       <button type="button" onClick={onUpdateBad}>Погано</button>
    // </div>)

     
}

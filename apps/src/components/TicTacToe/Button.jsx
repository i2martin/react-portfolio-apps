import React from "react";
function Button(props)
{
    return(
    <div className="ttt-row">
        {[...props.row].map((field,index) => 
        {
            return(
                <div key={index} type="button" onClick={() => props.clicked(index,props.rowId)} className="square">
                    <span className="marks">{field}</span>
                </div>               
            )
        })}
    </div>
    );
}

export default Button;  
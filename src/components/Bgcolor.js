import React, { useState } from "react";
import Select from "react-select";

function Bgcolor() {
   
   var colors = [
    {
      label: "Red",
        value: "1",    
      },
      {
        label: "Green",
        value: "2",
      },
      {
        label: "Blue",
        value: "3",     
      },
      {
        label: "Yellow",
        value: "4",      
      },
      {
        label: "Salmon",
        value: "5",
      },
      {
        label: "Teal",
        value: "6",
      },
      {
        label: "Indigo",
        value: "7",
      },
      {
        label: "Orchid",
        value: "8",
      },
   ];
   var [setbgcolor,ddlvalue] = useState(colors.label);
   var ddlhandle = e => {
    ddlvalue(e.label);
   }
   
    return (
        <div className="container">
            <h1>Chameleonize!</h1>
            <p>What color ?</p>
            <style>{'body { background-color:'+setbgcolor+';}'}</style>
<Select className="selected" options={colors} onChange={ddlhandle}></Select>
<center>
    <b>Background color is: {setbgcolor} </b>
</center>
        </div>
    )
}

export default Bgcolor;
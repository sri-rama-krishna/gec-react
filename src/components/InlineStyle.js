/**
 * This is example for style sheets (using inline style)
 */

 import React from "react";
 
 const heading = {
    fontSize: '72px',
    color: 'blue'
 }
 function InlineStyle(){
     return(
         <div>
             <h1 style={heading}>Inline StyleSheets</h1>
         </div>
     )
 }
 export default InlineStyle;
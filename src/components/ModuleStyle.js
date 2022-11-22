/**
 * This is example for style sheets (using css modules)
 * 
 */

import React from "react";
import './appStyles.css'
import mStyles from './appStyles.module.css'
function ModuleStyle(){
    return (
        <div>
            <h1 className="error">Error using normal styles</h1>
            <h1 className={mStyles.success}>Success using css modules</h1>
        </div>
    )

}
export default ModuleStyle
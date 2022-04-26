import React from 'react';

const RadioInput = ({label,name,formik,radioOptions}) => {
    return ( 
        <div className="formcontrol">
            {radioOptions.map((items)=>
                <React.Fragment key={items.value}>
                <input 

             type="radio"
              id={items.value} 
              value={items.value} 
              name={name} 
              onChange={formik.handleChange}
              checked={formik.values[name]===items.value}

               />
              <label htmlFor={items.value}>{items.label}</label> 
            </React.Fragment>    
             ) }
                    
            {formik.errors[name] && formik.touched[name] && 
            <div className="errors">{formik.errors[name]}</div>}  
        </div>     
     );
};
 
export default RadioInput;
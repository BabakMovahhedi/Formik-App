import React from 'react';

const CheckBoxInput = ({name,formik,interest}) => {
    return ( 
        <div className="formcontrol">
            {interest.map((items)=>
                <React.Fragment key={items.value}>
                <input 

             type="checkbox"
              id={items.value} 
              value={items.value} 
              name={name} 
              onChange={formik.handleChange}
              checked={formik.values[name].includes(items.value)}

               />
              <label htmlFor={items.value}>{items.label}</label> 
            </React.Fragment>    
             ) }
                    
            {formik.errors[name] && formik.touched[name] && 
            <div className="errors">{formik.errors[name]}</div>}  
        </div>     
     );
}
 
export default CheckBoxInput;
const SelectComponent = ({nationality,name,formik}) => {
    return ( 
        <div className="formcontrol"  >
            <select name={name} {...formik.getFieldProps(name)} >
                {nationality.map((items)=>(
                <option key={items.value} value={items.value}>{items.label} </option>
        )) }
            </select>
            {formik.errors[name] && formik.touched[name] && 
            <div className="errors">{formik.errors[name]}</div>}
        </div>
     );
}
 
export default SelectComponent;
import { useFormik } from "formik";
import React from "react";
import * as yup from 'yup';
import Input from "./common/Input";
import RadioInput from "./common/RadioInput";
import SelectComponent from "./common/SelectComponent";
import CheckBoxInput from "./common/CheckBoxInput";


const radioOptions=[
   { label:'male', value:'0'},
   { label:'female', value:'1'},

];
const interest=[
    { label:'react.js', value:'Re'},
    { label:'veu.js', value:'Ve'},
    { label:'bootstrap', value:'Bo'}, 
 ];

const nationality=[
    {label:'select nationality..' , value:''},
    {label:'iran' , value:'Ir'},
    {label:'usa' , value:'Us'},
    {label:'germany', value:'Ger'}
];


const validationSchema=yup.object({
    name:yup.string().required('name is required'),
    email:yup.string().email('invalid email format').required('email is required'),
    password:yup.string().required('password is required'),
    gender:yup.string().required('select gender'),
    nationality:yup.string().required('select nationality'),
    interest:yup.array().min(1).required('muste select one')
});
const SignUp = () => {
    
    const formik=useFormik({initialValues:{
        name:'',
        email:'',
        phone:'',
        password:'',
        gender:'',
        nationality:'',
        interest:[],
    },
    

    onSubmit:(values)=>{console.log(values)},
    validationSchema:validationSchema,
    validateOnMount:true,
});
console.log(formik.values);
    return (
        <React.StrictMode>
        <div>
            <form onSubmit={formik.handleSubmit}>
                 
            <Input formik={formik} name='name' label={'Name'} />
            <Input formik={formik} name='email' label={'Email'} />
            <Input formik={formik} name='phone ' label={'phone'} />
            <Input formik={formik} name='password' label={'password'} />  
                  
            <RadioInput formik={formik} radioOptions={radioOptions} name='gender' />
                
            <SelectComponent formik={formik} nationality={nationality} name='nationality'  />

            <CheckBoxInput formik={formik} interest={interest} name='interest' />
                                
            <button type="submit" disabled={!formik.isValid} >signup</button>
              
            </form>
        </div>
        </React.StrictMode>
      );
};
 
export default SignUp;
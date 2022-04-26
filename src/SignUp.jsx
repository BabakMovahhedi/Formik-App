import { useFormik } from "formik";
import * as yup from 'yup';
import Input from "./common/Input";



const validationSchema=yup.object({
    name:yup.string().required('name is required'),
    email:yup.string().email('invalid email format').required('email is required'),
    password:yup.string().required('password is required'),
    gender:yup.string().required('select gender'),
});
const SignUp = () => {
    
    const formik=useFormik({initialValues:{
        name:'',
        email:'',
        phone:'',
        password:'',
        gender:'',
    },
    onSubmit:(values)=>{console.log(values)},
    validationSchema:validationSchema,
    validateOnMount:true,
});
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} name='name' label={'Name'} />
                <Input formik={formik} name='email' label={'Email'} />
                <Input formik={formik} name='phone ' label={'phone'} />
                <Input formik={formik} name='password' label={'password'} />
                
                <div>
                    <input type="radio" id='0' value='0' name='gender' onChange={formik.handleChange} />
                    <label htmlFor="0">male</label>
                    <input type="radio" id='1' value='1' name='gender' onChange={formik.handleChange} />
                    <label htmlFor="1">female</label>
                </div>
                <button type="submit" disabled={!formik.isValid} >signup</button>
              
            </form>
            
        </div>
      );
};
 
export default SignUp;
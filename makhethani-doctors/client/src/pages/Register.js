import React from 'react'
import { Form , Input } from  'antd'
import   '../styles/RegisterStyles.css';
import { Link} from  'react-router-dom'

const Register = () => {

    // const navigate= useNavigate();
    // form handler

    const  onFinishHndler= (values) => {
        console.log(values);

    }
  return (

    <>

    <div className=" form-container">
        
        <Form layout='vertical' onFinish={onFinishHndler} className=" register-form">

        <h1 className='text-center'> Register Form</h1>

            <Form.Item label=" Name"  name=" name">
                <Input type="text" required />
            </Form.Item>

            <Form.Item label=" Email"  name=" email">
                <Input type="email" required />
            </Form.Item>


            <Form.Item label=" Password"  name=" password">
                <Input type="text" required />
            </Form.Item>

            <Link to="/login" className=" m-3">
                User already Register
            </Link>
            
            <button className=' btn btn-primary' type='submit'>
                Register
            </button>

        </Form>

        

    </div>
    </>
  
  )
}

export default Register
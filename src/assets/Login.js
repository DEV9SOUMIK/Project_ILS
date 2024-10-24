import React from 'react'
import { useForm } from 'react-hook-form'



export default function Login()
{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    
    <>
      

      
<div 
style={{height:'340x',width:'318px', background:'rgb(223, 242, 235)',borderRadius:'4px',position:'absolute', left:'40%', top:'15%'}}>



      <h1 style={{fontFamily:'Arial', color:'#2f1c6a', textAlign:'center'}}>
        Login
      </h1>


      <p style={{fontFamily:'Arial',  textAlign:'center'}}>
        Password 6 charecter or more &#169;
      </p>



    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label style={{fontFamily:'Arial',margin:'4px'}}>Email: &#9993;
      {/*register your input into the hook by invoking the "register" function*/}
      <input type='email' defaultValue="@gmail.com" {...register("email")} style={{borderRadius:'4px', margin:'4px',borderColor:'rgb(55, 175, 225)', borderStyle:'solid', borderWidth:'0.8px', height:'24px',width:'300px'}}/>
      </label>

      <label style={{fontFamily:'Arial', margin:'4px'}}>Password: &#128274;
      {/* include validation with required or other standard HTML validation rules */}
      <input type='password'{...register("password", { required: true, minLength:6 })} style={{borderRadius:'4px', margin:'4px',borderColor:'rgb(55, 175, 225)',borderStyle:'solid',borderWidth:'0.8px', height:'24px',width:'300px'}} />
      </label>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <p style={{fontFamily:'Arial', margin:'12px', textAlign:'center'}}>Dont have an account</p>
      

      <a href='https://www.w3schools.com/html/html_paragraphs.asp' target='blank'>Create new account</a>
      

      <input type="submit" style={{background:'rgb(55, 175, 225)', border:'none', color:'white', height:'24px',width:'200px', borderRadius:'4px', margin:'12px', cursor:'pointer'}}/> <br></br>
      
    </form>

    
</div>

    </>
    
    
  )
}


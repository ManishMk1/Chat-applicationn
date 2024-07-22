import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Innput"
function Form({isSignInPage=false}) {
  const [userData,setUserData]=useState({
    ...Button(!isSignInPage && {
      fullName:''
    }),
    email:'',
    password:''
  })
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-bold">
        Welcome{isSignInPage&&", Back"}
      </div>
      {console.log(userData.password)}
      <div className="text-xl font-light mb-10">{isSignInPage?"Sign in to get Explore":"Sign Up to get started"}</div>
      <form action="" className="flex flex-col items-center  w-full" onSubmit={console.log('submit')}>
      {!isSignInPage&&<Input label="Full Name" name="name" placeholder="Enter your name" isRequired={true} className="mb-2" value={userData.fullName} onChange={(e)=>setUserData({...userData,fullName:e.target.value})} />}
      <Input label="Email Address" name="mail" placeholder="Ex:abc@gmail.com" isRequired={true} className="mb-2" type="email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
      <Input label="Password" name="password" placeholder="Enter your Password" type="password" isRequired={true} value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
      <Button label={isSignInPage?"Sign In":"Sign Up"} className="mt-8 mb-3" type="submit"></Button>
     
      </form>
      <div>{isSignInPage?"Don't have an account?":"Already have an Account?"}<span className="text-primary cursor-pointer underline"> {isSignInPage?"Sign Up":"Sign in"}</span> </div>

    </div>
  )
}

export default Form
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const[isSignIn, setIsSignIn]= useState(false);
    
    const handleSignIn= () =>{
        setIsSignIn(!isSignIn)
    }
  return (
    <div>
        <Header />

        <div>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d8132cba-0024-4b01-86f4-2bac9792e1dd/web/IN-en-20261102-TRIFECTA-perspective_971d7f82-9e80-48cc-aedc-f7bc0e68c14f_small.jpg"
            alt="loginBackground"/>
            </div>

            <form className="absolute bg-black bg-opacity-80 w-3/12 p-10 mx-auto my-36 right-0 left-0 text-white rounded-lg">
                <label className="font-bold text-2xl"> {isSignIn ? "Sign In" : "Sign Up"}</label>
                {isSignIn && <input className=" my-4 p-2 w-full bg-gray-600 bg-opacity-80" type="text" placeholder="User Name"/>}
                <input className=" my-4 p-2 w-full bg-gray-600 bg-opacity-80" type="text" placeholder="Email Address"/>
                   
                <input className="my-4 p-2 w-full bg-gray-600 bg-opacity-80" type="password" placeholder="Password"/>
                
                <button className="bg-red-600 w-full text-white py-2 px-4 rounded-lg">
                   {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <h5 className="cursor-pointer my-4 " onClick={handleSignIn}>{isSignIn ? "New to Nextflix ? Sign Up" : "Already Regesterd plese Sign In"}  </h5>
                
            </form>
        </div>

    </div>
  )
}

export default Login
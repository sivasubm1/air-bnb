import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email,  setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
         try {
           await  axios.post('/register', {
                name,
                email,
                password
               });
               alert('Registration successful. Now you can log in.')
         } catch (e) {
            alert('Registration failed. Please try again later.')
        }
     
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
          <div className="mb-64">
          <h1 className="text-4xl text-center">Register</h1>
          <form className="max-w-lg mx-auto" onSubmit = {registerUser}>
            <input type="text" placeholder="John Doe" value={name} onChange={(evt) => setName(evt.target.value)} />
            <input type="email" placeholder="your@email.com" value={email} onChange={(evt) => setEmail(evt.target.value)}/>
            <input type="password" placeholder="password"  value={password} onChange={(evt) => setPassword(evt.target.value)}/>
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">Already a member?  <Link className="underline text-bold" to={'/login'}>Login</Link></div>
          </form>
          </div>      
        </div>
      )
}

export default RegisterPage;
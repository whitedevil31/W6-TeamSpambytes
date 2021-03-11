import React from 'react'
import { useHistory } from 'react-router-dom'

function Login () {
    const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();

  const handleSubmit = (e: React.FormEvent<EventTarget>) :void => {
    e.preventDefault();
    const data = { username: email, password: password };
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
      response.json().then((res) => {
        console.log(res);
        if (response.status === 200) {
          history.push("/dashboard", {});
        }
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
         <h2 className="mt-7 text-center text-4xl font-extrabold text-gray-900">
         Sign in to your account
         </h2>
         <p className="mt-2 text-center text-sm text-gray-600"></p>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
       <input type="hidden" name="remember" value="true"></input>
       <div className="rounded-md shadow-sm -space-y-px">
         <div>
           <label className="sr-only">Email address</label>
           <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}>                
           </input>
         </div>

         <div>
           <label className="sr-only">Password</label>
           <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
         </div>
       </div>
       <div className="flex items-center justify-between">
           <div className="flex items-center">
             <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
             <label className="ml-2 block text-sm text-gray-900">
               Remember me
             </label>
           </div>
           <div className="text-sm">
             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
               Forgot your password?
             </a>
           </div>          
       </div>
       <div>
         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         Sign in
         </button>
       </div>
     </form>
     </div>
    </div>

    )
} 

export default Login
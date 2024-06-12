import { useState } from "react";


const Signin = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

const targetUsername = (e) => {
  setUsername(e.target.value);
  
};
const targetEmail = (e) => {
  setEmail(e.target.value);
};
const targetPassword = (e) => {
  setPassword(e.target.value);
};
const submit = () =>{

  alert(" username is : " + username + " email is :" + email + " password is: "+ password)
}


  return (
    <div className="flex flex-col p-4 items-center justify-center w-full h-screen bg-slate-100 text-black">
      <div className="container max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-4xl font-bold text-center text-black">Log In</h2>
        <form  className="space-y-6" action="#" method="get" >
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-black ">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={targetUsername}
              className="w-full px-4 py-2 text-pink-600 rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={targetEmail }
              className="w-full px-4 py-2  text-pink-600 border border-slate-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={targetPassword}
              className="w-full px-4 py-2  text-pink-600 border border-slate-500  rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              onClick={submit}
             className="px-6 py-2 font-semibold text-white bg-black rounded-lg transform hover:translate-y-[1px] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
       <div className="">
      <h2 className="text-black text-xl">username: {username}</h2>
      <h2>email: {email}</h2>
      <h2>password : {password}</h2>
       </div>
    </div>
  );
};

export default Signin;


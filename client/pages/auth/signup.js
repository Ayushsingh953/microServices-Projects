import {useState} from 'react';

const Signup = () =>{

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    function onSubmit(event){
        event.preventDefault();

        console.log(email,password);
    }

    return (
        <form onSubmit={onSubmit}>
           <h1>Sign Up </h1>
           <div className="form-group">
               <label>Email Address</label>
               <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
           </div>
           <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
          </div>
        <button className="btn btn-primary">Sign Up</button>
 </form>
    )
}

export default Signup;
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import './signup.css';

const Signup = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [address, setaddress] = useState('')
  const [contact_number, setcontact_number] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>CREATE A NEW ACCOUNT</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={FirstName} 
      />
       <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => setLastName(e.target.value)} 
        value={LastName} 
      />

      <label>Address:</label>
      <input 
        type="text" 
        onChange={(e) => setaddress(e.target.value)} 
        value={address} 
      />

      <label>Contact Number:</label>
      <input 
        type="tel" 
        onChange={(e) => setcontact_number(e.target.value)} 
        value={contact_number} 
      />
       
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
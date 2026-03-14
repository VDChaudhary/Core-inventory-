import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  const [message,setMessage] = useState("")

  const submit = async () => {

    try {

      const res = await fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      })

      const data = await res.json()

      if(res.ok){
        setMessage("Account created successfully")
        setTimeout(()=>{
          navigate("/login")
        },1000)
      }
      else{
        setMessage(data.message || "Signup failed")
      }

    } catch (err){
      setMessage("Server error")
    }

  }

  return(

    <div style={{ display:"flex", justifyContent:"center", marginTop:100 }}>

      <div style={{
        background:"white",
        padding:30,
        borderRadius:12,
        width:360,
        border:"1px solid #e2e8f0"
      }}>

        <h1 style={{ fontSize:22 }}>Sign Up</h1>
        <p style={{ color:"#94a3b8", fontSize:13 }}>
          Create your inventory account
        </p>

        {message && <p style={{ color:"green", fontSize:13 }}>{message}</p>}

        <div style={{ marginTop:20 }}>
          <label>Name</label>
          <input
            value={form.name}
            onChange={e => setForm({...form,name:e.target.value})}
            style={{ width:"100%", padding:8, marginTop:5 }}
          />
        </div>

        <div style={{ marginTop:15 }}>
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm({...form,email:e.target.value})}
            style={{ width:"100%", padding:8, marginTop:5 }}
          />
        </div>

        <div style={{ marginTop:15 }}>
          <label>Password</label>
          <input
            type="password"
            value={form.password}
            onChange={e => setForm({...form,password:e.target.value})}
            style={{ width:"100%", padding:8, marginTop:5 }}
          />
        </div>

        <button
          onClick={submit}
          style={{
            width:"100%",
            marginTop:20,
            padding:10,
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:8,
            cursor:"pointer"
          }}
        >
          Sign Up
        </button>

        <p style={{ marginTop:15, fontSize:13 }}>
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            style={{ color:"#2563eb", cursor:"pointer", marginLeft:5 }}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  )
}

export default Signup
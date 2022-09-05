import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { async } from "@firebase/util"
export function Login(){

    const [user, setUser] = useState(
        {
            email:'',
            password:''
        }
    )

    const { login } = useAuth()

    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = ({target:{name, value}}) => 
        setUser({...user, [name]:value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch(error){
             if(error.code === "auth/weak-password"){
                 setError('Contraseña invalido');
             }
            //setError(error.message);
        }
    }
    

    return(
    <div>
        <div>Login</div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="ejemplo@gmail.com" onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} placeholder="************"/>

        <button>Login</button>
    </form>
    </div>
    )
}
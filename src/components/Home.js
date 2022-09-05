
import { useAuth } from "../context/AuthContext"

export function Home(){
    const {user, logout, loading} = useAuth()

    const handleLogout = async () => {
        await logout()
    };

    if(loading) return <h1>Loading</h1>

    console.log(user)
    return(
        <div onClick={handleLogout} >
            <h1>Welcome  {user.email}</h1>
            <button>Logout</button>
        </div>
    );
};
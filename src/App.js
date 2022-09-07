import { Routes, Route } from 'react-router-dom'
import { Login } from './components/auth/Login.js';
import { Register } from './components/auth/Register.js';
import { Home } from './components/Home.js';
import { ProtectedRoute } from './components/ProtectedRoute.js';
import { AuthProvider } from './context/AuthContext.js';
function App() {
  return (
    <div className="bg-slate-300 h-screen text-white flex">
    <AuthProvider>
    
      <Routes>
        <Route path="/" element = {<ProtectedRoute>
          <Home/>
          </ProtectedRoute>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
      </Routes>
    </AuthProvider>
</div>
  )
}

export default App;

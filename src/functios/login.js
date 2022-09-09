import axios from "axios";
import Login from "../components/auth/Login"

//http://localhost:8080/cycling/api/user

let data = {};
const saveUser = async (state) => {
const request = await axios.get("http://localhost:8080/cycling/api/login", {
method: "POST",
headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
},
body: JSON.stringify(data),
});
state(request);

const respuesta = await request.text();
if (respuesta !== "FAIL") {
localStorage.token = respuesta;
localStorage.email = data.email;
} else {
alert("Las credenciales son incorrectas. Por favor intente nuevamente.");
}
};

export { saveUser };
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjYyNTY1NjEwLCJzdWIiOiJwZWRyb0BnbWFpbC5jb20iLCJpc3MiOiJNYWluIiwiZXhwIjoxNjYzMTcwNDEwfQ.1nhmmy6k0STxNJ8vyKwKIOlvO_P48-cJaKQBSNFb8Fc";

//const header = `Authorization: Bearer ${token}`;

const URI = "http://localhost:8080/cycling/api/cyclists";

const allCharacters = async (state) => {
  const cyclists = await axios.get(URI, {
    headers: { Authorization: `${token}` },
  });
  state(cyclists.data);
  console.log(cyclists.data);
  //    localStorage.token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjYyNTY1NjEwLCJzdWIiOiJwZWRyb0BnbWFpbC5jb20iLCJpc3MiOiJNYWluIiwiZXhwIjoxNjYzMTcwNDEwfQ.1nhmmy6k0STxNJ8vyKwKIOlvO_P48-cJaKQBSNFb8Fc';
};

export { allCharacters };

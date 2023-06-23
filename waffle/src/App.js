
// import './App.css';
// import { googleLogout, useGoogleLogin} from '@react-oauth/google';
// import axios from 'axios';
// import { useEffect, useRef, useState } from "react";
// import { Outlet, useNavigate, Link } from "react-router-dom";
// import NoteList from "./NoteList";
// import { v4 as uuidv4 } from "uuid";
// import { currentDate } from "./utils";



// function App() {
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState(null);
//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => console.log('Login Failed:', error)
// });
//   useEffect(
//     () => {
//         if (user) {
//             axios
//                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//                     headers: {
//                         Authorization: `Bearer ${user.access_token}`,
//                         Accept: 'application/json'
//                     }
//                 })
//                 .then((res) => {
//                     getNotes(res[0]);
//                     getNotes(res.data);
                    
//                     setProfile(res.data);
//                     console.log(res.data);
//                 })
//                 .catch((err) => console.log(err));
//         }
//     },
//     [ user ]
//   );
//   const [user, setUser] = useState(null);``
//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
//   };
  

//   return (
//     <div className="main">
//       <div className="Top">Top</div>
//       <div className="Middle">Middle
//         <div></div>
      
      
      
//       </div>
//       <div className="Bottom">Bottom</div>
      
      
      
//     </div>
//   );
// }

// export default App;

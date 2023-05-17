import { useAuth } from "../context/authContext";

function home() {
  
  const {user} = useAuth()
  // const authContext = useContext(Context)
  console.log(user);
  
  return (
    <div>esto deberia ser el home</div>
  )
}

export default home

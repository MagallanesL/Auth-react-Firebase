import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>
        Welcome <br />
        {user.email}
      </h1>

      <button onClick={handleLogout}>Out Perris</button>
    </div>
  );
}

export default home;

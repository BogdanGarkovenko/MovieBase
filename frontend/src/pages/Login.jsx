import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Bogdan");
    navigate("/profile");
  };

  return (
    <>
      <h2>Logowanie użytkownika</h2>
      <button onClick={handleLogin}>Zaloguj testowo</button>
    </>
  );
}

export default Login;
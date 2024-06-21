import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);

  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('token', user?.accessToken)
      setUser(user);  // User ma'lumotlarini kontekstda saqlash
      navigate('/'); // Home sahifasiga yo'naltirish
    } catch (error) {
      const errorMessage = error.message;
      alert("Login failed: " + errorMessage);
    }
  };

  return { signUpWithGoogle };
}

export { useLogin };

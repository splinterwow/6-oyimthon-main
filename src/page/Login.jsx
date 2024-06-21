import { useLogin } from "../hooks/useLogin";

function Login() {
  const { signUpWithGoogle } = useLogin();

  return (
    <div className="min-h-screen grid place-items-center">
      <button className="btn btn-secondary" onClick={signUpWithGoogle}>
        Google
      </button>
    </div>
  );
}

export default Login;

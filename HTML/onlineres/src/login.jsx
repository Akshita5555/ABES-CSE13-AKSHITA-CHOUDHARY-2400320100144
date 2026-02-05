import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    ).then(() => alert("Logged in"));
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" />
      <button>Login</button>
    </form>
  );
}

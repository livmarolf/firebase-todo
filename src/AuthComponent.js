import { auth } from "./config/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AuthComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Email/Password Authentication</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthPage() {
  async function signInWithGoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      cookies.set("auth-token", res.user.uid);
    } catch (err) {
      console.error(err);
    }
  }
  async function SignUpWithEmailAndPassword(){
    
  }
  return (
    <div className="w-96 h-96 bg-white center-with-position">
      <button onClick={signInWithGoogle}>sign in with google</button>
      <input />
    </div>
  );
}

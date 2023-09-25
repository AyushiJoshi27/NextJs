import { useRef, useState } from 'react';
import "./App.css";
import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function App() {
  const [value, setValue] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();
  console.log(session);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("response.access_token: ", response.access_token);
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', 
        {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          },
        }
        )
        console.log("res: ", res);
      } catch(er) {
        console.log(er);
      }
    }
  })

  if (isLoading) {
    return <div>Loading</div>;
  }

  const googleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to google provider with supabase");
      console.log(error);
    }
  };

  const googleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const loginHandlerSuc = (res) => {
    const credentialResponseDecoded = jwt_decode(res.credential)
    setValue(credentialResponseDecoded);
    setAccessToken(res.access_token);
    console.log(credentialResponseDecoded);
  }

  const loginHandlerEr = (error) => {
    console.log('Login failed', error)
  }

  return (
    <div className="App">
      <div>
          <GoogleLogin
            onSuccess={loginHandlerSuc}
            onError={loginHandlerEr}
            />
          <button onClick={() => login()}>Login</button>
          <button onClick={() => googleSignOut()}>logout</button>
          <h2>Hey there... {session?.user?.email} </h2>
      </div>
    </div>
  );
}

export default App;

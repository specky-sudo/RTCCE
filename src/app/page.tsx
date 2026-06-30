"use  client";
import { signIn,signOut,useSession } from "next-auth/react";
export default function Home() {
  const {data:session} = useSession();
  if(session){
    return(
      <>
        <h1>Welcome {session.user?.name}</h1>
        <button onClick={()=>signOut()}>Sign Out</button>
      </>
    )
  }
  return(
    <button onClick={() => signIn("github")}>Sign In with GitHub</button>
  )
}
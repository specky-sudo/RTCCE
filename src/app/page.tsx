"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen items-center justify-center">
      {session ? (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">
            Welcome {session.user?.name}
          </h1>

          <button
            onClick={() => signOut()}
            className="rounded bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("github")}
          className="rounded bg-black px-5 py-2 text-white hover:bg-gray-800"
        >
          Sign In with GitHub
        </button>
      )}
    </main>
  );
}
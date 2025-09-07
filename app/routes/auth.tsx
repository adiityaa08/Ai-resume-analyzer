import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => ([
  { title: "Resumind | Auth" },
  { name: "description", content: "Log into your account" },
]);

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next || "/dashboard"); // redirect logged-in users
    }
  }, [auth.isAuthenticated, next]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 bg-[url('/images/bg-auth.svg')] bg-cover">
      <div className="rounded-3xl shadow-2xl p-10 bg-white/90 backdrop-blur-lg w-[90%] max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome</h2>
          <p className="mt-2 text-gray-600 text-sm font-medium">
            Log in to continue your job journey
          </p>
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          {isLoading ? (
            <button
              disabled
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md animate-pulse"
            >
              Signing you in...
            </button>
          ) : (
            <button
              onClick={auth.signIn}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transform transition"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Auth;

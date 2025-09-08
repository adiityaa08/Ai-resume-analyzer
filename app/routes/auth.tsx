import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => [
  { title: "Resumind | Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next || "/dashboard"); // redirect logged-in users
    }
  }, [auth.isAuthenticated, next, navigate]);

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 bg-[url('/images/bg-auth.svg')] bg-cover px-4">
      <div className="rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 bg-white/90 backdrop-blur-lg w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Welcome
          </h2>
          <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base font-medium">
            Log in to continue your job journey
          </p>
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          {isLoading ? (
            <button
              disabled
              className="w-full px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md animate-pulse text-sm sm:text-base"
            >
              Signing you in...
            </button>
          ) : (
            <button
              onClick={auth.signIn}
              className="w-full px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transform transition text-sm sm:text-base"
            >
              Log In / Sign Up
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Auth;

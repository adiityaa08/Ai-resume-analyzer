import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";

const AuthButton = () => {
  const { isLoading, auth } = usePuterStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/"); // redirect to landing after logout
  };

  if (isLoading) {
    return (
      <button className="primary-button px-4 py-2 text-sm" disabled>
        Loading...
      </button>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <button onClick={handleLogout} className="primary-button px-4 py-2 text-sm">
        Log Out
      </button>
    );
  }

  return (
    <button onClick={auth.signIn} className="primary-button px-4 py-2 text-sm">
      Log In
    </button>
  );
};

export default AuthButton;

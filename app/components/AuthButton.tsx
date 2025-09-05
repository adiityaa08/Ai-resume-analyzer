import { usePuterStore } from "~/lib/puter";

const AuthButton = () => {
  const { isLoading, auth } = usePuterStore();

  if (isLoading) {
    return (
      <button
        onClick={auth.signOut}
        className="primary-button px-4 py-2 text-sm"
      >
        Log Out
      </button>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <button
        onClick={auth.signOut}
        className="primary-button px-4 py-2 text-sm"
      >
        Log Out
      </button>
    );
  }

  return (
    <button
      onClick={auth.signIn}
      className="primary-button px-4 py-2 text-sm"
    >
      Log In
    </button>
  );
};

export default AuthButton;

import { usePuterStore } from "~/lib/puter"
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";


export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
    <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-5 bg-white rounded-2xl p-10">
            <div className="flex flex-col items-center gap-2 text-center ">
                <h2 className="font-bold">Welcome</h2>
                <h3 className="font-semibold">Log In to Continue Your Job Journey</h3>
            </div>
            <div>
                {isLoading ? (
                    <button className="auth-button animate-pulse w-80">
                        <p className="text-xl">Signing you in...</p>
                    </button>
                ) : (
                    <>
                        {auth.isAuthenticated ? (
                            <button className="flex flex-col items-center auth-button w-65" onClick={auth.signOut}>
                                <p className="text-xl">Log Out</p>
                            </button>
                        ) : (
                            <button className="flex flex-col items-center auth-button w-65" onClick={auth.signIn}>
                                <p className="text-xl">Log In</p>
                            </button>
                        )}
                    </>
                )}
            </div>
        </section>
    </div>
    </main>

  )
}

export default auth
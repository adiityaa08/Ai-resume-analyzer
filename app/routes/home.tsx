import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback For Your Dream Job" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  const loadResumes = async () => {
    setLoadingResumes(true);
    const resumes = (await kv.list("resume:*", true)) as KVItem[];
    const parsedResumes = resumes?.map(
      (resume) => JSON.parse(resume.value) as Resume
    );
    setResumes(parsedResumes || []);
    setLoadingResumes(false);
  };

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated, navigate]);

  useEffect(() => {
    loadResumes(); // initial load

    // Refresh when wipe data event is triggered
    const refresh = () => loadResumes();
    window.addEventListener("data-wiped", refresh);

    return () => {
      window.removeEventListener("data-wiped", refresh);
    };
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="px-4 sm:px-8 lg:px-16">
        <div className="text-center py-12 sm:py-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Track Your Applications & Resume Ratings
          </h1>
          {!loadingResumes && resumes?.length === 0 ? (
            <h2 className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">
              No resumes found. Upload your first resume to get feedback.
            </h2>
          ) : (
            <h2 className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">
              Review your submissions and check AI-powered feedback.
            </h2>
          )}
        </div>

        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/resume-scan-2.gif"
              className="w-[150px] sm:w-[200px]"
            />
          </div>
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link
              to="/upload"
              className="primary-button w-fit text-base sm:text-lg lg:text-xl font-semibold px-6 py-3"
            >
              Upload Resume
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WipeData = () => {
    const { auth, isLoading, error, fs, kv } = usePuterStore();
    const navigate = useNavigate();
    const [files, setFiles] = useState<FSItem[]>([]);

    const loadFiles = async () => {
        const files = (await fs.readDir("./")) as FSItem[];
        setFiles(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate("/auth?next=/wipe");
        }
    }, [isLoading, auth.isAuthenticated, navigate]);

    const handleDelete = async () => {
        if (files.length === 0) {
            toast.info("No data to wipe.");
            return;
        }

        for (const file of files) {
            await fs.delete(file.path);
        }
        await kv.flush();
        await loadFiles();
        toast.success("Data wiped successfully!");

        // Notify other components (like homepage) to refresh
        window.dispatchEvent(new Event("data-wiped"));
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <button onClick={handleDelete} className="primary-button w-fit">
            Wipe Data
        </button>
    );
};

export default WipeData;

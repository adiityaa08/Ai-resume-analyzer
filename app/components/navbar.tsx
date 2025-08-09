import {Link} from "react-router";
import WipeData from "./wipedata";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className="flex gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
                <WipeData />
            </div>
        </nav>
    )
}
export default Navbar
import { Link, useLocation } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
            <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
                <Link to="/" className="text-xl font-bold text-white">DevOrbitMU</Link>
                <div className="flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-sm font-medium transition ${location.pathname === item.path
                                ? "text-blue-500"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
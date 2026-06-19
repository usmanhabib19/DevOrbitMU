import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const Home = () => {
    const ref = useScrollReveal();

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <div ref={ref}>
                <p className="text-blue-500 mb-2">Hi, I'm</p>
                <h1 className="text-5xl font-bold text-white mb-4">Muhammad Usman</h1>
                <h2 className="text-2xl text-gray-400 mb-6">Full Stack Developer</h2>
                <p className="max-w-xl text-gray-400 mb-8">
                    Main React, Node.js, Firebase aur Supabase ke sath modern web apps banata hoon.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                        View Projects
                    </Link>
                    <Link to="/contact" className="border border-gray-600 text-white px-6 py-3 rounded-lg">
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
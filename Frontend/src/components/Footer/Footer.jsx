import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Mail } from "lucide-react";

const Footer = () => (
    <footer className="border-t border-gray-800 py-6 mt-12">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} DevOrbitMU. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="https://github.com/usmanhabib19" target="_blank" rel="noreferrer"><GithubFilled size={18} /></a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><LinkedinFilled size={18} /></a>
                <a href="mailto:you@email.com"><Mail size={18} /></a>
            </div>
        </div>
    </footer>
);

export default Footer;
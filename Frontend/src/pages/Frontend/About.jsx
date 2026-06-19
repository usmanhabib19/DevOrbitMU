import { useScrollReveal } from "../../hooks/useScrollReveal";

const skills = ["React", "Node.js", "Firebase", "Supabase", "Tailwind", "JavaScript"];

const About = () => {
    const ref = useScrollReveal();

    return (
        <section className="max-w-3xl mx-auto px-6 py-24">
            <div ref={ref}>
                <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                <p className="text-gray-400 mb-10 leading-relaxed">
                    Apne baare mein 2-3 paragraph likhein — kya seekha, kis tarah ke projects banaye,
                    aur kya passion hai web development mein.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ProjectCard = ({ project }) => {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="rounded-lg overflow-hidden bg-gray-800 shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 text-sm mt-2 inline-block">
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const snapshot = await getDocs(collection(db, "projects"));
            setProjects(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-white mb-10">My Projects</h2>
            {loading ? (
                <p className="text-gray-400">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
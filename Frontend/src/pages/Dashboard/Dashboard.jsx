import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/Auth";
import ProjectForm from "./components/ProjectForm";
import ProjectsList from "./components/ProjectsList";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [modalOpen, setModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const openAddModal = () => {
        setEditingProject(null);
        setModalOpen(true);
    };

    const openEditModal = (project) => {
        setEditingProject(project);
        setModalOpen(true);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
                <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">
                    Logout
                </button>
            </div>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Projects</h2>
                <Button type="primary" icon={<PlusOutlined />} onClick={openAddModal}>
                    Add Project
                </Button>
            </div>

            <ProjectsList onEdit={openEditModal} refreshTrigger={refreshTrigger} />

            <ProjectForm
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSuccess={() => setRefreshTrigger((p) => p + 1)}
                editingProject={editingProject}
            />
        </div>
    );
};

export default Dashboard;
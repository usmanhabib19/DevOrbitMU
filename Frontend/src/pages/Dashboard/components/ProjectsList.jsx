import { useEffect, useState } from "react";
import { Table, Button, Image, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { db } from "../../../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ProjectsList = ({ onEdit, refreshTrigger }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        setLoading(true);
        const snapshot = await getDocs(collection(db, "projects"));
        setProjects(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
        setLoading(false);
    };

    useEffect(() => {
        fetchProjects();
    }, [refreshTrigger]);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "projects", id));
        message.success("Project delete ho gaya");
        fetchProjects();
    };

    const columns = [
        {
            title: "Image",
            dataIndex: "imageUrl",
            render: (url) => <Image src={url} width={60} height={40} style={{ objectFit: "cover" }} />,
        },
        { title: "Title", dataIndex: "title" },
        { title: "Description", dataIndex: "description", ellipsis: true },
        {
            title: "Actions",
            render: (_, record) => (
                <div className="flex gap-2">
                    <Button icon={<EditOutlined />} onClick={() => onEdit(record)} />
                    <Popconfirm title="Pakka delete karna hai?" onConfirm={() => handleDelete(record.id)}>
                        <Button icon={<DeleteOutlined />} danger />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={projects}
            loading={loading}
            pagination={false}
        />
    );
};

export default ProjectsList;
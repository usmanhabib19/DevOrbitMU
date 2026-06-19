import { useState, useEffect } from "react";
import { Modal, Form, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { supabase } from "../../../config/supabase";
import { db } from "../../../config/firebase";
import { addDoc, updateDoc, doc, collection } from "firebase/firestore";

const ProjectForm = ({ open, onClose, onSuccess, editingProject }) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (editingProject) {
            form.setFieldsValue(editingProject);
        } else {
            form.resetFields();
            setFileList([]);
        }
    }, [editingProject, open]);

    const uploadImage = async (file) => {
        const fileName = `${Date.now()}_${file.name}`;
        const { error } = await supabase.storage
            .from("project-images")
            .upload(fileName, file);

        if (error) throw error;

        const { data } = supabase.storage
            .from("project-images")
            .getPublicUrl(fileName);

        return data.publicUrl;
    };

    const handleSubmit = async (values) => {
        setUploading(true);
        try {
            let imageUrl = editingProject?.imageUrl || "";

            // Naya image select hua hai to upload karein
            if (fileList.length > 0 && fileList[0].originFileObj) {
                imageUrl = await uploadImage(fileList[0].originFileObj);
            }

            const projectData = { ...values, imageUrl };

            if (editingProject) {
                await updateDoc(doc(db, "projects", editingProject.id), projectData);
                message.success("Project update ho gaya");
            } else {
                await addDoc(collection(db, "projects"), projectData);
                message.success("Project add ho gaya");
            }

            form.resetFields();
            setFileList([]);
            onSuccess();
            onClose();
        } catch (err) {
            message.error("Kuch ghalat hua: " + err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <Modal
            title={editingProject ? "Edit Project" : "New Project"}
            open={open}
            onCancel={onClose}
            footer={null}
            destroyOnClose
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                    <Input placeholder="Project ka naam" />
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                    <Input.TextArea rows={3} placeholder="Short description" />
                </Form.Item>

                <Form.Item name="link" label="Live Link / GitHub">
                    <Input placeholder="https://..." />
                </Form.Item>

                <Form.Item label="Project Image">
                    <Upload
                        listType="picture"
                        fileList={fileList}
                        beforeUpload={() => false}
                        onChange={({ fileList }) => setFileList(fileList.slice(-1))}
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined />}>Select Image</Button>
                    </Upload>
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={uploading} block>
                    {editingProject ? "Update Project" : "Add Project"}
                </Button>
            </Form>
        </Modal>
    );
};

export default ProjectForm;
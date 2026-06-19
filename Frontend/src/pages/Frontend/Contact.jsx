import { useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form,
                "YOUR_PUBLIC_KEY"
            );
            message.success("Message bhej diya gaya!");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            message.error("Message bhejne mein masla hua");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="max-w-xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text" placeholder="Your Name" required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-gray-800 text-white p-3 rounded-lg"
                />
                <input
                    type="email" placeholder="Your Email" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-gray-800 text-white p-3 rounded-lg"
                />
                <textarea
                    placeholder="Your Message" rows={5} required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-gray-800 text-white p-3 rounded-lg"
                />
                <button type="submit" disabled={sending} className="bg-blue-600 text-white p-3 rounded-lg">
                    {sending ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
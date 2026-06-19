import { ConfigProvider } from "antd";
import { AuthProvider } from "./Auth";

const AppProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#2563eb", // apni brand color yahan set kar sakte hain
                    borderRadius: 8,
                },
            }}
        >
            <AuthProvider>{children}</AuthProvider>
        </ConfigProvider>
    );
};

export default AppProvider;
import "./config/global";
import { ConfigProvider } from "antd";
import { useAuth } from "./context/Auth";

import Routes from "./pages/Routes"
import ScreenLoader from "./components/ScreenLoader";

const App = () => {

    const { loading } = useAuth()

    return (
        <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutline: 0, primaryShadow: "none" } } }}>

            {loading
                ? <ScreenLoader />
                : <Routes />
            }

        </ConfigProvider>
    )
}

export default App
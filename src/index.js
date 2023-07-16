import { AuthProvider } from "contexts/auth";
import ReactDOM from "react-dom/client";
import AppRoutes from "routes";
import "./styles/reset.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <AppRoutes />
    </AuthProvider>
);

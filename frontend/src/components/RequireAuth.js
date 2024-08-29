import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/authStore";

export default function RequireAuth({ children }) {
    const store = authStore();

    useEffect(() => {
        if (store.loggedIn === null) {
            store.checkAuth();
        }
    }, []);

    if (store.loggedIn === null) {
        return <div>Loading...</div>;
    }

    if (!store.loggedIn) {
        return <Navigate to="/login" />;
    }

    return <div>{children}</div>;
}

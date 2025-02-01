import { useRouteError, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ErrorBoundary() {
    const error = useRouteError();
    const navigate = useNavigate();
    
    // Automatically redirect if it's a 302 redirect
    useEffect(() => {
        if (error.status === 302) {
            navigate(error.headers.get("Location"), { replace: true });
        }
    }, [error, navigate]);

    return <h1>Something went wrong</h1>; // Fallback UI (not shown during redirects)
}

export default ErrorBoundary;

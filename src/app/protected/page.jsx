"use client";

import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAuth } from "../context/AuthContext";
import AuthRedirect from "../login/AuthRedirect";

const Protected = () => {
    const { user, loading } = useAuth();
    if (loading) {
        return (<Box 
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                p: 3,
            }}
        >
            <CircularProgress />
                </Box>);
    }

        if (!user) {
            return <AuthRedirect />;
    }
    return <Typography variant="h1">Protected</Typography>;
}

export default Protected;
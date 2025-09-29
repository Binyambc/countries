"use client";

import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAuth } from "../context/AuthContext";
import AuthRedirect from "../login/AuthRedirect";
import Image from "next/image";

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
    return (
    <Box>
        <Typography variant="h1">Protected - User Data</Typography>
        <Typography variant="body1">{user.email}</Typography>
        <Typography variant="body1">{user.user_metadata.name}</Typography>
        <Image src={user.user_metadata.avatar_url} alt="User Avatar" width={100} height={100} />
    </Box>)
}

export default Protected;
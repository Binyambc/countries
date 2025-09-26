"use client";

import { useRouter } from "next/navigation";

const { useAuth } = require("@/app/context/AuthContext");
const { AppBar, Toolbar, Button } = require("@mui/material");

const Navigation = ({ children }) => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <>
      <AppBar position="static" color="gradient" sx={{ mb: 3 }}>
        <Toolbar>
          <Button color="inherit" onClick={() => router.push("/countries")}>
            Countries
          </Button>
          <Button color="inherit" onClick={() => router.push("/example")}>
            Example
          </Button>
          <Button color="inherit" onClick={() => router.push("/protected")}>
            Protected
          </Button>
          {user && (
            <Button color="inherit" onClick={() => signOut()}>
              Logout
            </Button>
          )}
          {!user && (
            <Button color="inherit" onClick={() => router.push("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Navigation;
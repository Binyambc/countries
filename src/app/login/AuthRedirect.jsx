"use client";
 
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
 
export const AuthRedirect = () => {
  const { user } = useAuth();
  const router = useRouter();
 
  useEffect(() => {
    if (user) {
      router.push("/protected"); // redirect logged-in users
    }
  }, [user, router]);
 
  return null; // no UI, just redirect
};
 
export default AuthRedirect;
 
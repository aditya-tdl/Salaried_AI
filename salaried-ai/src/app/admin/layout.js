"use client";
import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Sidebar from "@/components/admin/Sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const { isAuthenticated, user, role } = useSelector((state) => state.auth);

    useEffect(() => {
        // In a real app, you'd also check for role === 'admin'
        if (!isAuthenticated) {
            router.push("/admin-center-auth");
        }
    }, [isAuthenticated, router]);

    // Show loading state while checking auth
    if (!isAuthenticated) {
        return (
            <Box sx={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#F4F7FE" }}>
                <CircularProgress sx={{ color: "#4318FF" }} />
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F4F7FE" }}>
            {/* Sidebar - Left Aligned */}
            <Sidebar />

            {/* Main Content Area - Right Side */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    overflow: "auto",
                }}
            >
                {/* Navbar at the top */}
                <AdminNavbar />

                {/* Dynamic Content below navbar */}
                <Box
                    sx={{
                        p: 3,
                        flexGrow: 1,
                        backgroundColor: "#F4F7FE",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}


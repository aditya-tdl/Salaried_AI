"use client";
import React from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
} from "@mui/material";
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    Settings as SettingsIcon,
    Event as EventIcon,
    Newspaper as NewspaperIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/components/ReduxToolkit/Slices/AuthSlice";
import { openSnackbar } from "@/components/ReduxToolkit/Slices/snackbarSlice";

const DRAWER_WIDTH = 280;

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
    { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
    // { text: "Webinars", icon: <EventIcon />, path: "/admin/webinars" },
    // { text: "Newsletter", icon: <NewspaperIcon />, path: "/admin/newsletter" },
    // { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
];

const Sidebar = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(openSnackbar({ message: "Logged out successfully!", severity: "success" }));
        router.push("/admin-center-auth");
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                    backgroundColor: "#FFFFFF",
                    borderRight: "1px solid #F1F1F1",
                    boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.02)",
                },
            }}
        >
            <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "8px",
                            backgroundColor: "#4318FF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem"
                        }}
                    >
                        S
                    </Box>
                    <Typography variant="h5" fontWeight="800" sx={{ letterSpacing: "-0.5px", color: "#1B2559" }}>
                        Salaried AI
                    </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "#A3AED0", fontWeight: "600", ml: 0.5 }}>
                    ADMIN MANAGEMENT
                </Typography>
            </Box>

            <List sx={{ px: 2, mt: 2 }}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                            <Link href={item.path} style={{ textDecoration: "none", width: "100%", color: "inherit" }}>
                                <ListItemButton
                                    selected={isActive}
                                    sx={{
                                        borderRadius: "12px",
                                        py: 1.5,
                                        px: 2,
                                        "&.Mui-selected": {
                                            backgroundColor: "#4318FF",
                                            color: "white",
                                            "& .MuiListItemIcon-root": {
                                                color: "white",
                                            },
                                            "&:hover": {
                                                backgroundColor: "#3311CC",
                                            },
                                        },
                                        "&:hover": {
                                            backgroundColor: "#F4F7FE",
                                        },
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 35,
                                            color: isActive ? "white" : "#A3AED0",
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        {React.cloneElement(item.icon, { sx: { fontSize: "1.4rem" } })}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{
                                            fontWeight: isActive ? 700 : 500,
                                            fontSize: "0.95rem",
                                            color: isActive ? "white" : "#A3AED0",
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>

            <Box sx={{ mt: "auto", p: 3 }}>
                <ListItemButton
                    onClick={handleLogout}
                    sx={{
                        borderRadius: "12px",
                        color: "#EE5D50",
                        "&:hover": {
                            backgroundColor: "#FFF5F5",
                        },
                    }}
                >
                    <ListItemIcon sx={{ minWidth: 35, color: "inherit" }}>
                        <LogoutIcon sx={{ fontSize: "1.4rem" }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" primaryTypographyProps={{ fontWeight: 700, fontSize: "0.95rem" }} />
                </ListItemButton>
            </Box>
        </Drawer>
    );
};

export default Sidebar;

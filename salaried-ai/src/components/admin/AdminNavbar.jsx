"use client";
import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Avatar,
    Badge,
    Breadcrumbs,
    Link as MuiLink,
} from "@mui/material";
import {
    Notifications as NotificationsIcon,
    Search as SearchIcon,
    NavigateNext as NavigateNextIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNavbar = () => {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                borderBottom: "1px solid #F1F1F1",
                color: "#1B2559",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
                <Box>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" sx={{ color: "#A3AED0" }} />}
                        aria-label="breadcrumb"
                    >
                        <Link href="/admin" passHref style={{ textDecoration: "none" }}>
                            <Typography
                                sx={{
                                    fontSize: "0.85rem",
                                    fontWeight: "600",
                                    color: "#A3AED0",
                                    "&:hover": { color: "#4318FF" },
                                    cursor: "pointer",
                                }}
                            >
                                Admin
                            </Typography>
                        </Link>
                        {pathnames.map((value, index) => {
                            const last = index === pathnames.length - 1;
                            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                            // Skip the initial "admin" part as it's already a root breadcrumb
                            if (value.toLowerCase() === "admin") return null;

                            return last ? (
                                <Typography
                                    key={to}
                                    sx={{
                                        fontSize: "0.85rem",
                                        fontWeight: "700",
                                        color: "#1B2559",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {value}
                                </Typography>
                            ) : (
                                <Link key={to} href={to} passHref style={{ textDecoration: "none" }}>
                                    <Typography
                                        sx={{
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            color: "#A3AED0",
                                            "&:hover": { color: "#4318FF" },
                                            textTransform: "capitalize",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {value}
                                    </Typography>
                                </Link>
                            );
                        })}
                    </Breadcrumbs>

                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton sx={{ color: "#A3AED0", backgroundColor: "#F4F7FE", borderRadius: "10px", mr: 1 }}>
                        <SearchIcon fontSize="small" />
                    </IconButton>

                    <IconButton sx={{ color: "#A3AED0", backgroundColor: "#F4F7FE", borderRadius: "10px", mr: 1 }}>
                        <Badge badgeContent={4} color="error" sx={{ "& .MuiBadge-badge": { fontSize: "0.6rem" } }}>
                            <NotificationsIcon fontSize="small" />
                        </Badge>
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 1, backgroundColor: "#F4F7FE", p: "6px 16px", borderRadius: "30px" }}>
                        <Box sx={{ textAlign: "right", display: { xs: "none", sm: "block" } }}>
                            <Typography variant="body2" fontWeight="700" sx={{ color: "#1B2559", lineHeight: 1.2 }}>
                                Admin User
                            </Typography>
                            <Typography variant="caption" sx={{ color: "#A3AED0", fontWeight: "600" }}>
                                Super Admin
                            </Typography>
                        </Box>
                        <Avatar
                            sx={{
                                width: 34,
                                height: 34,
                                backgroundColor: "#4318FF",
                                fontSize: "0.85rem",
                                fontWeight: "bold",
                            }}
                        >
                            AD
                        </Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AdminNavbar;

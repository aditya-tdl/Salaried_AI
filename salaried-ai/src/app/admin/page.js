"use client";
import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import {
    TrendingUp,
    People,
    BookmarkBorder,
    AttachMoney,
} from "@mui/icons-material";

const StatCard = ({ title, value, icon, color }) => (
    <Paper
        sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
            border: "1px solid #F1F1F1",
            transition: "transform 0.2s ease",
            "&:hover": {
                transform: "translateY(-5px)",
            }
        }}
    >
        <Box
            sx={{
                p: 2,
                borderRadius: "50%",
                backgroundColor: "#F4F7FE",
                color: color,
                display: "flex",
                fontSize: "1.8rem"
            }}
        >
            {React.cloneElement(icon, { sx: { fontSize: "inherit" } })}
        </Box>
        <Box>
            <Typography variant="body2" sx={{ color: "#A3AED0", fontWeight: "600", mb: 0.5 }}>
                {title}
            </Typography>
            <Typography variant="h4" fontWeight="800" sx={{ color: "#1B2559" }}>
                {value}
            </Typography>
        </Box>
    </Paper>
);

export default function AdminDashboard() {
    return (
        <Box sx={{ py: 2 }}>
            <Typography variant="h3" fontWeight="800" sx={{ mb: 4, color: "#1B2559", letterSpacing: "-1px" }}>
                Main Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Total Users"
                        value="1,234"
                        icon={<People />}
                        color="#4318FF"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Total Revenue"
                        value="$45,285"
                        icon={<AttachMoney />}
                        color="#05CD99"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Active Webinars"
                        value="12"
                        icon={<BookmarkBorder />}
                        color="#FFB547"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Conversion Rate"
                        value="15.5%"
                        icon={<TrendingUp />}
                        color="#EE5D50"
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper
                        sx={{
                            p: 4,
                            minHeight: "450px",
                            borderRadius: "20px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
                            border: "1px solid #F1F1F1",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >
                        <Typography variant="h6" fontWeight="700" sx={{ color: "#1B2559" }}>
                            User Activity Trends
                        </Typography>
                        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F4F7FE", borderRadius: "16px", border: "1px dashed #A3AED0" }}>
                            <Typography variant="body1" color="text.secondary" fontWeight="500">
                                Interactive Chart Visualization Placeholder
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper
                        sx={{
                            p: 4,
                            minHeight: "450px",
                            borderRadius: "20px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
                            border: "1px solid #F1F1F1",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >
                        <Typography variant="h6" fontWeight="700" sx={{ color: "#1B2559" }}>
                            Recent Activity
                        </Typography>
                        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F4F7FE", borderRadius: "16px", border: "1px dashed #A3AED0" }}>
                            <Typography variant="body1" color="text.secondary" fontWeight="500">
                                Activities Feed Placeholder
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

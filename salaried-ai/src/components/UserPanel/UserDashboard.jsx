'use client'
import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    Grid,
    Paper,
    CircularProgress,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "@/components/baseUrl/BaseUrl";
import { useSelector } from "react-redux";

const UserDashboard = ({ user }) => {
    const [subscription, setSubscription] = useState(null);
    const [webinars, setWebinars] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                const subRes = await axios.get(`${baseUrl}/users/my-subscription`, config);
                setSubscription(subRes.data.data);

                const webRes = await axios.get(`${baseUrl}/users/my-webinars`, config);
                setWebinars(webRes.data.data || []);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                <CircularProgress />
            </Box>
        );
    }
    console.log(webinars);
    return (
        <Box sx={{ py: 2 }}>
            <Typography
                variant="h3"
                fontWeight="800"
                sx={{ mb: 1, color: "#1B2559", letterSpacing: "-1px" }}
            >
                Welcome back, {user?.name || "User"}!
            </Typography>
            <Typography variant="body1" sx={{ color: "#A3AED0", mb: 4 }}>
                Here is an overview of your account.
            </Typography>

            <Grid container spacing={3}>
                {/* Subscription Card */}
                <Grid item xs={12} md={4}>
                    <Paper
                        sx={{
                            p: 4,
                            borderRadius: "20px",
                            border: "1px solid #F1F1F1",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.03)",
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="700"
                            sx={{ mb: 2, color: "#1B2559" }}
                        >
                            My Plan
                        </Typography>
                        {subscription ? (
                            <Box>
                                <Typography variant="h5" sx={{ color: "#4318FF", fontWeight: "bold", mb: 1 }}>
                                    {subscription.status}
                                </Typography>
                                <Typography color="text.secondary">
                                    Started: {new Date(subscription.created_at).toLocaleDateString()}
                                </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ textAlign: 'center', py: 2 }}>
                                <Typography color="text.secondary">No active subscription.</Typography>
                            </Box>
                        )}
                    </Paper>
                </Grid>

                {/* Webinars Activity */}
                <Grid item xs={12} md={8}>
                    <Paper
                        sx={{
                            p: 4,
                            borderRadius: "20px",
                            border: "1px solid #F1F1F1",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.03)",
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="700"
                            sx={{ mb: 2, color: "#1B2559" }}
                        >
                            Webinars Activity
                        </Typography>

                        {webinars.length > 0 ? (
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Webinar</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {webinars.slice(0, 5).map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{item.webinar?.title}</TableCell>
                                                <TableCell>{new Date(item.webinar?.webinar_date).toLocaleDateString()}</TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={item.status}
                                                        size="small"
                                                        color={item.status === 'REGISTERED' ? 'success' : 'error'}
                                                        variant="outlined"
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <Typography color="text.secondary">No webinars joined yet.</Typography>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserDashboard
"use client";
import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    Button,
    Chip,
    CircularProgress,
    Stack,
} from "@mui/material";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import {
    CalendarMonth,
    AccessTime,
    Person,
    Videocam,
} from "@mui/icons-material";
import axios from "axios";
import { baseUrl } from "@/components/baseUrl/BaseUrl";
import { useSelector, useDispatch } from "react-redux";
import { openSnackbar } from "@/components/ReduxToolkit/Slices/snackbarSlice";

const AvailableWebinars = () => {
    const [webinars, setWebinars] = useState([]);
    const [myWebinars, setMyWebinars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [joiningId, setJoiningId] = useState(null);

    // Modal State
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState(null); // 'JOIN' or 'CANCEL'
    const [selectedWebinar, setSelectedWebinar] = useState(null);

    const { token, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                // Fetch all webinars
                const webRes = await axios.get(`${baseUrl}/webinars`, config);
                // Fetch my joined webinars to check status
                const myWebRes = await axios.get(`${baseUrl}/users/my-webinars`, config);

                setWebinars(webRes.data.data || []);
                setMyWebinars(myWebRes.data.data || []);
            } catch (error) {
                console.error("Error fetching webinars:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    const onJoinClick = (webinar) => {
        setSelectedWebinar(webinar);
        setModalType('JOIN');
        setOpenModal(true);
    };

    const onCancelClick = (webinar) => {
        setSelectedWebinar(webinar);
        setModalType('CANCEL');
        setOpenModal(true);
    };

    const handleConfirmAction = async () => {
        if (!selectedWebinar) return;

        const webinarId = selectedWebinar.id;
        setJoiningId(webinarId);
        setOpenModal(false); // Close modal immediately

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            let response;
            if (modalType === 'JOIN') {
                response = await axios.post(
                    `${baseUrl}/users/join-webinar`,
                    { userId: user.id, webinarId },
                    config
                );
            } else {
                response = await axios.post(
                    `${baseUrl}/users/cancel-webinar`,
                    { userId: user.id, webinarId },
                    config
                );
            }

            dispatch(
                openSnackbar({
                    message: response.data.message || (modalType === 'JOIN' ? "Successfully joined!" : "Registration cancelled!"),
                    severity: "success",
                })
            );

            // Refresh list
            const myWebRes = await axios.get(`${baseUrl}/users/my-webinars`, config);
            setMyWebinars(myWebRes.data.data || []);

        } catch (error) {
            console.error(`Error ${modalType} webinar:`, error);
            dispatch(
                openSnackbar({
                    message: error.response?.data?.message || `Failed to ${modalType === 'JOIN' ? 'join' : 'cancel'} webinar`,
                    severity: "error",
                })
            );
        } finally {
            setJoiningId(null);
            setSelectedWebinar(null); // Clear selected webinar after action
            setModalType(null); // Clear modal type
        }
    };

    const getWebinarStatus = (webinarId) => {
        const registration = myWebinars.find((mw) => mw.webinar_id == webinarId);
        return registration ? registration.status : null;
    };

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            {/* Modal */}
            <DeleteModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                deleteFunc={handleConfirmAction}
                dialog={{
                    title: modalType === 'JOIN'
                        ? `Are you sure you want to join "${selectedWebinar?.title}"?`
                        : `Are you sure you want to cancel your registration for "${selectedWebinar?.title}"?`,
                    buttonText: modalType === 'JOIN' ? "Join" : "Cancel Registration"
                }}
            />

            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h4"
                    fontWeight="800"
                    sx={{ color: "#1B2559", mb: 1 }}
                >
                    Available Webinars
                </Typography>
                <Typography variant="body1" sx={{ color: "#A3AED0" }}>
                    Explore and join upcoming webinars to enhance your knowledge.
                </Typography>
            </Box>

            {webinars.length === 0 ? (
                <Box sx={{ textAlign: "center", mt: 5 }}>
                    <Typography variant="h6" color="text.secondary">
                        No upcoming webinars available at the moment.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {webinars.map((webinar) => {
                        const status = getWebinarStatus(webinar.id);

                        return (
                            <Grid item xs={12} sm={6} md={4} key={webinar.id}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        borderRadius: "20px",
                                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
                                        border: "1px solid #F1F1F1",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "transform 0.2s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    {/* Image Placeholder or Actual Image */}
                                    <Box
                                        sx={{
                                            height: 180,
                                            borderRadius: "16px",
                                            backgroundColor: "#F4F7FE",
                                            backgroundImage: webinar.image_url ? `url(${webinar.image_url})` : "none",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            mb: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {!webinar.image_url && (
                                            <Videocam sx={{ fontSize: 60, color: "#A3AED0" }} />
                                        )}
                                    </Box>

                                    <Box sx={{ flexGrow: 1 }}>
                                        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                            <Chip
                                                label={webinar.type}
                                                size="small"
                                                color={webinar.type === 'Free' ? 'success' : 'warning'}
                                                variant="soft"
                                                sx={{ fontWeight: 600 }}
                                            />
                                            {webinar.price && Number(webinar.price) > 0 && (
                                                <Chip label={`$${webinar.price}`} size="small" variant="outlined" />
                                            )}
                                        </Stack>

                                        <Typography
                                            variant="h6"
                                            fontWeight="700"
                                            sx={{ color: "#1B2559", mb: 1, lineHeight: 1.4 }}
                                        >
                                            {webinar.title}
                                        </Typography>

                                        <Stack spacing={1} sx={{ mb: 2, color: "#A3AED0" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <CalendarMonth fontSize="small" />
                                                <Typography variant="body2" fontWeight="500">
                                                    {new Date(webinar.webinar_date).toLocaleDateString()}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <AccessTime fontSize="small" />
                                                <Typography variant="body2" fontWeight="500">
                                                    {new Date(webinar.webinar_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {webinar.duration} mins
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <Person fontSize="small" />
                                                <Typography variant="body2" fontWeight="500">
                                                    {webinar.speakers || "TBA"}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>

                                    <Box sx={{ mt: 2 }}>
                                        {status === 'REGISTERED' ? (
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip label="Registered" color="success" sx={{ flexGrow: 1, fontWeight: 'bold' }} />
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    onClick={() => onCancelClick(webinar)}
                                                    disabled={joiningId === webinar.id}
                                                    sx={{ textTransform: "none", fontWeight: "600" }}
                                                >
                                                    {joiningId === webinar.id ? <CircularProgress size={20} /> : "Cancel"}
                                                </Button>
                                            </Stack>
                                        ) : status === 'CANCELLED' ? (
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={() => onJoinClick(webinar)}
                                                disabled={joiningId === webinar.id || status === 'CANCELLED'}
                                                sx={{
                                                    borderRadius: "12px",
                                                    py: 1.5,
                                                    backgroundColor: "#4318FF",
                                                    textTransform: "none",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {joiningId === webinar.id ? <CircularProgress size={24} color="inherit" /> : "Re-join"}
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={() => onJoinClick(webinar)}
                                                disabled={joiningId === webinar.id || status === 'COMPLETED'}
                                                sx={{
                                                    borderRadius: "12px",
                                                    py: 1.5,
                                                    backgroundColor: status === 'COMPLETED' ? '#9E9E9E' : "#4318FF",
                                                    textTransform: "none",
                                                    fontWeight: "600",
                                                    color: "white",
                                                }}
                                            >
                                                {joiningId === webinar.id ? (
                                                    <CircularProgress size={24} color="inherit" />
                                                ) : status === 'COMPLETED' ? (
                                                    "Completed"
                                                ) : (
                                                    "Join Now"
                                                )}
                                            </Button>
                                        )}
                                    </Box>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </Box>
    );
};

export default AvailableWebinars;

'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
    Chip,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 15,
        },
    },
};

const EventsWorkshops = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Sample events data
    const events = [
        {
            id: 1,
            title: 'AI & Career Growth Masterclass',
            type: 'Webinar',
            date: 'Upcoming',
            location: 'Live Online',
            description:
                'Learn how AI is transforming careers and how working professionals can upskill to stay relevant.',
            image:
                'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 2,
            title: 'Resume & LinkedIn Optimization',
            type: 'Workshop',
            date: 'Monthly',
            location: 'Pan India',
            description:
                'Practical resume frameworks, LinkedIn positioning, and recruiter insights to stand out.',
            image:
                'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 3,
            title: 'Leadership & Transition Panel',
            type: 'Panel',
            date: 'On Demand',
            location: 'Virtual',
            description:
                'Industry leaders share how to navigate career switches, leadership growth, and decision making.',
            image:
                'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80',
        },
    ];

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#f8fafc',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="xl">
                {/* Header Section */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 6, md: 8 },
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#e0e7ff',
                            color: '#4338ca',
                            px: 2,
                            py: 0.5,
                            borderRadius: '999px',
                            mb: 2,
                        }}
                    >
                        <Typography variant="subtitle2" fontWeight={700} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SendIcon sx={{ fontSize: 16, transform: 'rotate(-45deg)' }} />
                            Upskill & Grow
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#1e293b',
                            fontSize: { xs: 28, md: 42 },
                            letterSpacing: '-0.02em',
                            mb: 2,
                        }}
                    >
                        Webinars & Career Workshops
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#64748b',
                            fontSize: { xs: 16, md: 18 },
                            lineHeight: 1.7,
                        }}
                    >
                        Learn directly from industry leaders, founders, and career experts
                        through live sessions and expert-led workshops designed for
                        working professionals.
                    </Typography>
                </Box>

                {/* Grid */}
                <Grid
                    container
                    spacing={4}
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {events.map((event) => (
                        <Grid item xs={12} md={4} key={event.id}>
                            <Card
                                component={motion.div}
                                variants={cardVariants}
                                whileHover={{ y: -12 }}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '24px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                    transition: 'all 0.3s ease',
                                    bgcolor: '#fff',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        image={event.image}
                                        alt={event.title}
                                        sx={{
                                            height: 240,
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                            '.MuiCard-root:hover &': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            left: 16,
                                            display: 'flex',
                                            gap: 1,
                                        }}
                                    >
                                        <Chip
                                            label={event.type}
                                            size="small"
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.95)',
                                                fontWeight: 700,
                                                color: '#1e293b',
                                                backdropFilter: 'blur(4px)'
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column' }}>

                                    <Stack direction="row" spacing={2} mb={2} sx={{ color: '#6366f1', fontSize: '0.875rem', fontWeight: 600 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <CalendarMonthIcon fontSize="small" />
                                            {event.date}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <LocationOnIcon fontSize="small" />
                                            {event.location}
                                        </Box>
                                    </Stack>

                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: '#0f172a',
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {event.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 3,
                                            color: '#64748b',
                                            lineHeight: 1.6,
                                            flexGrow: 1,
                                        }}
                                    >
                                        {event.description}
                                    </Typography>

                                    <Button
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            alignSelf: 'flex-start',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            color: '#6366f1',
                                            p: 0,
                                            '&:hover': {
                                                bgcolor: 'transparent',
                                                color: '#4f46e5',
                                                '& .MuiButton-endIcon': {
                                                    transform: 'translateX(4px)',
                                                },
                                            },
                                            '& .MuiButton-endIcon': {
                                                transition: 'transform 0.2s',
                                            }
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsWorkshops;
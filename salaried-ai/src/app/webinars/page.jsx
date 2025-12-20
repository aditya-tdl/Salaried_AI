'use client';

import GlobalWrapper from '@/components/layouts/GlobalWrapper';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Stack,
    Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion(Box);

const webinars = [
    {
        title: 'AI & Career Growth',
        speaker: 'Industry Experts',
        desc: 'Understand how AI is reshaping jobs and how professionals can upskill to stay ahead.',
        tag: 'Trending'
    },
    {
        title: 'Resume & LinkedIn Masterclass',
        speaker: 'Hiring Managers',
        desc: 'Practical frameworks to improve visibility and recruiter response rates.',
        tag: 'Essential'
    },
    {
        title: 'Leadership & Career Switch',
        speaker: 'CXOs & Founders',
        desc: 'Learn how leaders navigate transitions and growth effectively.',
        tag: 'Popular'
    },
];

export default function WebinarsPage() {
    return (
        <GlobalWrapper>
            {/* ===== HERO / BANNER ===== */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    py: { xs: 8, sm: 12, md: 16 },
                    bgcolor: '#4c1d95',
                    backgroundImage: `
            linear-gradient(
              135deg,
              rgba(124,58,237,0.95),
              rgba(76,29,149,0.95)
            ),
            url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80)
          `,
                    backgroundSize: 'cover',
                    backgroundPosition: { xs: 'center', md: 'center right' },
                    backgroundRepeat: 'no-repeat',
                    color: '#fff',
                }}
            >
                {/* Subtle depth */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1), transparent 50%)',
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        sx={{ textAlign: { xs: 'center', md: 'left' } }}
                    >
                        <Chip
                            label="Expert Sessions"
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.15)',
                                color: '#fff',
                                backdropFilter: 'blur(4px)',
                                fontWeight: 600,
                                mb: 3
                            }}
                        />
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: 32, sm: 40, md: 64 },
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                maxWidth: 800,
                                mx: { xs: 'auto', md: 0 }
                            }}
                        >
                            Live Webinars & <br /> Expert Sessions
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,
                                maxWidth: 650,
                                fontSize: { xs: 16, sm: 18, md: 20 },
                                lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.9)',
                                mx: { xs: 'auto', md: 0 }
                            }}
                        >
                            Learn directly from industry leaders, founders, and professionals
                            through live webinars and on-demand expert sessions.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* ===== CONTENT ===== */}
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={4}>
                    {webinars.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <MotionBox
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                height="100%"
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 4,
                                        p: 1,
                                        border: '1px solid #f3f4f6',
                                        boxShadow: 'none',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px -4px rgba(0,0,0,0.1)',
                                            borderColor: 'transparent'
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: '12px',
                                                    bgcolor: '#f5f3ff',
                                                    color: '#7c3aed',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <PlayCircleOutlineIcon fontSize="large" />
                                            </Box>
                                            <Chip
                                                label={item.tag}
                                                size="small"
                                                sx={{
                                                    bgcolor: '#f0fdf4',
                                                    color: '#166534',
                                                    fontWeight: 700,
                                                    fontSize: 11
                                                }}
                                            />
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 800,
                                                color: '#111827',
                                                lineHeight: 1.3,
                                                mb: 1
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: '#7c3aed',
                                                fontWeight: 600,
                                                fontSize: 14,
                                                mb: 2,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}
                                        >
                                            {item.speaker}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: '#6b7280',
                                                fontSize: 15,
                                                lineHeight: 1.6,
                                                flexGrow: 1,
                                                mb: 3
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>

                                        <Button
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{
                                                alignSelf: 'flex-start',
                                                borderRadius: '999px',
                                                textTransform: 'none',
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: '#7c3aed',
                                                p: 0,
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    color: '#6d28d9',
                                                    '& .MuiButton-endIcon': {
                                                        transform: 'translateX(4px)'
                                                    }
                                                },
                                                '& .MuiButton-endIcon': {
                                                    transition: 'transform 0.2s'
                                                }
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </MotionBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </GlobalWrapper>
    );
}

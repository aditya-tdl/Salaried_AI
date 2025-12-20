'use client';

import GlobalWrapper from '@/components/layouts/GlobalWrapper';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    TextField,
    Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function NewsletterPage() {
    return (
        <GlobalWrapper>
            {/* ===== HERO / BANNER ===== */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    py: { xs: 10, sm: 12, md: 20 },
                    bgcolor: '#111827',
                    backgroundImage: `
            linear-gradient(
              135deg,
              rgba(17,24,39,0.95),
              rgba(17,24,39,0.9)
            ),
            url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80)
          `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                }}
            >
                {/* Soft glow */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(circle at top left, rgba(124,58,237,0.3), transparent 50%)',
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        sx={{ textAlign: 'center' }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: 32, sm: 42, md: 64 },
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                maxWidth: 800,
                                mx: 'auto'
                            }}
                        >
                            Career Insights <br />
                            <Box component="span" sx={{ color: '#a78bfa' }}>Delivered Weekly</Box>
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,
                                maxWidth: 640,
                                fontSize: { xs: 16, sm: 18, md: 20 },
                                lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.8)',
                                mx: 'auto'
                            }}
                        >
                            Twice-a-week insights on careers, job market trends, and skills
                            that actually matter — delivered straight to your inbox.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* ===== CONTENT ===== */}
            <Container maxWidth="sm" sx={{ py: { xs: 8, md: 10 }, mt: { md: -10 }, position: 'relative', zIndex: 10 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, sm: 5 },
                            borderRadius: { xs: 3, sm: 4 },
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Stack spacing={4} textAlign="center">
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 800,
                                        color: '#111827',
                                        mb: 1
                                    }}
                                >
                                    Join 20,000+ Professionals
                                </Typography>
                                <Typography color="#6b7280">
                                    Get the edge in your career journey.
                                </Typography>
                            </Box>

                            <Box sx={{ bgcolor: '#f9fafb', p: 3, borderRadius: 3, textAlign: 'left' }}>
                                <Typography
                                    sx={{
                                        color: '#374151',
                                        fontSize: 15,
                                        lineHeight: 1.8,
                                        fontWeight: 500
                                    }}
                                >
                                    ✨ Job market updates <br />
                                    🚀 Career growth & transition tips <br />
                                    📝 Resume & skill insights <br />
                                    🎙️ Webinar highlights
                                </Typography>
                            </Box>

                            <Stack spacing={2}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter your email address"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '999px',
                                            bgcolor: '#fff'
                                        },
                                    }}
                                />

                                <Button
                                    size="large"
                                    sx={{
                                        background:
                                            'linear-gradient(135deg, #7c3aed, #5b21b6)',
                                        color: '#fff',
                                        py: 1.5,
                                        fontWeight: 700,
                                        fontSize: 16,
                                        borderRadius: '999px',
                                        textTransform: 'none',
                                        boxShadow:
                                            '0 10px 24px rgba(124,58,237,0.3)',
                                        '&:hover': {
                                            boxShadow:
                                                '0 14px 30px rgba(124,58,237,0.4)',
                                        },
                                    }}
                                >
                                    Subscribe for Free
                                </Button>
                            </Stack>

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    color: '#9ca3af',
                                }}
                            >
                                No spam. Unsubscribe anytime.
                            </Typography>
                        </Stack>
                    </Paper>
                </MotionBox>
            </Container>
        </GlobalWrapper>
    );
}

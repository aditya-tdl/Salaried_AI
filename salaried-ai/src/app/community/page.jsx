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
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function CommunityPage() {
    return (
        <GlobalWrapper>
            {/* ===== HERO ===== */}
            <Box
                sx={{
                    position: 'relative',
                    py: { xs: 10, md: 16 },
                    backgroundImage: `
            linear-gradient(
              135deg,
              rgba(124,58,237,0.9),
              rgba(76,29,149,0.9)
            ),
            url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)
          `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="lg">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: 32, md: 56 },
                                lineHeight: 1.1,
                                maxWidth: 800,
                            }}
                        >
                            Join 2,00,000+ Professionals <br /> Growing Together
                        </Typography>

                        <Typography
                            sx={{
                                mt: 2,
                                fontSize: { xs: 15, md: 18 },
                                maxWidth: 650,
                                lineHeight: 1.7,
                                color: 'rgba(255,255,255,0.95)',
                            }}
                        >
                            Be part of India’s most active career-focused communities on
                            WhatsApp and Telegram. Learn, discuss, and grow — completely free.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* ===== WHY JOIN ===== */}
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={4}>
                    {[
                        {
                            icon: <TrendingUpOutlinedIcon />,
                            title: 'Daily Career Insights',
                            desc: 'Job market updates, trends, and actionable career tips.',
                        },
                        {
                            icon: <SchoolOutlinedIcon />,
                            title: 'Learning & Resources',
                            desc: 'Free resources, webinar updates, and expert insights.',
                        },
                        {
                            icon: <GroupOutlinedIcon />,
                            title: 'Peer Discussions',
                            desc: 'Discuss challenges, transitions, and growth with peers.',
                        },
                    ].map((item, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 4,
                                    p: 3,
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        mx: 'auto',
                                        mb: 2,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background:
                                            'linear-gradient(135deg, #7c3aed, #5b21b6)',
                                        color: '#fff',
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography fontWeight={800} mb={1}>
                                    {item.title}
                                </Typography>

                                <Typography color="#4b5563" fontSize={14}>
                                    {item.desc}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* ===== COMMUNITY LINKS ===== */}
            <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
                <Typography
                    variant="h4"
                    fontWeight={900}
                    textAlign="center"
                    mb={5}
                >
                    Join Our Free Communities
                </Typography>

                <Grid container spacing={4}>
                    {/* WhatsApp */}
                    <Grid item xs={12} md={6}>
                        <CommunityCard
                            icon={<WhatsAppIcon />}
                            title="Salaried Club – WhatsApp"
                            desc="Daily insights, job updates, and career discussions."
                            cta="Join WhatsApp Group"
                        />
                    </Grid>

                    {/* Telegram */}
                    <Grid item xs={12} md={6}>
                        <CommunityCard
                            icon={<TelegramIcon />}
                            title="Salaried Club – Telegram"
                            desc="Broadcast updates, resources, and webinar alerts."
                            cta="Join Telegram Channel"
                        />
                    </Grid>

                    {/* Women */}
                    <Grid item xs={12} md={6}>
                        <CommunityCard
                            icon={<WhatsAppIcon />}
                            title="Salaried Women Club – WhatsApp"
                            desc="A safe, focused space for women professionals."
                            cta="Join Women WhatsApp Group"
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CommunityCard
                            icon={<TelegramIcon />}
                            title="Salaried Women Club – Telegram"
                            desc="Career updates and discussions for women professionals."
                            cta="Join Women Telegram"
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* ===== CTA STRIP ===== */}
            <Box
                sx={{
                    py: { xs: 6, md: 8 },
                    background: '#f9fafb',
                    textAlign: 'center',
                }}
            >
                <Typography fontWeight={800} fontSize={{ xs: 20, md: 28 }}>
                    Already part of the community?
                </Typography>
                <Typography color="#4b5563" mt={1}>
                    Take the next step with expert-led webinars and premium insights.
                </Typography>

                <Button
                    sx={{
                        mt: 3,
                        background:
                            'linear-gradient(135deg, #7c3aed, #5b21b6)',
                        color: '#fff',
                        px: 4,
                        py: 1.4,
                        borderRadius: '999px',
                        fontWeight: 700,
                        textTransform: 'none',
                    }}
                >
                    Upgrade to ₹59 Membership
                </Button>
            </Box>
        </GlobalWrapper>
    );
}

/* Community Card */
function CommunityCard({ icon, title, desc, cta }) {
    return (
        <Card
            sx={{
                height: '100%',
                borderRadius: 4,
                p: 3,
                border: '1px solid rgba(0,0,0,0.08)',
            }}
        >
            <Stack spacing={2}>
                <Box sx={{ color: '#7c3aed', fontSize: 40 }}>{icon}</Box>
                <Typography fontWeight={800}>{title}</Typography>
                <Typography color="#4b5563" fontSize={14}>
                    {desc}
                </Typography>
                <Button
                    sx={{
                        alignSelf: 'flex-start',
                        mt: 1,
                        borderRadius: '999px',
                        textTransform: 'none',
                        fontWeight: 700,
                        background:
                            'linear-gradient(135deg, #7c3aed, #5b21b6)',
                        color: '#fff',
                    }}
                >
                    {cta}
                </Button>
            </Stack>
        </Card>
    );
}

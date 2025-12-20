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
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion(Box);

const resources = [
    {
        title: 'Resume Templates',
        desc: 'Professionally designed, ATS-friendly resume formats for different career stages.',
        icon: <DescriptionOutlinedIcon sx={{ fontSize: 32 }} />,
        tag: 'Most Downloaded'
    },
    {
        title: 'Career Roadmaps',
        desc: 'Step-by-step growth paths to move from where you are to where you want to be.',
        icon: <MapOutlinedIcon sx={{ fontSize: 32 }} />,
        tag: 'Guide'
    },
    {
        title: 'Interview Prep Guides',
        desc: 'Questions, frameworks, and proven strategies used by top candidates.',
        icon: <SchoolOutlinedIcon sx={{ fontSize: 32 }} />,
        tag: 'Strategy'
    },
];

export default function ResourcesPage() {
    return (
        <GlobalWrapper>
            {/* ===== HERO / BANNER ===== */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    py: { xs: 8, sm: 12, md: 16 },
                    bgcolor: '#6d28d9',
                    backgroundImage: `
      linear-gradient(
        135deg,
        rgba(138, 78, 242, 0.92),
        rgba(100, 50, 176, 0.95)
      ),
      url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)
    `,
                    backgroundSize: 'cover',
                    backgroundPosition: { xs: 'center', md: 'center right' },
                    backgroundRepeat: 'no-repeat',
                    color: '#fff',
                }}
            >
                {/* Optional subtle grain / depth */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 40%)',
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
                            label="Free Resources"
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
                            Career Tools & <br /> Resources
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,
                                maxWidth: 650,
                                fontSize: { xs: 16, sm: 18, md: 20 },
                                lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.92)',
                                mx: { xs: 'auto', md: 0 }
                            }}
                        >
                            Practical tools, templates, and guides designed to help working
                            professionals grow faster and make smarter career decisions.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>


            {/* ===== CONTENT ===== */}
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={4}>
                    {resources.map((item, i) => (
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
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
                                                    color: '#7c3aed',
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                            <Chip
                                                label={item.tag}
                                                size="small"
                                                sx={{
                                                    bgcolor: '#eff6ff',
                                                    color: '#1d4ed8',
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
                                                mb: 1
                                            }}
                                        >
                                            {item.title}
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
                                            Access Resource
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

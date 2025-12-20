'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Community() {
    return (
        <Box sx={{ py: 12, bgcolor: '#1e1b4b', color: '#fff', position: 'relative', overflow: 'hidden' }}>

            {/* Background decoration */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none' }}>
                <Box sx={{ position: 'absolute', top: '-50%', left: '-20%', width: 600, height: 600, borderRadius: '50%', bgcolor: '#4338ca', filter: 'blur(100px)' }} />
                <Box sx={{ position: 'absolute', bottom: '-50%', right: '-20%', width: 600, height: 600, borderRadius: '50%', bgcolor: '#7c3aed', filter: 'blur(100px)' }} />
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 3,
                        fontSize: { xs: 32, md: 48 }
                    }}
                >
                    Join Our 2 Lakh+ Member Communities
                </Typography>

                <Typography
                    sx={{
                        color: '#cbd5e1',
                        mb: 6,
                        fontSize: 18,
                        maxWidth: 700,
                        mx: 'auto'
                    }}
                >
                    Network with the best minds, get instant updates, and be part of India's fastest growing career club.
                </Typography>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center" mb={8}>
                    <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        size="large"
                        sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' }, py: 1.5, px: 4, borderRadius: 2 }}
                    >
                        Salaried Club (WhatsApp)
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        size="large"
                        sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' }, py: 1.5, px: 4, borderRadius: 2 }}
                    >
                        Salaried Women (WhatsApp)
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<TelegramIcon />}
                        size="large"
                        sx={{ bgcolor: '#0088cc', '&:hover': { bgcolor: '#0077b5' }, py: 1.5, px: 4, borderRadius: 2 }}
                    >
                        Join on Telegram
                    </Button>
                </Stack>

                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 8 }}>
                    <Typography variant="h6" mb={4}>Explore Our Social Media</Typography>
                    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
                        {['ThatSalariedGuy', 'Salaried Club', 'Salaried Women Club', 'Non-coding AI', 'Growthcast', 'ThatSalariedGuy YT'].map((channel) => (
                            <Box key={channel} sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 2, py: 1, borderRadius: '99px', display: 'flex', alignItems: 'center', gap: 1 }}>
                                {channel.includes('YT') ? <YouTubeIcon sx={{ color: 'red' }} /> : <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4ade80' }} />}
                                <Typography fontSize={14} fontWeight={500}>{channel}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>

            </Container>
        </Box>
    );
}

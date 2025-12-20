'use client';

import { Box, Container, Typography, Grid, Card, Avatar } from '@mui/material';

const guests = [
    { name: 'Niranjan Hiranandani', title: 'Hiranandani Group' },
    { name: 'Subroto Bagchi', title: 'Mindtree' },
    { name: 'Sanjeev Bikhchandani', title: 'Founder Naukri.com' },
    { name: 'Pranav Pai', title: 'Partner at 3one4 capital' },
    { name: 'Anshul Mishra', title: 'IAS' },
    { name: 'Vikas Swarup', title: 'IFS' },
    { name: 'Nirmit Parikh', title: 'Apna Jobs' },
    { name: 'Mayank Kumar', title: 'Founder Upgrad' },
    { name: 'Vineet Saxena', title: 'Cofounder Myntra' },
    { name: 'Ashish Munjal', title: 'Sunstone Eduversity' },
    { name: 'Gajendra Kothari', title: 'Etica Wealth' },
    { name: 'Aashish Somaiya', title: 'White Oak Investments' },
    { name: 'Kunal Khattar', title: 'Advantage Founders' }
];

export default function GuestShowcase() {
    return (
        <Box sx={{ py: 10, bgcolor: '#fff' }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        fontWeight: 800,
                        color: '#1e293b',
                        mb: 2,
                        fontSize: { xs: 28, md: 36 }
                    }}
                >
                    Hosted Industry Legends
                </Typography>
                <Typography
                    align="center"
                    sx={{
                        color: '#64748b',
                        mb: 8,
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    We bring you sessions with the changemakers of the industry.
                </Typography>

                <Grid container spacing={3}>
                    {guests.map((guest, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 2,
                                    boxShadow: 'none',
                                    border: '1px solid #f1f5f9',
                                    borderRadius: 3,
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        borderColor: '#e2e8f0',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                    }
                                }}
                            >
                                <Avatar
                                    sx={{ bgcolor: '#eff6ff', color: '#3b82f6', mr: 2, fontWeight: 700 }}
                                >
                                    {guest.name[0]}
                                </Avatar>
                                <Box>
                                    <Typography fontWeight={700} fontSize={15} color="#0f172a">
                                        {guest.name}
                                    </Typography>
                                    <Typography variant="caption" color="#64748b">
                                        {guest.title}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

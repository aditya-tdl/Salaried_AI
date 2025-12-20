'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const companies = [
    'Google', 'Amazon', 'Microsoft', 'Meta', 'EY', 'BCG',
    'Mckinsey', 'AT Kearney', 'Flipkart', 'Salesforce', 'Pwc', 'Pepsico'
];

export default function PastSpeakers() {
    return (
        <Box sx={{ py: 6, bgcolor: '#f8fafc', overflow: 'hidden' }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        color: '#64748b',
                        mb: 4,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}
                >
                    Our Past Speakers were from
                </Typography>

                <Box sx={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
                    <Box
                        component={motion.div}
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        sx={{
                            display: 'flex',
                            gap: 8,
                            minWidth: 'max-content',
                            px: 4
                        }}
                    >
                        {[...companies, ...companies].map((company, index) => (
                            <Typography
                                key={index}
                                variant="h5"
                                sx={{
                                    color: '#cbd5e1',
                                    fontWeight: 800,
                                    whiteSpace: 'nowrap',
                                    fontSize: { xs: '1.5rem', md: '2rem' }
                                }}
                            >
                                {company}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

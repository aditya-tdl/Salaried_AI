'use client';

import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Script from 'next/script';

/* ---------------- Razorpay TEST MODE (Frontend Only) ---------------- */
const handlePayment = () => {
  if (typeof window === 'undefined' || !window.Razorpay) {
    alert('Razorpay SDK not loaded');
    return;
  }

  const options = {
    key: 'rzp_test_Kotf5HyoWEo0bV',
    amount: 5900, // ₹59
    currency: 'INR',
    name: 'Salaried.ai',
    description: 'Test Mode Subscription',
    handler: function (response) {
      alert(
        `TEST PAYMENT SUCCESS 🎉\nPayment ID: ${response.razorpay_payment_id}`
      );
      console.log('Razorpay Response:', response);
    },
    prefill: {
      name: 'Test User',
      email: 'test@example.com',
      contact: '9999999999',
    },
    theme: { color: '#7c3aed' },
  };

  const rzp = new window.Razorpay(options);

  rzp.on('payment.failed', function (response) {
    alert(`Payment Failed ❌\n${response.error.description}`);
    console.error(response.error);
  });

  rzp.open();
};

/* ---------------- Animation variants ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const imageGridVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  return (
    <>
      {/* Razorpay Script */}
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <Box
        sx={{
          position: 'relative',
          bgcolor: '#fff',
          overflow: 'hidden',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 6, md: 8, lg: 12 },
            }}
          >
            {/* LEFT CONTENT */}
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
            >
              <Box component={motion.div} variants={itemVariants}>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    mb: 2,
                    borderRadius: '8px',
                    bgcolor: 'rgba(124,58,237,0.1)',
                    color: '#7c3aed',
                    fontSize: { xs: 12, md: 14 },
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  🚀 Accelerate your growth
                </Typography>
              </Box>

              <Box component={motion.div} variants={itemVariants}>
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: 36, sm: 48, md: 64 },
                    lineHeight: { xs: 1.2, md: 1.1 },
                    letterSpacing: '-0.02em',
                    color: '#1a1a1a',
                    mb: 3,
                  }}
                >
                  Grow Faster in Your Career <br />
                  for Just{' '}
                  <Box
                    component="span"
                    onClick={handlePayment}
                    sx={{
                      color: '#7c3aed',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  >
                    ₹59 / Month
                  </Box>
                </Typography>
              </Box>

              <Box component={motion.div} variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 20 },
                    color: '#555',
                    mb: 4,
                    maxWidth: 600,
                    mx: { xs: 'auto', md: 0 },
                    lineHeight: 1.6,
                  }}
                >
                  Salaried.ai is India’s first career-focused subscription platform
                  designed for working professionals to learn, upskill, and stay
                  ahead of job market trends — all at less than ₹2 per day.
                </Typography>
              </Box>

              <Stack
                component={motion.div}
                variants={itemVariants}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                alignItems="center"
                mb={6}
              >
                <Button
                  onClick={handlePayment}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: '#7c3aed',
                    color: '#fff',
                    px: 5,
                    py: 2,
                    borderRadius: '12px',
                    fontSize: 18,
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 10px 25px rgba(124,58,237, 0.4)',
                    '&:hover': {
                      backgroundColor: '#6d28d9',
                      boxShadow: '0 15px 35px rgba(124,58,237, 0.5)',
                    },
                  }}
                >
                  Start for ₹59 / month
                </Button>
              </Stack>

              {/* STATS */}
              <Box component={motion.div} variants={itemVariants}>
                <Stack
                  direction="row"
                  spacing={{ xs: 2.5, sm: 4 }}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  divider={
                    <Box
                      sx={{
                        width: '1px',
                        height: '40px',
                        bgcolor: '#e0e0e0',
                        alignSelf: 'center',
                      }}
                    />
                  }
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Stack direction="row" spacing={-1.5}>
                      {[11, 12, 13, 14].map((img, index) => (
                        <Avatar
                          key={img}
                          src={`https://i.pravatar.cc/100?img=${img}`}
                          sx={{
                            width: 32,
                            height: 32,
                            border: '2px solid #fff',
                            zIndex: 4 - index,
                          }}
                        />
                      ))}
                    </Stack>
                    <Box textAlign="left">
                      <Typography fontWeight={800} fontSize={16}>
                        2L+
                      </Typography>
                      <Typography fontSize={13} color="#666">
                        Members
                      </Typography>
                    </Box>
                  </Stack>

                  <Box textAlign="left">
                    <Typography fontWeight={800} fontSize={16}>
                      200M+
                    </Typography>
                    <Typography fontSize={13} color="#666">
                      Views
                    </Typography>
                  </Box>

                  <Box textAlign="left">
                    <Typography fontWeight={800} fontSize={16}>
                      200+
                    </Typography>
                    <Typography fontSize={13} color="#666">
                      Workshops
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>

            {/* RIGHT IMAGES (unchanged) */}
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              variants={imageGridVariants}
              sx={{
                flex: 1,
                position: 'relative',
                display: { xs: 'none', md: 'block' },
                height: 600,
                width: '100%',
                maxWidth: 600,
              }}
            >
              <FloatingImage
                src="/img1.png"
                top={0}
                left={20}
                width={260}
                height={320}
                delay={0}
              />
              <FloatingImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                top={80}
                right={10}
                width={240}
                height={280}
                delay={0.2}
              />
              <FloatingImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                bottom={20}
                left={50}
                width={220}
                height={220}
                delay={0.4}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

function FloatingImage({ src, top, left, right, bottom, width, height, delay }) {
  return (
    <Box
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10 }}
      sx={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width,
        height,
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        component="img"
        src={src}
        alt="Community"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
}

function ImageCardMobile({ src }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: 280,
        height: 200,
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      <Box
        component="img"
        src={src}
        alt="Community"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
}

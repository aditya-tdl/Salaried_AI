'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import GlobalWrapper from '@/components/layouts/GlobalWrapper';
import ClientOnly from '../signup/ClientOnly';
import useApi from '@/components/Hooks/useApi';
import { login } from '@/components/ReduxToolkit/Slices/AuthSlice';
import { baseUrl } from '@/components/baseUrl/BaseUrl';
import axios from 'axios';
import { hideLoader, showLoader } from '@/components/ReduxToolkit/Slices/loaderSlice';
import { openSnackbar } from '@/components/ReduxToolkit/Slices/snackbarSlice';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  IconButton,
  InputAdornment,
  Link,
  useMediaQuery,
  useTheme,
  CircularProgress
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Login() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading: globalLoading } = useSelector((state) => state.auth);

  // Check if user is on mobile to adjust layout if needed (MUI Grid/Flex handles most of it)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [apiError, setApiError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoader());

    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      dispatch(hideLoader());
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        username: formData.email,
        password: formData.password,
      });

      // dispatch(hideLoader()); // Keep loader until redirect or error? remove to prevent flicker
      console.log("data", response.data);
      if (response.data.success) {
        dispatch(
          login({
            user: {
              name: response.data.data.name,
              email: response.data.data.email,
              role: response.data.data.role,
              id: response.data.data.id,
            },
            token: response.data.data.token,
          })
        );

        dispatch(openSnackbar({
          message: "Logged in successfully",
          severity: "success"
        }));

        setFormData({ email: "", password: "" });
        dispatch(hideLoader());

        // Redirect based on role
        router.push("/dashboard");

      } else {
        dispatch(hideLoader());
        setApiError("Invalid login credentials.");
      }
    } catch (error) {
      dispatch(hideLoader());
      console.error("Login error:", error);
      setApiError(error.response?.data?.message || "Something went wrong");
      dispatch(openSnackbar({
        message: error.response?.data?.message || "Login failed",
        severity: "error"
      }));
    }
  };

  return (
    <GlobalWrapper>
      <ClientOnly>
        <Box
          sx={{
            minHeight: '95vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 4, md: 2 },
            px: { xs: 2, md: 4 },
            background: 'linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)'
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: '100%',
              maxWidth: 1100,
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              animation: 'fadeUp 0.8s ease-out forwards',
            }}
          >
            {/* LEFT SIDE: Promotional Content */}
            <Box sx={{
              flex: 1,
              bgcolor: '#1e1b4b', // Dark purple/indigo
              color: 'white',
              p: { xs: 4, md: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative Background Elements */}
              <Box sx={{
                position: 'absolute',
                top: -50,
                left: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(124,58,237,0) 70%)',
                filter: 'blur(40px)',
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: -50,
                right: -50,
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0) 70%)',
                filter: 'blur(60px)',
              }} />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255,255,255,0.1)', px: 2, py: 0.5, borderRadius: 10, mb: 3 }}>
                  <AutoAwesomeIcon sx={{ fontSize: 18, color: '#fbbf24' }} />
                  <Typography variant="subtitle2" fontWeight={600} color="#fbbf24">
                    Premium Access
                  </Typography>
                </Box>

                <Typography variant="h3" fontWeight={800} sx={{ mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  Unlock Your <br />
                  <Box component="span" sx={{ color: '#a78bfa' }}>Career Potential</Box>
                </Typography>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Join the elite community of professionals accelerating their growth with Salaried.ai.
                </Typography>

                <Stack spacing={2}>
                  {[
                    "Access to exclusive AI career tools",
                    "Monthly expert webinars & workshops",
                    "Premium community network access",
                    "Priority support 24/7"
                  ].map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircleIcon sx={{ color: '#34d399', fontSize: 20 }} />
                      <Typography variant="body2" fontWeight={500} sx={{ color: 'rgba(255,255,255,0.9)' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* RIGHT SIDE: Login Form */}
            <Box sx={{
              flex: 1.2,
              bgcolor: '#fff',
              p: { xs: 4, md: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {globalLoading && (
                <CircularProgress
                  size={40}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                />
              )}
              <Box sx={{ opacity: globalLoading ? 0.5 : 1 }}>
                <Typography variant="h5" fontWeight={800} color="#111827" sx={{ mb: 1 }}>
                  Welcome Back
                </Typography>
                <Typography variant="body2" color="#6b7280" sx={{ mb: 4 }}>
                  Please enter your email and password to sign in.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={2.5}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      sx={{
                        '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f9fafb' },
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e5e7eb' }
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      error={!!errors.password}
                      helperText={errors.password || apiError}
                      sx={{
                        '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f9fafb' },
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e5e7eb' }
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                              {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      disabled={globalLoading}
                      sx={{
                        mt: 2,
                        background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
                        color: '#fff',
                        py: 1.8,
                        borderRadius: 3,
                        fontWeight: 700,
                        fontSize: 16,
                        textTransform: 'none',
                        boxShadow: '0 10px 25px -5px rgba(124,58,237,0.4)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 15px 30px -5px rgba(124,58,237,0.5)',
                          transform: 'translateY(-2px)'
                        },
                        '&:disabled': {
                          background: '#d1d5db',
                          boxShadow: 'none'
                        }
                      }}
                    >
                      Sign In
                    </Button>

                    <Typography variant="body2" textAlign="center" color="#6b7280" sx={{ mt: 2 }}>
                      <Link href="/forgot-password" underline="hover" sx={{ color: '#4f46e5', fontWeight: 600 }}>
                        Forgot password?
                      </Link>
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <style jsx global>{`
                    @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    }
                `}</style>
      </ClientOnly>
    </GlobalWrapper>
  );
}

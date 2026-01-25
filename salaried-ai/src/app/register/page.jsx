'use client';
import { use, useState } from 'react';
import GlobalWrapper from '@/components/layouts/GlobalWrapper';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Stack,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    IconButton,
    InputAdornment,
    Link,
    useMediaQuery,
    useTheme,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Script from "next/script";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '@/components/baseUrl/BaseUrl';
import { openSnackbar } from '@/components/ReduxToolkit/Slices/snackbarSlice';
import { updateProfile } from '@/components/ReduxToolkit/Slices/UserSlice';

export default function RegisterPage() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { user } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        mobile: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    console.log("user", user)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.email)
            newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Enter a valid email address';

        if (!formData.gender)
            newErrors.gender = 'Please select your gender';

        if (!formData.mobile)
            newErrors.mobile = 'Mobile number is required';
        else if (!/^\d{10}$/.test(formData.mobile))
            newErrors.mobile = 'Enter a valid 10-digit mobile number';

        if (!formData.password)
            newErrors.password = 'Password is required';
        else if (formData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters';

        if (!formData.confirmPassword)
            newErrors.confirmPassword = 'Please confirm your password';
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        try {
            const response = await axios.post(`${baseUrl}/auth/register`, formData, {
                withCredentials: true,
            });
            const { email, id } = response.data.data;
            // setFormData({
            //     name: '',
            //     email: '',
            //     gender: '',
            //     mobile: '',
            //     password: '',
            //     confirmPassword: '',
            // })
            handlePayment(response.data.data)
        } catch (err) {
            const errorMsg =
                err.response?.data?.message || err.message || "Invalid credentials";
            dispatch(openSnackbar({ message: errorMsg, severity: "error" }));
            setLoading(false); // Only stop loading on error, otherwise keep distinct for payment
        }
    };

    // Master Card Test Details:
    // Card Number: 5267 3181 8797 5449
    // Expiry: Any future date
    // CVV: 123
    // OTP: 123456

    /* ---------------- Razorpay TEST MODE (Frontend Only) ---------------- */
    const handlePayment = async (data) => {
        setLoading(true);
        try {
            // Step 1: Create payment on backend
            const res = await fetch(`${baseUrl}/payment/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: data.id }),
                credentials: "include",
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
                setLoading(false);
            }

            const paymentData = await res.json();

            if (!paymentData.success) {
                throw new Error(paymentData.message || "Failed to create payment");
            }

            const { subscriptionId } = paymentData.data;

            if (!subscriptionId) {
                throw new Error("No subscription ID received from server");
            }

            console.log("subscriptionId", subscriptionId);

            // Step 2: Initialize Razorpay
            const options = {
                key: "rzp_test_RBSer2L2HUkTuM", // public key only
                subscription_id: subscriptionId, // 🔥 IMPORTANT
                name: "Salaried.ai",
                description: "₹2 / weekly subscription",
                handler: function (response) {
                    // DO NOT trust this fully - verify on backend
                    console.log("Payment response:", response);

                    // Optional: Verify payment on backend here
                    // verifyPaymentOnBackend(response);
                    setLoading(false);
                    dispatch(updateProfile(null))
                    dispatch(openSnackbar({
                        message: "Payment successful 🎉",
                        severity: "success"
                    }));

                    // Reset form and loading state after successful payment/flow
                    setFormData({
                        name: '',
                        email: '',
                        gender: '',
                        mobile: '',
                        password: '',
                        confirmPassword: '',
                    });
                    setLoading(false);
                },
                "modal": {
                    "ondismiss": function () {
                        dispatch(updateProfile(data))

                        console.log("Payment modal closed by user");
                        dispatch(openSnackbar({
                            message: "Payment cancelled",
                            severity: "info"
                        }));
                        setLoading(false);
                    }
                },
                prefill: {
                    name: data.name,
                    email: data.email,
                    contact: data.mobile,
                },
                theme: {
                    color: "#7c3aed",
                },
            };

            // Check if Razorpay is available
            if (!window.Razorpay) {
                throw new Error("Razorpay SDK not loaded");
            }

            const rzp = new window.Razorpay(options);

            // Add error handler for Razorpay
            rzp.on('payment.failed', function (response) {
                console.error('Payment failed:', response.error);
                dispatch(updateProfile(data))
                dispatch(openSnackbar({
                    message: `Payment failed: ${response.error.description || 'Unknown error'}`,
                    severity: "error"
                }));
                setLoading(false);
            });

            rzp.open();

        } catch (error) {
            console.error("Payment initialization error:", error);
            setLoading(false);

            // Show user-friendly error message
            let errorMessage = "Failed to initialize payment";

            if (error.message.includes("Network Error") || error.message.includes("Failed to fetch")) {
                errorMessage = "Network error. Please check your internet connection.";
            } else if (error.message.includes("subscription ID")) {
                errorMessage = "Payment setup failed. Please try again.";
            }

            dispatch(openSnackbar({
                message: errorMessage,
                severity: "error"
            }));
        }
    };

    return (
        <>
            <GlobalWrapper>
                <Script
                    id="razorpay-checkout-js"
                    src="https://checkout.razorpay.com/v1/checkout.js"
                />

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
                            opacity: 0,
                            animation: 'fadeUp 0.8s ease-out forwards',
                        }}
                    >
                        {/* LEFT SIDE: Premium Info */}
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
                                    <Box component="span" sx={{ color: '#a78bfa' }}>Carreer Potential</Box>
                                </Typography>

                                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    Join the elite community of professionals accelerating their growth with Salaried.ai.
                                </Typography>

                                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.15)', mb: 4 }} />

                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5, color: '#fff' }}>
                                        ₹49 <Box component="span" sx={{ fontSize: '0.9rem', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>/ month</Box>
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                        Billed monthly. Cancel anytime.
                                    </Typography>
                                </Box>

                                <Stack spacing={2}>
                                    {[
                                        "Access to exclusive AI career tools",
                                        "Monthly expert webinars & workshops",
                                        "Premium community network access",
                                        "Unlimited resume reviews",
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

                        {/* RIGHT SIDE: Form */}
                        <Box sx={{
                            flex: 1.2,
                            bgcolor: '#fff',
                            p: { xs: 4, md: 6 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            {user === null ? <Typography variant="h5" fontWeight={800} color="#111827" sx={{ mb: 1 }}>
                                Create Account
                            </Typography> : <Typography variant="h5" fontWeight={800} color="#111827" sx={{ mb: 1 }}>
                                Hi {user?.name}, please continue your payment to activate premium access.
                            </Typography>}
                            {user === null && <Typography variant="body2" color="#6b7280" sx={{ mb: 4 }}>
                                Enter your details to get started with your premium access.
                            </Typography>}

                            {user === null && <Box component="form" onSubmit={handleSubmit}>
                                <Stack spacing={2.5}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f9fafb' },
                                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e5e7eb' }
                                        }}
                                    />

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

                                    <Box>
                                        <FormLabel error={!!errors.gender} sx={{ fontSize: 13, fontWeight: 600, mb: 1, display: 'block', color: '#374151' }}>
                                            Gender
                                        </FormLabel>
                                        <RadioGroup
                                            row
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            sx={{ gap: 2 }}
                                        >
                                            {['Male', 'Female', 'Other'].map((option) => (
                                                <FormControlLabel
                                                    key={option}
                                                    value={option.toLowerCase()}
                                                    control={<Radio size="small" sx={{ color: '#d1d5db', '&.Mui-checked': { color: '#7c3aed' } }} />}
                                                    label={<Typography fontSize={14} fontWeight={500} color="#4b5563">{option}</Typography>}
                                                    sx={{
                                                        border: `1px solid ${formData.gender === option.toLowerCase() ? '#7c3aed' : '#e5e7eb'}`,
                                                        borderRadius: 2,
                                                        px: 2,
                                                        py: 0.5,
                                                        mr: 0,
                                                        flex: 1,
                                                        bgcolor: formData.gender === option.toLowerCase() ? '#f5f3ff' : 'transparent',
                                                        transition: 'all 0.2s',
                                                        '&:hover': { bgcolor: '#f9fafb' }
                                                    }}
                                                />
                                            ))}
                                        </RadioGroup>
                                        {errors.gender && (
                                            <Typography fontSize={12} color="error" mt={0.5}>
                                                {errors.gender}
                                            </Typography>
                                        )}
                                    </Box>

                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        inputProps={{ maxLength: 10 }}
                                        error={!!errors.mobile}
                                        helperText={errors.mobile}
                                        sx={{
                                            '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f9fafb' },
                                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e5e7eb' }
                                        }}
                                    />

                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={formData.password}
                                            onChange={handleChange}
                                            error={!!errors.password}
                                            helperText={errors.password}
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
                                        <TextField
                                            fullWidth
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            error={!!errors.confirmPassword}
                                            helperText={errors.confirmPassword}
                                            sx={{
                                                '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f9fafb' },
                                                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e5e7eb' }
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                                                            {showConfirmPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Stack>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        disabled={loading}
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
                                        {loading ? 'Processing...' : 'Pay ₹49 & Register'}
                                    </Button>

                                    {/* <Typography variant="caption" textAlign="center" color="#9ca3af" sx={{ mt: 2, display: 'block' }}>
                                        Secure payment powered by Razorpay.
                                    </Typography> */}

                                </Stack>
                            </Box>}
                            {user !== null && <Button
                                fullWidth
                                disabled={loading}
                                onClick={() => handlePayment(user)}
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
                                {loading ? 'Processing...' : 'Pay ₹2 & Register'}
                            </Button>}
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
            </GlobalWrapper>
        </>
    );
}

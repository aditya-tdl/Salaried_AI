'use client';

import { useState } from 'react';
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
    useTheme
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function RegisterPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        console.log('Register Data:', formData);

        setTimeout(() => {
            setLoading(false);
            alert('Registered successfully (mock)');
        }, 1200);
    };

    return (
        <GlobalWrapper>
            <Container maxWidth="sm" sx={{ py: { xs: 6, md: 8 } }}>
                <Paper
                    elevation={0}
                    className="register-card"
                    sx={{
                        p: { xs: 3, sm: 5 },
                        borderRadius: 4,
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: {
                            xs: '0 4px 6px -1px rgba(0,0,0,0.05)',
                            md: '0 20px 25px -5px rgba(0,0,0,0.05)',
                        },
                    }}
                >
                    <Stack spacing={4}>
                        {/* Header */}
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    bgcolor: '#f5f3ff',
                                    borderRadius: '50%',
                                    mx: 'auto',
                                    mb: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#7c3aed'
                                }}
                            >
                                <PersonOutlineIcon fontSize="large" />
                            </Box>
                            <Typography fontWeight={900} fontSize={{ xs: 24, md: 30 }}>
                                Create your account
                            </Typography>
                            <Typography mt={1} color="#6b7280" fontSize={{ xs: 14, md: 15 }}>
                                Join India’s fastest growing career community
                            </Typography>
                        </Box>

                        {/* Form */}
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                />

                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                />

                                {/* Gender */}
                                <Box>
                                    <FormLabel error={!!errors.gender} sx={{ fontSize: 14, fontWeight: 500, mb: 1, display: 'block' }}>
                                        Gender
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        sx={{ gap: 2 }}
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio size="small" />}
                                            label={<Typography fontSize={15}>Male</Typography>}
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio size="small" />}
                                            label={<Typography fontSize={15}>Female</Typography>}
                                        />
                                        <FormControlLabel
                                            value="other"
                                            control={<Radio size="small" />}
                                            label={<Typography fontSize={15}>Other</Typography>}
                                        />
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
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                />

                                {/* Password */}
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {/* Confirm Password */}
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() =>
                                                        setShowConfirmPassword(!showConfirmPassword)
                                                    }
                                                    edge="end"
                                                >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    disabled={loading}
                                    sx={{
                                        mt: 2,
                                        background: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
                                        color: '#fff',
                                        py: 1.6,
                                        borderRadius: '99px',
                                        fontWeight: 800,
                                        fontSize: 16,
                                        textTransform: 'none',
                                        boxShadow: '0 10px 20px -5px rgba(124,58,237,0.3)',
                                        '&:hover': {
                                            boxShadow: '0 15px 25px -5px rgba(124,58,237,0.4)',
                                        }
                                    }}
                                >
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </Button>
                            </Stack>
                        </Box>

                        <Typography fontSize={13} color="#6b7280" textAlign="center">
                            By signing up, you agree to our <Link href="#" underline="hover" color="primary">Terms</Link> & <Link href="#" underline="hover" color="primary">Privacy Policy</Link>
                        </Typography>
                    </Stack>
                </Paper>
            </Container>

            {/* Pure CSS animation */}
            <style jsx global>{`
        .register-card {
          animation: fadeUp 0.6s ease-out both;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </GlobalWrapper>
    );
}

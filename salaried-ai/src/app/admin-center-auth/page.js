"use client";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  LockOutlined as LockIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/components/ReduxToolkit/Slices/AuthSlice";
import { openSnackbar } from "@/components/ReduxToolkit/Slices/snackbarSlice";
import axios from "axios";
import { baseUrl } from "@/components/baseUrl/BaseUrl";

export default function AdminLoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // If already logged in, redirect to admin
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, formData);
      const { token, user } = response.data.data;

      dispatch(login({ token, user }));
      dispatch(
        openSnackbar({
          message: "Login Successful! Welcome back.",
          severity: "success",
        })
      );
      router.push("/admin");
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Invalid credentials";
      dispatch(openSnackbar({ message: errorMsg, severity: "error" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F7FE",
        p: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 5,
          width: "100%",
          maxWidth: "450px",
          borderRadius: "30px",
          boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.8)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "15px",
              backgroundColor: "#4318FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              margin: "0 auto 20px",
              boxShadow: "0px 10px 20px rgba(67, 24, 255, 0.3)",
            }}
          >
            <LockIcon fontSize="large" />
          </Box>
          <Typography
            variant="h4"
            fontWeight="800"
            sx={{ color: "#1B2559", mb: 1, letterSpacing: "-1px" }}
          >
            Admin Portal
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#A3AED0", fontWeight: "600" }}
          >
            Secure Access Only
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{ color: "#1B2559", fontWeight: "700", mb: 1, ml: 1 }}
            >
              Email Address
            </Typography>
            <TextField
              fullWidth
              name="email"
              placeholder="admin@salaried.ai"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "white",
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="body2"
              sx={{ color: "#1B2559", fontWeight: "700", mb: 1, ml: 1 }}
            >
              Password
            </Typography>
            <TextField
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Min. 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "white",
                },
              }}
            />
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              py: 1.8,
              borderRadius: "15px",
              backgroundColor: "#4318FF",
              boxShadow: "0px 10px 20px rgba(67, 24, 255, 0.2)",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "700",
              "&:hover": {
                backgroundColor: "#3311CC",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign In to Admin Panel"
            )}
          </Button>
        </form>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: "#A3AED0",
                "&:hover": { color: "#4318FF" },
                transition: "0.2s",
              }}
            >
              <ArrowBackIcon sx={{ fontSize: "1rem" }} />
              <Typography variant="body2" fontWeight="700">
                Back to Main Site
              </Typography>
            </Box>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

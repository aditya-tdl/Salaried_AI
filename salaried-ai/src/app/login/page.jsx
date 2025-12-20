"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GlobalWrapper from "@/components/layouts/GlobalWrapper";
import ClientOnly from "../signup/ClientOnly";
import useApi from "@/components/Hooks/useApi";
import { login } from "@/components/ReduxToolkit/Slices/AuthSlice";
import { baseUrl } from "@/components/baseUrl/BaseUrl";
import axios from "axios";


export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading: globalLoading } = useSelector((state) => state.auth);
  const api = useApi();

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
    console.log("login page")
    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        username: formData.email,
        password: formData.password,
      });
      console.log("API response:", response.data);

      if (response.data.status) {
        dispatch(
          login({
            user: {
              name: `${response.data.data.first_name} ${response.data.data.last_name}`,
              email: response.data.data.email,
              role: response.data.data.role_name,
              id: response.data.data.user_id,
            },
            token: response.data.token,
          })
        );
        dispatch(hideLoader());
        dispatch(
          showSnackbar({
            severity: "success",
            message: "Logged in successfully",
          })
        );

        setFormData({ email: "", password: "" });
        router.push("/profile");
      } else {
        setApiError("Invalid login credentials.");

        // dispatch(hideLoader());
      }
    } catch (error) {
      dispatch(hideLoader());
      console.error("Login error:", error);
      setApiError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <GlobalWrapper>
      <ClientOnly>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "linear-gradient(145deg, #ffffff, #f5f7fa)",
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              padding: 4,
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              position: "relative",
            }}
          >
            {globalLoading && (
              <CircularProgress
                size={40}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              />
            )}
            <Box sx={{ opacity: globalLoading ? 0.5 : 1 }}>
              <Typography variant="h4" gutterBottom>
                Welcome Back
              </Typography>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{
                  mb: 2,
                  py: 1.5,
                  borderColor: "#e0e0e0",
                  color: "#333",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#1976d2",
                    backgroundColor: "#f0f4ff",
                  },
                }}
              >
                Sign in with Google
              </Button>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<AppleIcon />}
                sx={{
                  mb: 2,
                  py: 1.5,
                  borderColor: "#e0e0e0",
                  color: "#333",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#000",
                    backgroundColor: "#f0f4ff",
                  },
                }}
              >
                Sign in with Apple
              </Button>

              <Box sx={{ my: 2, color: "#666", fontSize: "0.9rem" }}>or</Box>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                />
                <TextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password || apiError}
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
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={globalLoading}
                  sx={{
                    py: 1.5,
                    backgroundColor: "#000",
                    color: "#fff",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  {globalLoading ? <CircularProgress size={24} /> : "Login"}
                </Button>
              </Box>

              <Typography variant="body2" sx={{ mt: 2, color: "#757575" }}>
                <Link href="/forgot-password" underline="hover">
                  Forgot password?
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </ClientOnly>
    </GlobalWrapper>
  );
}

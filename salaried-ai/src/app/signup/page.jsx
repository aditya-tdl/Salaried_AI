"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import GlobalWrapper from "@/components/layouts/GlobalWrapper";
import ClientOnly from "@/app/signup/ClientOnly";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  Fade,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
// import { baseUrl } from "@/components/Url/BaseUrl";
import { baseUrl } from "../../components/baseUrl/BaseUrl";
import { openSnackbar } from "../../components/ReduxToolkit/Slices/snackbarSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { role } = useSelector((state) => state.auth);

  // If role comes from query, set it in Redux
  // useEffect(() => {
  //   const roleFromQuery = searchParams.get("role");
  //   if (roleFromQuery) dispatch(setRole(roleFromQuery));
  // }, [searchParams, dispatch]);
  console.log(role);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    password: "",
    dob: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.mobile_no) newErrors.mobile_no = "Mobile number is required";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSignup = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role_name: role,
        }),
      });
      const data = await res.json();
      console.log("Signup Response:", data);

      if (res.ok) {
        // Success case: Dispatch success snackbar and clear form
        dispatch(
          openSnackbar({
            severity: "success",
            message: "Signed up successfully",
          })
        );
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          mobile_no: "",
          password: "",
          dob: "",
          gender: "",
        });
      } else {

        dispatch(
          openSnackbar({
            severity: "error",
            message: data.message || "Signup failed",
          })
        );
      }
    } catch (error) {
      dispatch(
        openSnackbar({
          severity: "error",
          message: "Something went wrong!",
        })
      );
      console.error("Signup Error:", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalWrapper>
      <ClientOnly>
        {role === "creator" ? (
          <Fade in timeout={600}>
            <Box
              sx={{
                maxWidth: 750,
                mx: "auto",
                mt: 8,
                p: 4,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f5f7fa)",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: "0px 6px 24px rgba(0,0,0,0.15)" },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="700"
                align="center"
                gutterBottom
                sx={{ color: "#1a1a1a", mb: 3 }}
              >
                Create Your {role ?? ""} Account
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
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#1976d2",
                    backgroundColor: "#f0f4ff",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Sign up with Google
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
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#000",
                    backgroundColor: "#f0f4ff",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Sign up with Apple
              </Button>

              <Divider sx={{ my: 3, color: "#666", fontSize: "0.9rem" }}>
                OR
              </Divider>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  mt: 4,
                }}
              >
                <Box
                  // component="form"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1.5,
                  }}
                >
                  <TextField
                    name="first_name"
                    label="First Name"
                    fullWidth
                    onChange={handleChange}
                    value={formData.first_name}
                    error={!!errors.first_name}
                    helperText={errors.first_name}
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "#f0f4ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                  <TextField
                    name="last_name"
                    label="Last Name"
                    fullWidth
                    value={formData.last_name}
                    onChange={handleChange}
                    error={!!errors.last_name}
                    helperText={errors.last_name}
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "#f0f4ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>

                <Box
                  // component="form"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1.5,
                  }}
                >
                  <TextField
                    name="email"
                    label="Email"
                    fullWidth

                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "#f0f4ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                  <TextField
                    name="mobile_no"
                    label="Mobile Number"
                    fullWidth
                    value={formData.mobile_no}
                    onChange={handleChange}
                    error={!!errors.mobile_no}
                    helperText={errors.mobile_no}
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "#f0f4ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>
                <Box
                  // component="form"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 1.5,
                  }}
                >
                  <TextField
                    name="gender"
                    label="Gender"
                    select
                    fullWidth

                    value={formData.gender}
                    onChange={handleChange}
                    error={!!errors.gender}
                    helperText={errors.gender}
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "#f0f4ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>

                  <TextField
                    name="dob"
                    label="Date of Birth"
                    type="date"
                    value={formData.dob}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    onChange={handleChange}
                    error={!!errors.dob}
                    helperText={errors.dob}
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "#f0f4ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>

                <TextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": { borderRadius: "8px" },
                    "&:hover": {
                      borderColor: "#000",
                      backgroundColor: "#f0f4ff",
                    },
                    transition: "all 0.3s ease",
                  }}
                />

                <Button
                  variant="contained"
                  onClick={handleSignup}
                  disabled={loading}
                  sx={{
                    py: 1.5,
                    background: "linear-gradient(90deg, #1976d2, #42a5f5)",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    borderRadius: "8px",
                    "&:hover": {
                      background: "linear-gradient(90deg, #1565c0, #2196f3)",
                    },
                    "&:disabled": { background: "#bdbdbd" },
                    transition: "all 0.3s ease",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="blue" />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </Box>
            </Box>
          </Fade>
        ) : (
          <Fade in timeout={600}>
            <Box
              sx={{
                maxWidth: 750,
                mx: "auto",
                mt: 8,
                p: 4,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff, #f5f7fa)",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: "0px 6px 24px rgba(0,0,0,0.15)" },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="700"
                align="center"
                gutterBottom
                sx={{ color: "#1a1a1a", mb: 3 }}
              >
                Create Your Brand Account
              </Typography>

              {/* brand signup form code here */}
            </Box>
          </Fade>
        )}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 16 }}>
            Already have an account?{" "}
            <Button
              variant="text"
              onClick={() => router.push("/login")}
              sx={{ textTransform: "none", color: "black" }}
            >
              Login
            </Button>
          </Typography>
        </Box>
      </ClientOnly>
    </GlobalWrapper>
  );
}

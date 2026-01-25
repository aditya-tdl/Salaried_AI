"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Stepper,
  Step,
  StepLabel,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  InputAdornment,
  StepConnector,
  stepConnectorClasses,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Add as AddIcon,
  CalendarMonth as CalendarIcon,
  AccessTime as TimeIcon,
  VideoCameraFront as VideoIcon,
  Close as CloseIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  Image as ImageIcon,
  Settings as SettingsIcon,
  GroupAdd as GroupAddIcon,
  Edit as EditIcon,
  CurrencyRupee,
} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { openSnackbar } from "@/components/ReduxToolkit/Slices/snackbarSlice";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  hideLoader,
  showLoader,
} from "@/components/ReduxToolkit/Slices/loaderSlice";
import axios from "axios";
import { baseUrl } from "@/components/baseUrl/BaseUrl";
import DeleteModal from "@/components/DeleteModal/DeleteModal";

const formatDate = (date) => dayjs(date).format("DD MMM YYYY");

const formatTime = (time) => dayjs(time).format("hh:mm A");

// Custom Styled Stepper Connector
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(67, 24, 255) 0%,rgb(51, 17, 204) 50%,rgb(35, 11, 153) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(67, 24, 255) 0%,rgb(51, 17, 204) 50%,rgb(35, 11, 153) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

// Custom Step Icon Root Style
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg,rgb(67, 24, 255) 0%,rgb(51, 17, 204) 50%,rgb(35, 11, 153) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg,rgb(67, 24, 255) 0%,rgb(51, 17, 204) 50%,rgb(35, 11, 153) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;

  // Distinct colors per step when active
  const icons = {
    1: <EditIcon />, // Step 1: Basics
    2: <CalendarIcon />, // Step 2: Schedule
    3: <GroupAddIcon />, // Step 3: Registration
  };

  // Custom background per step if needed, or unified theme
  const bgColors = {
    1: "linear-gradient( 136deg, #4318FF 0%, #7B61FF 100%)", // Blue
    2: "linear-gradient( 136deg, #FFB547 0%, #FFCA80 100%)", // Orange
    3: "linear-gradient( 136deg, #05CD99 0%, #5BE1C1 100%)", // Green
  };

  const getBgColor = () => {
    if (active || completed) {
      return bgColors[icon];
    }
    return "#ccc"; // Inactive
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      sx={{ backgroundImage: getBgColor() }}
    >
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["Basic Details", "Schedule & Platform", "Registration"];

export default function WebinarsPage() {
  const [open, setOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    agenda: "",
    speakers: "",
    date: "",
    time: "",
    duration: 90,
    platform: "Zoom",
    link: "",
    type: "Free",
    price: "",
    capacity: 100,
  });
  const [webinars, setWebinars] = useState([]);
  const handleOpen = () => setOpen(true);
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    buttonText: "",
    data: {
      id: null,
    },
  });
  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
    setIsEditing(false);
    setEditId(null);
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("value", value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoader());
    try {
      const url = isEditing
        ? `${baseUrl}/webinars/${editId}`
        : `${baseUrl}/webinars/create-webinar`;

      const method = isEditing ? "put" : "post";

      const response = await axios({
        method,
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...formData,
          imageUrl: preview,
          imageKey: imageFile ? imageFile.name : null,
        },
      });

      if (response.data.success) {
        dispatch(hideLoader());
        dispatch(
          openSnackbar({
            message: isEditing
              ? "Webinar updated successfully!"
              : "Webinar created successfully!",
            severity: "success",
          }),
        );
        setFormData({
          title: "",
          agenda: "",
          speakers: "",
          date: "",
          time: "",
          duration: 90,
          platform: "Zoom",
          link: "",
          type: "Free",
          price: "",
          capacity: 100,
        });
        setImageFile(null);
        setPreview("");
        handleClose();
        getAllWebinars();
      }
    } catch (error) {
      dispatch(hideLoader());
      console.error("Error saving webinar:", error);
      dispatch(
        openSnackbar({
          message: `Failed to ${isEditing ? "update" : "create"} webinar. Please try again.`,
          severity: "error",
        }),
      );
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // ✅ Validation (only images)
    if (!file.type.startsWith("image/")) {
      dispatch(
        openSnackbar({
          message: "Please select a valid image file.",
          severity: "error",
        }),
      );
      e.target.value = "";
      return;
    }
    // ✅ Optional: limit size (example: 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      dispatch(
        openSnackbar({
          message: "Image size should be less than 5MB.",
          severity: "error",
        }),
      );
      e.target.value = "";
      return;
    }
    setImageFile(file);
    //  ✅ preview
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
    e.target.value = "";
  };
  const handleRemove = () => {
    setImageFile(null);
    setPreview("");
  };
  const handleTimeChange = (value) => {
    if (!value) {
      setFormData((prev) => ({ ...prev, time: "" }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      time: dayjs(value).format("hh:mm A"), // ✅ AM/PM format
    }));
  };
  const getAllWebinars = async () => {
    dispatch(showLoader());
    try {
      const response = await axios.get(`${baseUrl}/webinars`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      if (response.data.success) {
        dispatch(hideLoader());
        setWebinars(response?.data?.data || []);
      }
    } catch (error) {
      dispatch(hideLoader());
      console.error("Error fetching webinars:", error);
    }
  };
  useEffect(() => {
    getAllWebinars();
  }, []);
  const handleEdit = (webinar) => {
    setOpen(true);
    setIsEditing(true);
    setEditId(webinar.id);

    setFormData({
      title: webinar.title,
      agenda: webinar.agenda,
      speakers: webinar.speakers,
      date: dayjs(webinar.webinar_date).format("YYYY-MM-DD"),
      time: dayjs(webinar.webinar_time).format("hh:mm A"),
      duration: webinar.duration,
      platform: webinar.platform,
      link: webinar.link,
      type: webinar.type,
      price: webinar.price || "",
      capacity: webinar.capacity,
    });
    setPreview(webinar.image_url);
  };

  const handleDelete = async (id) => {
    console.log("Delete webinar", id);
    dispatch(showLoader());
    try {
      const response = await axios.delete(`${baseUrl}/webinars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDialog({
        open: false,
        title: "",
        buttonText: "",
        data: {
          id: null,
        },
      });
      dispatch(hideLoader());
      if (response.data.success) {
        dispatch(
          openSnackbar({
            message: "Webinar deleted successfully!",
            severity: "success",
          }),
        );
        getAllWebinars();
      }
    } catch (error) {
      dispatch(hideLoader());
      console.log("error", error);
      dispatch(
        openSnackbar({
          message: "Failed to delete webinar. Please try again.",
          severity: "error",
        }),
      );
    }
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={2.5}>
            <Typography
              variant="h6"
              fontWeight="700"
              textAlign={"center"}
              sx={{ mb: 2, color: "#1B2559" }}
            >
              Define Your Webinar
            </Typography>
            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Webinar Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Mastering AI Agents"
                  variant="outlined"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  fullWidth
                  label="Speaker(s)"
                  name="speakers"
                  value={formData.speakers}
                  onChange={handleChange}
                  placeholder="e.g. John Doe, Jane Smith"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PeopleIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} minWidth={"lg"} md={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Agenda & Description"
                  name="agenda"
                  value={formData.agenda}
                  onChange={handleChange}
                  placeholder="Key talking points..."
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    width: "515px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={2.5} lg={2.5}>
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<ImageIcon />}
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    width: "100%",
                    height: 50,
                    borderStyle: "dashed",
                    color: "#1B2559",
                    borderColor: "#1B2559",
                  }}
                >
                  Upload Banner / Thumbnail
                  <input
                    type="file"
                    hidden
                    ref={inputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Button>
              </Grid>
            </Grid>
            {preview && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 1,
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={handleRemove}
                  size="small"
                  sx={{
                    position: "absolute",
                    transform: "translate(50px, -60px)",
                    backgroundColor: "transparent",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  <CloseIcon fontSize="10px" />
                </IconButton>
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 12,
                    border: "1px solid #ddd",
                  }}
                />
                {imageFile && (
                  <p style={{ margin: 0, fontSize: 10 }}>
                    Selected: <b>{imageFile.name}</b> (
                    {Math.round(imageFile.size / 1024)} KB)
                  </p>
                )}
              </Box>
            )}
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={2.5}>
            <Typography
              variant="h6"
              fontWeight="700"
              textAlign={"center"}
              sx={{ mb: 2, color: "#1B2559" }}
            >
              Set Schedule & Platform
            </Typography>
            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Time"
                    value={
                      formData.time ? dayjs(formData.time, "hh:mm A") : null
                    }
                    onChange={handleTimeChange}
                    ampm // ✅ AM/PM enabled
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputLabelProps: { shrink: true },
                        sx: {
                          "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Duration (mins)"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Platform</InputLabel>
                  <Select
                    name="platform"
                    value={formData.platform}
                    label="Platform"
                    onChange={handleChange}
                    sx={{ borderRadius: "12px" }}
                  >
                    <MenuItem value="Zoom">Zoom</MenuItem>
                    <MenuItem value="Google Meet">Google Meet</MenuItem>
                    <MenuItem value="Microsoft Teams">Microsoft Teams</MenuItem>
                    <MenuItem value="Airmeet">Airmeet</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                md={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  fullWidth
                  label="Meeting Link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://..."
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    width: "100%",
                    maxWidth: "515px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VideoIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={2.5}>
            <Typography
              variant="h6"
              fontWeight="700"
              textAlign={"center"}
              sx={{ mb: 2, color: "#1B2559" }}
            >
              Registration Details
            </Typography>
            <Grid
              container
              spacing={5}
              maxWidth={"lg"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Registration Type</InputLabel>
                  <Select
                    name="type"
                    value={formData.type}
                    label="Registration Type"
                    onChange={handleChange}
                    sx={{ borderRadius: "12px" }}
                  >
                    <MenuItem value="Free">Free</MenuItem>
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Invite-only">Invite-only</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Capacity Limit"
                  name="capacity"
                  onChange={(e) => {
                    const value = e.target.value;

                    // Allow only digits (and optional decimal)
                    if (/^\d*\.?\d*$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  inputProps={{
                    inputMode: "decimal", // mobile numeric keyboard
                    pattern: "[0-9]*",
                  }}
                  value={formData.capacity}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                />
              </Grid>
            </Grid>

            {formData.type === "Paid" && (
              <Grid
                container
                spacing={5}
                maxWidth={"lg"}
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Price (INR)"
                    name="price"
                    value={formData.price}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
                        setFormData((prev) => ({ ...prev, price: value }));
                      }
                    }}
                    inputProps={{
                      inputMode: "decimal",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </Stack>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="800"
          sx={{ color: "#1B2559", letterSpacing: "-0.5px" }}
        >
          Webinars
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            backgroundColor: "#4318FF",
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "700",
            px: 3,
            py: 1.2,
            boxShadow: "0px 4px 12px rgba(67, 24, 255, 0.4)",
            "&:hover": { backgroundColor: "#3311CC" },
            color: "#FFFFFF",
          }}
        >
          Create Webinar
        </Button>
      </Box>

      {/* Placeholder List */}
      {webinars.length !== 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {webinars?.map((webinar) => (
            <Grid
              item
              key={webinar.id}
              xs={12} // 1 card per row on mobile
              sm={6}
              md={4} // 3 cards per row on md+
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 360, // ✅ keeps card width consistent
                  borderRadius: "20px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                  border: "1px solid #F4F7FE",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: 160,
                    backgroundColor: "#F4F7FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative", // ✅ required for absolute icons
                  }}
                >
                  {/* Image */}
                  <img
                    src={
                      webinar.image_url?.startsWith("http")
                        ? webinar.image_url
                        : "https://cdn-icons-png.flaticon.com/512/1042/1042339.png"
                    }
                    alt={webinar.title}
                    style={{
                      width: webinar.image_url?.startsWith("http")
                        ? "100%"
                        : 60,
                      height: webinar.image_url?.startsWith("http")
                        ? "100%"
                        : 60,
                      objectFit: webinar.image_url?.startsWith("http")
                        ? "cover"
                        : "contain",
                      opacity: webinar.image_url?.startsWith("http") ? 1 : 0.6,
                    }}
                  />

                  {/* Action Buttons */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      gap: 1,
                      background: "rgba(255,255,255,0.8)",
                      backdropFilter: "blur(6px)",
                      borderRadius: "12px",
                      p: "2px",
                    }}
                  >
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(webinar)}
                        sx={{ color: "#1B2559" }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        onClick={() =>
                          setDialog({
                            open: true,
                            title:
                              "Are you sure you want to delete this webinar?",
                            buttonText: "Delete",
                            data: webinar,
                          })
                        }
                        sx={{ color: "#FF4D4F" }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  {/* Chips */}
                  <Box
                    sx={{ display: "flex", gap: 1, mb: 1, flexWrap: "wrap" }}
                  >
                    <Chip
                      label={webinar.platform}
                      size="small"
                      sx={{
                        backgroundColor: "#E6F7FF",
                        color: "#0095FF",
                        fontWeight: 700,
                      }}
                    />

                    <Chip
                      label={webinar.type}
                      size="small"
                      sx={{
                        backgroundColor:
                          webinar.type === "Paid" ? "#FFE2E5" : "#E6FFFA",
                        color: webinar.type === "Paid" ? "#FF4D4F" : "#00B69B",
                        fontWeight: 700,
                      }}
                    />

                    {webinar.type === "Paid" && (
                      <Chip
                        label={`₹ ${webinar.price}`}
                        size="small"
                        sx={{
                          backgroundColor: "#FFF7E6",
                          color: "#FA8C16",
                          fontWeight: 700,
                        }}
                      />
                    )}
                  </Box>

                  {/* Title (wrapped, not stretching card) */}
                  <Typography
                    variant="h6"
                    fontWeight="700"
                    sx={{
                      color: "#1B2559",
                      mb: 1,
                      wordBreak: "break-word",
                      lineHeight: 1.3,
                    }}
                  >
                    {webinar.title}
                  </Typography>

                  {/* Speaker */}
                  <Typography variant="body2" sx={{ color: "#1B2559", mb: 2 }}>
                    Speaker: <strong>{webinar.speakers}</strong>
                  </Typography>

                  {/* Date & Time */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#A3AED0",
                      }}
                    >
                      <CalendarIcon fontSize="small" />
                      <Typography variant="body2" fontWeight="500">
                        {formatDate(webinar.webinar_date)}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#A3AED0",
                      }}
                    >
                      <TimeIcon fontSize="small" />
                      <Typography variant="body2" fontWeight="500">
                        {formatTime(webinar.webinar_time)} · {webinar.duration}{" "}
                        mins
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          sx={{ color: "#A3AED0", mt: 6, textAlign: "center" }}
        >
          No webinars created yet.
        </Typography>
      )}

      {/* Creation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: "24px", p: 2 } }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Typography variant="h5" fontWeight="800" sx={{ color: "#1B2559" }}>
            Create New Webinar
          </Typography>
          <IconButton onClick={handleClose} sx={{ color: "#A3AED0" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
            sx={{ mb: 4, mt: 1 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderStepContent(activeStep)}
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: "space-between", pt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="text"
            sx={{
              color: "#A3AED0",
              fontWeight: "700",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
            sx={{
              backgroundColor: "#4318FF",
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: "700",
              px: 5,
              py: 1.2,
              boxShadow: "0px 4px 12px rgba(67, 24, 255, 0.4)",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#3311CC" },
            }}
          >
            {activeStep === steps.length - 1 ? isEditing ? "Update Webinar" : "Create Webinar" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
      {dialog.open && (
        <DeleteModal
          open={dialog.open}
          dialog={dialog}
          handleClose={() => setDialog({ ...dialog, open: false })}
          deleteFunc={() => handleDelete(dialog.data.id)}
        />
      )}
    </Box>
  );
}

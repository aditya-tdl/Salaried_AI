"use client";
import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  CircularProgress,
} from "@mui/material";
import {
  TrendingUp,
  People,
  BookmarkBorder,
  CurrencyRupee,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "@/components/ReduxToolkit/Slices/adminSlice";

const StatCard = ({ title, value, icon, color }) => (
  <Paper
    sx={{
      p: 3,
      display: "flex",
      alignItems: "center",
      gap: 2.5,
      borderRadius: "20px",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
      border: "1px solid #F1F1F1",
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    }}
  >
    <Box
      sx={{
        p: 2,
        borderRadius: "50%",
        backgroundColor: "#F4F7FE",
        color: color,
        display: "flex",
        fontSize: "1.8rem",
      }}
    >
      {React.cloneElement(icon, { sx: { fontSize: "inherit" } })}
    </Box>
    <Box>
      <Typography
        variant="body2"
        sx={{ color: "#A3AED0", fontWeight: "600", mb: 0.5 }}
      >
        {title}
      </Typography>
      <Typography variant="h4" fontWeight="800" sx={{ color: "#1B2559" }}>
        {value}
      </Typography>
    </Box>
  </Paper>
);

const UserDashboard = ({ user }) => (
  <Box sx={{ py: 2 }}>
    <Typography
      variant="h3"
      fontWeight="800"
      sx={{ mb: 1, color: "#1B2559", letterSpacing: "-1px" }}
    >
      Welcome back, {user?.name || "User"}!
    </Typography>
    <Typography variant="body1" sx={{ color: "#A3AED0", mb: 4 }}>
      Here is an overview of your account.
    </Typography>

    <Grid container spacing={3}>
      {/* Add user-specific widgets here */}
      <Grid item xs={12} md={6}>
        <Paper
          sx={{
            p: 4,
            borderRadius: "20px",
            border: "1px solid #F1F1F1",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="700"
            sx={{ mb: 2, color: "#1B2559" }}
          >
            My Activity
          </Typography>
          <Typography color="text.secondary">No recent activity.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const RecentUsersTable = ({ users }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 400 }} aria-label="recent users table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#A3AED0",
                fontWeight: "600",
                borderBottom: "1px solid #F1F1F1",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                color: "#A3AED0",
                fontWeight: "600",
                borderBottom: "1px solid #F1F1F1",
              }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                color: "#A3AED0",
                fontWeight: "600",
                borderBottom: "1px solid #F1F1F1",
              }}
            >
              Plan
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.slice(0, 5).map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderBottom: "1px solid #F1F1F1",
                  fontWeight: "600",
                  color: "#1B2559",
                }}
              >
                {user.name}
              </TableCell>
              <TableCell
                sx={{ borderBottom: "1px solid #F1F1F1", color: "#1B2559" }}
              >
                {user.email}
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F1F1F1" }}>
                <Chip
                  label={user.subscription?.status ?? "No Plan"}
                  size="small"
                  sx={{
                    backgroundColor:
                      user.subscription?.status === "CREATED"
                        ? "#E6F7FF"
                        : "#F4F7FE",
                    color:
                      user.subscription?.status === "CREATED"
                        ? "#05c939ff"
                        : "#A3AED0",
                    fontWeight: "600",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
          {users.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={3}
                align="center"
                sx={{ py: 3, color: "#A3AED0" }}
              >
                No recent users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function Dashboard() {
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);
  const { users, pagination, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.role === "ADMIN") {
      dispatch(fetchAllUsers({ page: 1, limit: 10 }));
    }
  }, [dispatch, user?.role]);

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    ); // Or redirect
  }

  if (user?.role !== "ADMIN") {
    return <UserDashboard user={user} />;
  }
  const getCreatedRevenue = (users, price = 49) => {
    const createdCount = users.reduce((count, user) => {
      return user?.subscription?.status === "CREATED" ? count + 1 : count;
    }, 0);

    const totalRevenue = createdCount * price;

    const formatToK = (value) => {
      if (value >= 1000) return `${(value / 1000).toFixed(1)}K`; // 1500 => 1.5K
      return `${value}`;
    };

    return {
      createdCount,
      totalRevenue, // number
      totalRevenueFormatted: formatToK(totalRevenue), // "1.2K"
    };
  };

  const result = getCreatedRevenue(users);
  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="caption"
          sx={{
            color: "#A3AED0",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Overview
        </Typography>
        <Typography
          variant="h3"
          fontWeight="800"
          sx={{ color: "#1B2559", letterSpacing: "-1px" }}
        >
          Admin Dashboard
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value={loading ? "..." : pagination?.total || 0}
            icon={<People />}
            color="#4318FF"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value={result.totalRevenue}
            icon={<CurrencyRupee />}
            color="#05CD99"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Webinars"
            value="12"
            icon={<BookmarkBorder />}
            color="#FFB547"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Conversion Rate"
            value="15.5%"
            icon={<TrendingUp />}
            color="#EE5D50"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 3,
              borderRadius: "20px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
              border: "1px solid #F1F1F1",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{ color: "#1B2559" }}
              >
                Newest Members
              </Typography>
            </Box>

            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                <CircularProgress size={24} />
              </Box>
            ) : (
              <RecentUsersTable users={users} />
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              minHeight: "450px",
              borderRadius: "20px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
              border: "1px solid #F1F1F1",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h6" fontWeight="700" sx={{ color: "#1B2559" }}>
              Recent Activity
            </Typography>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F4F7FE",
                borderRadius: "16px",
                border: "1px dashed #A3AED0",
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                fontWeight="500"
              >
                Activities Feed Placeholder
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

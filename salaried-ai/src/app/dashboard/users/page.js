"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  InputAdornment,
  CircularProgress,
  Avatar,
  Chip,
} from "@mui/material";
import {
  Search as SearchIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "@/components/ReduxToolkit/Slices/adminSlice";
import { Visibility, Close } from "@mui/icons-material";
import ModalComponent from "../../../components/ModalComponent/ModalComponent";
import { baseUrl } from "../../../components/baseUrl/BaseUrl";
import axios from "axios";
import { IconButton, Button } from "@mui/material";

/* ===========================
   Debounce Hook
=========================== */

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

/* ===========================
   Component
=========================== */

export default function UsersPage() {
  const dispatch = useDispatch();
  const { users, pagination, loading } = useSelector((state) => state.admin);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Subscription Modal State
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const handleViewSubscription = async (userId) => {
    setSubscriptionLoading(true);
    setSubscriptionModalOpen(true);
    setSelectedSubscription(null);

    try {
      const response = await axios.get(
        `${baseUrl}/users/subscription/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setSelectedSubscription(response.data.data);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      setSelectedSubscription(null);
    } finally {
      setSubscriptionLoading(false);
    }
  };
  console.log("selectedSubscription", selectedSubscription);
  const handleCloseModal = () => {
    setSubscriptionModalOpen(false);
    setSelectedSubscription(null);
  };

  const loadUsers = useCallback(() => {
    dispatch(
      fetchAllUsers({
        page: page + 1,
        limit: rowsPerPage,
        search: debouncedSearch,
      }),
    );
  }, [dispatch, page, rowsPerPage, debouncedSearch]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h4" fontWeight={800} color="#1B2559">
          User Management
        </Typography>

        <TextField
          size="small"
          placeholder="Search name, email or mobile"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: { xs: "100%", sm: 300 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#A3AED0" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 3, overflow: "hidden" }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#F4F7FE" }}>
            <TableRow>
              <TableCell>USER</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>MOBILE</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>PLAN</TableCell>
              <TableCell>JOINED</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 && !loading && (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                  No users found
                </TableCell>
              </TableRow>
            )}

            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar>{user.name?.[0] || <PersonIcon />}</Avatar>
                    {user.name}
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobile || "—"}</TableCell>
                <TableCell>
                  <Chip label={user.gender || "N/A"} size="small" />
                </TableCell>
                <TableCell>
                  <Chip
                    label={user?.subscription?.status || "NO PLAN"}
                    size="small"
                    color={
                      user?.subscription?.status === "active" ||
                      user?.subscription?.status === "ACTIVE"
                        ? "success"
                        : "default"
                    }
                    variant={user?.subscription ? "filled" : "outlined"}
                  />
                </TableCell>
                <TableCell>
                  {new Date(user.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleViewSubscription(user.id)}
                    color="primary"
                  >
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={pagination.total}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>

      {/* Subscription Modal */}
      <ModalComponent
        open={subscriptionModalOpen}
        handleClose={handleCloseModal}
      >
        <Box sx={{ p: 4, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              User Subscription Details
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <Close />
            </IconButton>
          </Box>

          {subscriptionLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
              <CircularProgress />
            </Box>
          ) : selectedSubscription ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
                <Typography variant="subtitle2" color="textSecondary">
                  Status
                </Typography>
                <Chip
                  label={selectedSubscription.status}
                  color={
                    selectedSubscription.status === "active" ||
                    selectedSubscription.status === "ACTIVE"
                      ? "success"
                      : "warning"
                  }
                  sx={{ mt: 0.5 }}
                />
              </Paper>

              <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
                <Typography variant="subtitle2" color="textSecondary">
                  Subscription ID
                </Typography>
                <Typography variant="body1">
                  {selectedSubscription.razorpay_subscription_id}
                </Typography>
              </Paper>

              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Start Date
                  </Typography>
                  <Typography variant="body1">
                    {selectedSubscription.start_at
                      ? new Date(
                          selectedSubscription.start_at,
                        ).toLocaleDateString()
                      : "N/A"}
                  </Typography>
                </Paper>
                <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    End Date
                  </Typography>
                  <Typography variant="body1">
                    {selectedSubscription.end_at
                      ? new Date(
                          selectedSubscription.end_at,
                        ).toLocaleDateString()
                      : "N/A"}
                  </Typography>
                </Paper>
              </Box>
              <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
                <Typography variant="subtitle2" color="textSecondary">
                  Next Charge Date
                </Typography>
                <Typography variant="body1">
                  {selectedSubscription.next_charge_at
                    ? new Date(
                        selectedSubscription.next_charge_at,
                      ).toLocaleDateString()
                    : "N/A"}
                </Typography>
              </Paper>
            </Box>
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography color="textSecondary">
                No active subscription found for this user.
              </Typography>
            </Box>
          )}
        </Box>
      </ModalComponent>
    </Box>
  );
}

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

export default function UsersPage() {
    const dispatch = useDispatch();
    const { users, pagination, loading, error } = useSelector((state) => state.admin);

    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const loadUsers = useCallback(() => {
        dispatch(fetchAllUsers({
            page: page + 1,
            limit: rowsPerPage,
            search: searchTerm
        }));
    }, [dispatch, page, rowsPerPage, searchTerm]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    const handleChangePage = (event, newPage) => {
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
            <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                <Typography variant="h4" fontWeight="800" sx={{ color: "#1B2559", letterSpacing: "-1px" }}>
                    User Management
                </Typography>
                <TextField
                    size="small"
                    placeholder="Search name, email, or mobile..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{
                        width: { xs: "100%", sm: "300px" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            backgroundColor: "white",
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#A3AED0" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <TableContainer component={Paper} sx={{ borderRadius: "20px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)", border: "1px solid #F1F1F1", overflow: "hidden" }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: "#F4F7FE" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "700", color: "#A3AED0" }}>USER</TableCell>
                            <TableCell sx={{ fontWeight: "700", color: "#A3AED0" }}>EMAIL</TableCell>
                            <TableCell sx={{ fontWeight: "700", color: "#A3AED0" }}>MOBILE</TableCell>
                            <TableCell sx={{ fontWeight: "700", color: "#A3AED0" }}>GENDER</TableCell>
                            <TableCell sx={{ fontWeight: "700", color: "#A3AED0" }}>JOINED DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading && users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} padding="none">
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 8 }}>
                                        <CircularProgress size={40} thickness={4} sx={{ color: "#4318FF" }} />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ) : users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 8 }}>
                                    <Typography variant="body1" fontWeight="600" color="text.secondary">
                                        No users found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((row) => (
                                <TableRow key={row.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                            <Avatar sx={{ width: 32, height: 32, backgroundColor: "#F4F7FE", color: "#4318FF", fontSize: "0.85rem", fontWeight: "700" }}>
                                                {row.name?.charAt(0).toUpperCase() || <PersonIcon fontSize="small" />}
                                            </Avatar>
                                            <Typography variant="body2" fontWeight="700" color="#1B2559">
                                                {row.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ color: "#1B2559", fontWeight: "600", fontSize: "0.85rem" }}>{row.email}</TableCell>
                                    <TableCell sx={{ color: "#1B2559", fontWeight: "600", fontSize: "0.85rem" }}>{row.mobile || "N/A"}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.gender || "Not Set"}
                                            size="small"
                                            sx={{
                                                fontWeight: "700",
                                                fontSize: "0.75rem",
                                                backgroundColor: row.gender?.toLowerCase() === "male" ? "#E3F2FD" : row.gender?.toLowerCase() === "female" ? "#FCE4EC" : "#F4F7FE",
                                                color: row.gender?.toLowerCase() === "male" ? "#1976D2" : row.gender?.toLowerCase() === "female" ? "#C2185B" : "#A3AED0",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ color: "#A3AED0", fontWeight: "600", fontSize: "0.85rem" }}>
                                        {new Date(row.createdAt).toLocaleDateString()}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={pagination.total}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{
                        borderTop: "1px solid #F1F1F1",
                        "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
                            color: "#A3AED0",
                            fontWeight: "600",
                        }
                    }}
                />
            </TableContainer>
        </Box>
    );
}

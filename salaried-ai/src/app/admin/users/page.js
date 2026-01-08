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
import { Search as SearchIcon, Person as PersonIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "@/components/ReduxToolkit/Slices/adminSlice";

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
    const { users, pagination, loading } = useSelector(
        (state) => state.admin
    );

    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearch = useDebounce(searchTerm);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const loadUsers = useCallback(() => {
        dispatch(
            fetchAllUsers({
                page: page + 1,
                limit: rowsPerPage,
                search: debouncedSearch,
            })
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
                            <TableCell>JOINED</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length === 0 && !loading && (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                                    No users found
                                </TableCell>
                            </TableRow>
                        )}

                        {users.map((user) => (
                            <TableRow key={user.id} hover>
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Avatar>
                                            {user.name?.[0] || <PersonIcon />}
                                        </Avatar>
                                        {user.name}
                                    </Box>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.mobile || "—"}</TableCell>
                                <TableCell>
                                    <Chip label={user.gender || "N/A"} size="small" />
                                </TableCell>
                                <TableCell>
                                    {new Date(user.created_at).toLocaleDateString()}
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
        </Box>
    );
}

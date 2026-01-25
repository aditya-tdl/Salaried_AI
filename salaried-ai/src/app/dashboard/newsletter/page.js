"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function NewsletterPage() {
    return (
        <Box>
            <Typography variant="h4" fontWeight="700" sx={{ mb: 4 }}>
                Newsletter Management
            </Typography>
            <Paper sx={{ p: 4, textAlign: "center", borderRadius: "16px" }}>
                <Typography variant="h6" color="text.secondary">
                    Newsletter Subscribers Placeholder
                </Typography>
            </Paper>
        </Box>
    );
}

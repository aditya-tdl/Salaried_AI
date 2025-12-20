"use client";

import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

const images = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
];

export default function EventsCarousel() {
    const [index, setIndex] = useState(2);

    const next = () =>
        setIndex((prev) => (prev + 1) % images.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length);

    /* Auto rotation */
    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
            {/* Header */}
            <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 1 }}
            >
                Events & Workshops
            </Typography>

            <Typography sx={{ color: "#666", mb: 6, maxWidth: 520, mx: "auto" }}>
                Grow your network with exceptional individuals and have fun with
                finance and careers at our pan India meet-ups.
            </Typography>

            {/* Carousel Wrapper */}
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: "100%",
                }}
            >
                {/* Slides */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: { xs: 2, md: 4 },
                        height: { xs: 320, md: 420 },
                    }}
                >
                    {images.map((img, i) => {
                        const offset = i - index;

                        if (Math.abs(offset) > 2) return null;

                        return (
                            <Box
                                key={i}
                                sx={{
                                    width: { xs: 180, md: 260 },
                                    height: "100%",
                                    transform: `
                    translateX(${offset * 40}px)
                    scale(${offset === 0 ? 1 : 0.9})
                    rotate(${offset === -1 ? "-6deg" : offset === 1 ? "6deg" : "0deg"})
                  `,
                                    transition: "all 0.6s ease",
                                    zIndex: offset === 0 ? 2 : 1,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={img}
                                    alt="event"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: 2,
                                    }}
                                />
                            </Box>
                        );
                    })}
                </Box>

                {/* Controls */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mt: 4,
                    }}
                >
                    <IconButton onClick={prev}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton onClick={next}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

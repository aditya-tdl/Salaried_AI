"use client";

import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";



export default function TestimonialBanner() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const avatars = [
        // LEFT SIDE
        { src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe", left: isMobile ? "1%" : "18%", top: isMobile ? "16%" : "24%" },
        { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", left: isMobile ? "1%" : "18%", top: isMobile ? "29%" : "42%" },

        { src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12", left: isMobile ? "12%" : "24.5%", top: isMobile ? "10%" : "18%" },
        { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", left: isMobile ? "12%" : "24.5%", top: isMobile ? "23%" : "36%" },

        { src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c", left: isMobile ? "22.8%" : "31%", top: isMobile ? "17%" : "24%" },

        // CENTER TOP (single row)
        { src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", left: isMobile ? "28%" : "37.7%", top: isMobile ? "4%" : "11%" },
        { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9", left: isMobile ? "39%" : "44.5%", top: isMobile ? "8%" : "16%" },
        { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", left: isMobile ? "50.5%" : "51%", top: isMobile ? "8%" : "16%" },
        { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", left: isMobile ? "61.5%" : "57.5%", top: isMobile ? "4%" : "11%" },
        { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", left: isMobile ? "67%" : "64.5%", top: isMobile ? "17%" : "24%" },

        // RIGHT SIDE
        { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", left: isMobile ? "78%" : "71%", top: isMobile ? "10%" : "18%" },
        { src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4", left: isMobile ? "78%" : "71%", top: isMobile ? "23%" : "36%" },

        { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", left: isMobile ? "89%" : "77.5%", top: isMobile ? "16%" : "24%" },
        { src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7", left: isMobile ? "89%" : "77.5%", top: isMobile ? "29%" : "42%" },
    ];
    return (
        <Box
            sx={{
                position: "relative",
                height: isMobile ? 350 : 560,
                bgcolor: "#fff",
                borderRadius: "28px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                overflow: "hidden",
            }}
        >
            {/* Vertical guide lines */}
            {[14, 22, 38, 48, 58, 70].map((x) => (
                <Box
                    key={x}
                    sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: `${x}%`,
                        borderLeft: "1px dashed #e6e6e6",
                    }}
                />
            ))}

            {/* Avatars */}
            {avatars.map((a, i) => (
                <Box
                    key={i}
                    component="img"
                    src={`${a.src}?auto=format&fit=crop&w=300&q=80`}
                    sx={{
                        position: "absolute",
                        top: a.top,
                        left: a.left,
                        width: isMobile ? 40 : 88,
                        height: isMobile ? 40 : 88,
                        objectFit: "cover",
                        borderRadius: "14px",
                        backgroundColor: "#fff",
                        boxShadow: "0 16px 35px rgba(0,0,0,0.18)",
                    }}
                />
            ))}

            {/* Center Content */}
            <Box
                sx={{
                    position: "absolute",
                    top: isMobile ? "62%" : "58%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    maxWidth: 520,
                }}
            >
                <Typography
                    sx={{
                        fontSize: isMobile ? 12 : 15,
                        fontWeight: 600,
                        bgcolor: "#f2f2f2",
                        px: isMobile ? .8 : 2,
                        py: 0.5,
                        borderRadius: "999px",
                        display: "inline-block",
                        mb: 1,
                    }}
                >
                    Testimonials
                </Typography>

                <Typography variant={isMobile ? "h6" : "h4"} fontWeight={700}>
                    Trusted by leaders
                </Typography>

                <Typography variant={isMobile ? "body2" : "h4"} color="text.secondary" mb={1}>
                    from various industries
                </Typography>

                <Typography color="text.secondary" mb={1}>
                    Learn why professionals trust our solutions to complete
                    their customer journeys.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#000",
                        px: isMobile ? 1.5 : 4,
                        py: 1.2,
                        borderRadius: "999px",
                        textTransform: "none",
                        color: "#fff",
                        "&:hover": { bgcolor: "#111" },
                    }}
                >
                    Read More
                </Button>
            </Box>
        </Box>
    );
}

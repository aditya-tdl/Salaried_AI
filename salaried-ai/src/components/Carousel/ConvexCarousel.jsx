"use client";

import { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const images = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
];

export default function ConvexCarousel() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const [rotation, setRotation] = useState(0);

    /* 🎯 RESPONSIVE VALUES */
    const imageWidth = isMobile ? 180 : isTablet ? 230 : 300;
    const imageHeight = isMobile ? 240 : isTablet ? 300 : 380;

    const radiusX = isMobile ? 260 : isTablet ? 420 : 520;
    const radiusZ = isMobile ? 180 : isTablet ? 260 : 320;

    const speed = isMobile ? 0.45 : isTablet ? 0.35 : 0.45;

    /* 🔁 SMOOTH AUTO ROTATION */
    useEffect(() => {
        let frame;
        const animate = () => {
            setRotation((prev) => prev + speed);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [speed]);
    return (
        <Box
            sx={{
                width: "100vw",
                height: isMobile ? 420 : isTablet ? 500 : 600,
                perspective: "2000px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                }}
            >
                {images.map((img, index) => {
                    const angle = (360 / images.length) * index + rotation;
                    const rad = (angle * Math.PI) / 180;

                    const x = Math.sin(rad) * radiusX;
                    const z = Math.cos(rad) * -radiusZ;
                    const rotateY = angle * -0.3;

                    return (
                        <Box
                            key={index}
                            sx={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: imageWidth,
                                height: imageHeight,

                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: isMobile ? "16px" : "22px",

                                transform: `
                  translate(-50%, -50%)
                  translateX(${x}px)
                  translateZ(${z}px)
                  rotateY(${rotateY}deg)
                `,

                                boxShadow: "0 40px 80px rgba(0,0,0,0.35)",
                            }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}

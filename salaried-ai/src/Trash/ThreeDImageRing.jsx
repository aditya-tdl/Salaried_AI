"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { animate } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, PlayArrow } from "@mui/icons-material";

export function ThreeDImageRing({
    images,
    width = 400, // Desktop width
    perspective = 2000,
    imageDistance = 750,
    initialRotation = 180,
    animationDuration = .5,
    staggerDelay = 0.1,
    hoverOpacity = 0.4,
    containerClassName,
    ringClassName,
    imageClassName,
    backgroundColor = 'transparent',
    draggable = true,
    mobileBreakpoint = 768,
    mobileScaleFactor = 0.95, // INCREASED for larger mobile images
    inertiaPower = 0.8,
    inertiaTimeConstant = 300,
    inertiaVelocityMultiplier = 25,
    autoRotate = true,
    autoRotateSpeed = 0.3,
    imageSpacing = 30,
    mobileImageSpacing = 20, // Spacing remains the same
}) {
    const containerRef = useRef(null);
    const ringRef = useRef(null);

    const rotationY = useMotionValue(initialRotation);
    const startX = useRef(0);
    const currentRotationY = useRef(initialRotation);
    const isDragging = useRef(false);
    const velocity = useRef(0);
    const autoRotateRef = useRef(null);
    const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
    const [currentScale, setCurrentScale] = useState(1);
    const [showImages, setShowImages] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const angle = useMemo(() => 360 / images.length, [images.length]);

    // Calculate responsive dimensions
    const getImageSize = () => {
        const aspectRatio = 1.33; // Height = width * 1.33

        if (isMobile) {
            // On mobile, use larger percentage of screen width - INCREASED from 0.85 to 0.95
            const mobileWidth = Math.min(width, containerSize.width * 0.95); // CHANGED: 0.85 → 0.95
            return {
                width: mobileWidth,
                height: mobileWidth * aspectRatio,
                scale: mobileScaleFactor,
                spacing: mobileImageSpacing, // Spacing remains same
            };
        }

        // On desktop, use the provided width or adjust based on container
        const desktopWidth = Math.min(width, containerSize.width * 0.7);
        return {
            width: desktopWidth,
            height: desktopWidth * aspectRatio,
            scale: 1,
            spacing: imageSpacing,
        };
    };

    const getBgPos = (imageIndex, currentRot, scale) => {
        const scaledImageDistance = imageDistance * scale;
        const effectiveRotation = currentRot - 180 - imageIndex * angle;
        const parallaxOffset = ((effectiveRotation % 360 + 360) % 360) / 360;
        return `${-(parallaxOffset * (scaledImageDistance / 1.5))}px 0px`;
    };

    // Auto-rotation effect
    useEffect(() => {
        if (!isAutoRotating) {
            if (autoRotateRef.current) {
                cancelAnimationFrame(autoRotateRef.current);
                autoRotateRef.current = null;
            }
            return;
        }

        let lastTime = 0;
        const rotate = (currentTime) => {
            if (!lastTime) lastTime = currentTime;
            const delta = currentTime - lastTime;
            lastTime = currentTime;

            const currentRotation = rotationY.get();
            const speed = isMobile ? autoRotateSpeed * 0.7 : autoRotateSpeed;
            const newRotation = currentRotation + (speed * delta * 0.01);

            rotationY.set(newRotation);
            currentRotationY.current = newRotation;

            autoRotateRef.current = requestAnimationFrame(rotate);
        };

        autoRotateRef.current = requestAnimationFrame(rotate);

        return () => {
            if (autoRotateRef.current) {
                cancelAnimationFrame(autoRotateRef.current);
            }
        };
    }, [isAutoRotating, autoRotateSpeed, rotationY, isMobile]);

    // Container size and responsive handler
    useEffect(() => {
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const newIsMobile = viewportWidth <= mobileBreakpoint;
            setIsMobile(newIsMobile);

            setContainerSize({
                width: viewportWidth,
                height: viewportHeight
            });

            const newScale = newIsMobile ? mobileScaleFactor : 1;
            setCurrentScale(newScale);
        };

        // Set initial size
        handleResize();

        // Use ResizeObserver for more accurate container sizing
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver(handleResize);
            resizeObserver.observe(containerRef.current);

            return () => {
                if (containerRef.current) {
                    resizeObserver.unobserve(containerRef.current);
                }
            };
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileBreakpoint, mobileScaleFactor]);

    useEffect(() => {
        const unsubscribe = rotationY.on("change", (latestRotation) => {
            if (ringRef.current) {
                Array.from(ringRef.current.children).forEach((imgElement, i) => {
                    imgElement.style.backgroundPosition = getBgPos(
                        i,
                        latestRotation,
                        currentScale
                    );
                });

                // Calculate current image index based on rotation
                const normalizedRotation = ((latestRotation % 360) + 360) % 360;
                const imageIndex = Math.round((normalizedRotation / 360) * images.length) % images.length;
                setCurrentImageIndex(imageIndex);
            }
            currentRotationY.current = latestRotation;
        });
        return () => unsubscribe();
    }, [rotationY, images.length, imageDistance, currentScale, angle]);

    useEffect(() => {
        setShowImages(true);
    }, []);

    const handleDragStart = (event) => {
        if (!draggable) return;
        setIsAutoRotating(false);

        isDragging.current = true;
        const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
        startX.current = clientX;
        rotationY.stop();
        velocity.current = 0;
        if (ringRef.current) {
            ringRef.current.style.cursor = "grabbing";
        }
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("touchmove", handleDrag);
        document.addEventListener("touchend", handleDragEnd);
    };

    const handleDrag = (event) => {
        if (!draggable || !isDragging.current) return;

        const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
        const deltaX = clientX - startX.current;

        velocity.current = -deltaX * 0.5;

        rotationY.set(currentRotationY.current + velocity.current);

        startX.current = clientX;
    };

    const handleDragEnd = () => {
        isDragging.current = false;
        if (ringRef.current) {
            ringRef.current.style.cursor = "grab";
            currentRotationY.current = rotationY.get();
        }

        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDragEnd);
        document.removeEventListener("touchmove", handleDrag);
        document.removeEventListener("touchend", handleDragEnd);

        const initial = rotationY.get();
        const velocityBoost = velocity.current * inertiaVelocityMultiplier;
        const target = initial + velocityBoost;

        animate(initial, target, {
            type: "inertia",
            velocity: velocityBoost,
            power: inertiaPower,
            timeConstant: inertiaTimeConstant,
            restDelta: 0.5,
            modifyTarget: (target) => Math.round(target / angle) * angle,
            onUpdate: (latest) => {
                rotationY.set(latest);
            },
        });

        velocity.current = 0;
    };

    const rotateToImage = (index) => {
        setIsAutoRotating(false);

        const targetRotation = (360 / images.length) * index;
        const currentRotation = rotationY.get();

        // Calculate the shortest path
        const diff = ((targetRotation - currentRotation + 180) % 360) - 180;

        animate(currentRotation, currentRotation + diff, {
            duration: 1,
            ease: "easeInOut",
            onUpdate: (latest) => rotationY.set(latest),
        });
    };

    const handleNext = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        rotateToImage(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        rotateToImage(prevIndex);
    };

    const toggleAutoRotate = () => {
        setIsAutoRotating(!isAutoRotating);
    };

    const imageVariants = {
        hidden: { y: 200, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const imageSize = getImageSize();
    const spacing = isMobile ? mobileImageSpacing : imageSpacing; // Spacing remains unchanged

    return (
        <div
            ref={containerRef}
            style={{
                width: '100vw',
                height: isMobile ? '60vh' : '100vh',
                backgroundColor,
                overflow: 'hidden',
                userSelect: 'none',
                position: 'relative',
                touchAction: 'pan-y pinch-zoom',
            }}
            onMouseDown={draggable ? handleDragStart : undefined}
            onTouchStart={draggable ? handleDragStart : undefined}
        >
            <div
                style={{
                    perspective: `${perspective}px`,
                    width: `${imageSize.width}px`,
                    height: `${imageSize.height}px`,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) scale(${currentScale})`,
                    transformOrigin: "center center",
                }}
            >
                <motion.div
                    ref={ringRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        transformStyle: "preserve-3d",
                        rotateY: rotationY,
                        cursor: draggable ? "grab" : "default",
                    }}
                >
                    <AnimatePresence>
                        {showImages && images.map((imageUrl, index) => (
                            <motion.div
                                key={index}
                                style={{
                                    width: `calc(100% - ${spacing * 2}px)`, // Same spacing formula
                                    height: `calc(100% - ${spacing * 2}px)`, // Same spacing formula
                                    position: 'absolute',
                                    transformStyle: "preserve-3d",
                                    backgroundImage: `url(${imageUrl})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                    backfaceVisibility: "hidden",
                                    rotateY: index * -angle,
                                    z: -imageDistance * currentScale,
                                    transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
                                    backgroundPosition: getBgPos(index, currentRotationY.current, currentScale),
                                    borderRadius: isMobile ? '10px' : '12px',
                                    overflow: 'hidden',
                                    border: currentImageIndex === index ?
                                        `${isMobile ? '3px' : '4px'} solid #6366f1` :
                                        `${isMobile ? '2px' : '3px'} solid rgba(255,255,255,0.2)`,
                                    boxShadow: currentImageIndex === index ?
                                        `0 0 ${isMobile ? '25px' : '35px'} rgba(99, 102, 241, 0.6)` :
                                        `0 ${isMobile ? '8px' : '12px'} ${isMobile ? '20px' : '30px'} rgba(0,0,0,0.4)`,
                                    margin: `${spacing}px`, // Same spacing
                                    opacity: currentImageIndex === index ? 1 : 0.9,
                                    filter: currentImageIndex === index ? 'brightness(1.1)' : 'brightness(0.95)',
                                    transition: 'filter 0.3s ease, opacity 0.3s ease',
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={imageVariants}
                                custom={index}
                                transition={{
                                    delay: index * staggerDelay,
                                    duration: animationDuration,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: 'brightness(1.1)',
                                    transition: { duration: 0.2 }
                                }}
                                onHoverStart={() => {
                                    if (isDragging.current || isMobile) return;
                                    if (ringRef.current) {
                                        Array.from(ringRef.current.children).forEach((imgEl, i) => {
                                            if (i !== index) {
                                                imgEl.style.opacity = `${hoverOpacity}`;
                                                imgEl.style.filter = 'brightness(0.8)';
                                            }
                                        });
                                    }
                                }}
                                onHoverEnd={() => {
                                    if (isDragging.current || isMobile) return;
                                    if (ringRef.current) {
                                        Array.from(ringRef.current.children).forEach((imgEl, i) => {
                                            imgEl.style.opacity = currentImageIndex === i ? 1 : 0.9;
                                            imgEl.style.filter = currentImageIndex === i ? 'brightness(1.1)' : 'brightness(0.95)';
                                        });
                                    }
                                }}
                                onClick={() => rotateToImage(index)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Navigation Controls - Mobile optimized */}
            <div style={{
                position: 'absolute',
                bottom: isMobile ? '10px' : '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '16px' : '24px',
                zIndex: 10,
            }}>
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    style={{
                        width: isMobile ? '35px' : '60px',
                        height: isMobile ? '35px' : '60px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'rgba(30, 41, 59, 0.95)',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                        transition: 'all 0.2s ease',
                        fontSize: isMobile ? '28px' : '32px',
                        touchAction: 'manipulation',
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.95)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30, 41, 59, 0.95)'}
                >
                    <ChevronLeft style={{ fontSize: 'inherit' }} />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    style={{
                        width: isMobile ? '35px' : '60px',
                        height: isMobile ? '35px' : '60px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'rgba(30, 41, 59, 0.95)',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                        transition: 'all 0.2s ease',
                        fontSize: isMobile ? '28px' : '32px',
                        touchAction: 'manipulation',
                        border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.95)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30, 41, 59, 0.95)'}
                >
                    <ChevronRight style={{ fontSize: 'inherit' }} />
                </button>
            </div>

            {/* Current Image Indicator - Mobile optimized */}
            <div style={{
                position: 'absolute',
                bottom: isMobile ? '60px' : '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: isMobile ? '8px' : '10px',
                zIndex: 10,
            }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => rotateToImage(index)}
                        style={{
                            width: isMobile ? '10px' : '12px',
                            height: isMobile ? '10px' : '12px',
                            borderRadius: '50%',
                            border: 'none',
                            background: currentImageIndex === index ?
                                '#6366f1' : 'rgba(48, 46, 46, 0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            touchAction: 'manipulation',
                            padding: 0,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                ))}
            </div>
        </div>
    );
}

export default ThreeDImageRing;
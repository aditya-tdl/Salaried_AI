"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Divider,
  useMediaQuery,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

const navItems = [
  { label: "Webinars", path: "/webinars" },
  { label: "Newsletter", path: "/newsletter" },
  { label: "Resources", path: "/resources" },
  { label: "Community", path: "/community" },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Razorpay TEST MODE (Frontend Only) ---------------- */
  const handlePayment = () => {
    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_Kotf5HyoWEo0bV", // ✅ Test Key
      amount: 5900, // ₹59 in paise
      currency: "INR",
      name: "Salaried.ai",
      description: "Test Mode Subscription",
      handler: function (response) {
        alert(
          `TEST PAYMENT SUCCESS 🎉
Payment ID: ${response.razorpay_payment_id}`
        );
        console.log("Razorpay Response:", response);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#7c3aed",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      alert(`Payment Failed ❌\n${response.error.description}`);
      console.error("Payment Failed:", response.error);
    });

    rzp.open();
  };

  return (
    <>
      {/* Razorpay Script */}
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "#ffffff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.05)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 80 }, px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: { xs: 22, md: 26 },
              fontWeight: 800,
              color: "#111827",
              textDecoration: "none",
              flexGrow: isMobile ? 1 : 0,
              letterSpacing: "-0.02em",
            }}
          >
            Salaried<span style={{ color: "#7c3aed" }}>.ai</span>
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <>
              <Box sx={{ display: "flex", gap: 3, ml: 8, flexGrow: 1 }}>
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Button
                      key={item.label}
                      component={Link}
                      href={item.path}
                      sx={{
                        color: isActive ? "#7c3aed" : "#374151",
                        fontWeight: isActive ? 700 : 500,
                        textTransform: "none",
                        fontSize: 15,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#7c3aed",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>

              {/* Right Actions */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button
                  component={Link}
                  href="/register"
                  sx={{
                    color: "#374151",
                    textTransform: "none",
                    fontSize: 15,
                    fontWeight: 600,
                    px: 2,
                  }}
                >
                  Register
                </Button>

                <Button
                  onClick={handlePayment}
                  sx={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #5b21b6)",
                    color: "#fff",
                    borderRadius: "99px",
                    px: 3.5,
                    py: 1,
                    fontSize: 15,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow:
                      "0 8px 16px -4px rgba(124,58,237,0.3)",
                  }}
                >
                  Start @ ₹59
                </Button>
              </Box>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setOpenDrawer(true)}
              sx={{ color: "#111827", bgcolor: "rgba(0,0,0,0.03)" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ px: 3, py: 3 }}>
          <Stack spacing={2}>
            <Button
              onClick={() => {
                setOpenDrawer(false);
                handlePayment();
              }}
            >
              Start @ ₹59 / month
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

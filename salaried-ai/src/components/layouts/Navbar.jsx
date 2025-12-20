"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useMediaQuery,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from 'next/navigation';

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

  // Handle scroll effect for transparency/blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "#ffffff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
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
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center'
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
                        position: 'relative',
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#7c3aed",
                        },
                        "&::after": isActive ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '20px',
                          height: '2px',
                          backgroundColor: '#7c3aed',
                          borderRadius: '2px'
                        } : {}
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
                    "&:hover": {
                      color: "#111827",
                      backgroundColor: "rgba(0,0,0,0.04)"
                    }
                  }}
                >
                  Register
                </Button>

                <Button
                  component={Link}
                  href="/join"
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
                    transition: 'all 0.2s',
                    "&:hover": {
                      boxShadow:
                        "0 12px 20px -4px rgba(124,58,237,0.4)",
                      transform: 'translateY(-1px)'
                    },
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
              sx={{
                color: '#111827',
                bgcolor: 'rgba(0,0,0,0.03)',
              }}
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
        PaperProps={{
          sx: {
            width: '85%',
            maxWidth: 360,
            boxShadow: '-8px 0 24px rgba(0,0,0,0.08)'
          }
        }}
      >
        <Box
          sx={{
            height: "100%",
            px: 3,
            py: 3,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Top Row: Logo + Close */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Typography
              component={Link}
              href="/"
              onClick={() => setOpenDrawer(false)}
              sx={{
                fontSize: 24,
                fontWeight: 800,
                color: "#111827",
                textDecoration: "none",
              }}
            >
              Salaried<span style={{ color: "#7c3aed" }}>.ai</span>
            </Typography>

            <IconButton onClick={() => setOpenDrawer(false)} sx={{ color: '#6b7280' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <Stack spacing={1}>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    justifyContent: "flex-start",
                    fontSize: 17,
                    fontWeight: isActive ? 700 : 500,
                    textTransform: "none",
                    color: isActive ? "#7c3aed" : "#374151",
                    px: 2,
                    py: 1.5,
                    borderRadius: 3,
                    bgcolor: isActive ? "rgba(124,58,237,0.04)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(124,58,237,0.08)",
                      color: "#7c3aed"
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          <Divider sx={{ my: 4 }} />

          {/* Auth Actions */}
          <Stack spacing={2}>
            <Button
              component={Link}
              href="/register"
              onClick={() => setOpenDrawer(false)}
              sx={{
                fontSize: 16,
                fontWeight: 600,
                textTransform: "none",
                color: "#374151",
                py: 1.5,
                border: '1px solid #e5e7eb',
                borderRadius: '99px'
              }}
            >
              Log in / Register
            </Button>

            {/* Primary CTA */}
            <Button
              component={Link}
              href="/join"
              onClick={() => setOpenDrawer(false)}
              sx={{
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                color: "#fff",
                borderRadius: "999px",
                py: 1.6,
                fontSize: 16,
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 10px 24px -4px rgba(124,58,237,0.4)",
                "&:hover": {
                  boxShadow: "0 14px 30px -4px rgba(124,58,237,0.5)",
                  transform: 'translateY(-1px)'
                },
              }}
            >
              Start @ ₹59 / month
            </Button>
          </Stack>

          {/* Bottom helper text */}
          <Typography
            sx={{
              mt: "auto",
              fontSize: 13,
              fontWeight: 500,
              color: "#9ca3af",
              textAlign: "center",
              pt: 3,
            }}
          >
            Learn • Upskill • Grow your career
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

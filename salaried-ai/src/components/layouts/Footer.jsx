"use client";

import {
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const footerLinks = {
  pages: ["Home", "Membership", "Newsletter"],
  support: ["About Us", "Career"],
  legal: [
    "Privacy Policy",
    "Refund Policy",
    "Terms & Conditions",
    "FB Disclaimer",
  ],
};

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        color: "#111827",
        mt: "auto",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {/* Top Section */}
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3, py: { xs: 5, md: 7 } }}>
        {/* Logo + Social */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography sx={{ fontSize: 26, fontWeight: 800 }}>
            Salaried<span style={{ color: "#7c3aed" }}>.ai</span>
          </Typography>

          <Box>
            <IconButton sx={{ color: "#374151" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "#374151" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        <Divider sx={{ borderColor: "rgba(0,0,0,0.08)", my: 4 }} />

        {/* Main Footer Content */}
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Address */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ mb: 1, fontWeight: 600 }}>
              Salaried AI Private Limited
            </Typography>

            <Typography
              sx={{
                color: "#4b5563",
                mb: 2,
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              Salaried AI Club, 6th Floor, 601–604,
              <br />
              Signature by Lotus Developers,
              <br />
              Andheri West, Mumbai,
              <br />
              Maharashtra 400102
            </Typography>

            <Typography sx={{ mt: 2, fontSize: 14 }}>
              Email –{" "}
              <MuiLink
                href="mailto:support@salariedaiclub.io"
                sx={{
                  color: "#7c3aed",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                support@salariedaiclub.io
              </MuiLink>
            </Typography>

            <Typography sx={{ mt: 1, fontSize: 14 }}>
              Phone –{" "}
              <MuiLink
                href="tel:+910000000000"
                sx={{
                  color: "#7c3aed",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                +91-0000000000
              </MuiLink>
            </Typography>
          </Grid>

          {/* Pages */}
          <Grid item xs={6} md={3}>
            <Typography
              sx={{
                letterSpacing: 2,
                color: "#6b7280",
                mb: 2,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              PAGES
            </Typography>
            {footerLinks.pages.map((item) => (
              <Typography key={item} sx={{ mb: 1, fontSize: 14 }}>
                <Link
                  href="/"
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={3}>
            <Typography
              sx={{
                letterSpacing: 2,
                color: "#6b7280",
                mb: 2,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              SUPPORT
            </Typography>
            {footerLinks.support.map((item) => (
              <Typography key={item} sx={{ mb: 1, fontSize: 14 }}>
                <Link
                  href="/"
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Legal */}
          <Grid item xs={6} md={3}>
            <Typography
              sx={{
                letterSpacing: 2,
                color: "#6b7280",
                mb: 2,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              LEGAL
            </Typography>
            {footerLinks.legal.map((item) => (
              <Typography key={item} sx={{ mb: 1, fontSize: 14 }}>
                <Link
                  href="/"
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Section */}
      <Divider sx={{ borderColor: "rgba(0,0,0,0.08)" }} />

      <Box sx={{ textAlign: "center", py: 3, px: 2 }}>
        <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
          © Salaried AI 2025
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
          All Rights Reserved. Salaried AI Pvt. Ltd.
        </Typography>
      </Box>
    </Box>
  );
}

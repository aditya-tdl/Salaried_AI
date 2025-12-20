"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import GlobalWrapper from "@/components/layouts/GlobalWrapper";
import ClientOnly from "@/app/signup/ClientOnly";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      console.log("User data:", user);
    } else {
      console.log("No user found in Redux store");
    }
  }, [user]);

  return (
    <GlobalWrapper>
      <ClientOnly>

        <Box
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            backgroundColor: "#f5f5f5",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              flex: { xs: "1 1 100%", sm: "1 1 50%" },
              margin: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#f5a623",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "24px",
                  mr: 2,
                }}
              >
                A
              </Box>
              <Box>
                <h2>Your Fluencer Hub Name</h2>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
              </Box>
            </Box>
            <p>Located in India</p>
            <p>Joined in August 2025</p>
            <p>Preferred languages</p>
            <p>Preferred working hours</p>
            <p>Preview public profile</p>
            <p>Explore Fluencer Hub &gt;</p>
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              flex: { xs: "1 1 100%", sm: "1 1 50%" },
              margin: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h2>Hi 👋 Let's help freelancers get to know you</h2>
            <p>
              Get the most out of Fluencer Hub by sharing a bit more about
              yourself and how you prefer to work with freelancers.
            </p>
            <Box sx={{ mt: 2 }}>
              <h3>Profile checklist</h3>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#e0e0e0",
                  height: "10px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    width: "25%",
                    backgroundColor: "#f5a623",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                ></Box>
              </Box>
              <p>25%</p>
              <p>Share how you plan to use Fluencer Hub</p>
              <p>Tell us if you're here to find services or offer them.</p>
              <p>50%</p>
              <p>Set your communication preferences</p>
              <p>Let freelancers know your collaboration preferences.</p>
              <p>Add</p>
            </Box>
          </Box>
        </Box>
      </ClientOnly>
    </GlobalWrapper>
  );
}

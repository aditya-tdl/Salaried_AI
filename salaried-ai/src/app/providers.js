"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import SnackBar from "@/components/ReduxToolkit/components/SnackbarProvider";
import Loader from "@/components/ReduxToolkit/components/Loader";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import store from "@/components/ReduxToolkit/Store/store";
import { ThemeContext } from "@/components/Theme/theme";
import { Box } from "@mui/material";
import NextTopLoader from "nextjs-toploader";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeContext>
        <CssBaseline />
        <SnackBar />
        <Loader />
        <NextTopLoader color="#7c3aed" showSpinner={false} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Box sx={{ flex: 1, background: "white" }}>{children}</Box>

          {/* <ScrollToTop /> */}
        </Box>
      </ThemeContext>
    </Provider>
  );
}

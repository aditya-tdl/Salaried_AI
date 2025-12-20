"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Public_Sans, Sora } from "next/font/google";
import { useSelector } from "react-redux";

const public_sans = Public_Sans({ subsets: ["latin"] });
const sora = Sora({
  name: "Sora",
  weights: [200, 400, 500, 600, 700, 800, 900],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const ThemeContext = ({ children }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        // main: "#994205",
        // main: "#fc8d3d",
        main: "rgb(255,255,255,.5)",
      },
      secondary: {
        main: "#F4F4F5",
      },
      background: {
        paper: darkMode ? "black" : "white",
      },
    },
    typography: {
      fontFamily: sora.style.fontFamily, // Set your desired font family
      button: {
        fontWeight: 500,
        textTransform: "capitalize",
      },
    },
    components: {
      MuiRadio: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "#141718",
              "& .MuiIconButton-root": {
                margin: "8px",
              },
            },
          },
        },
      },
      MuiSwitch: {
        defaultProps: {
          color: "primary",
        },
        styleOverrides: {
          switchBase: {
            // Adjust switch base styles here
          },
          track: {
            // Adjust track styles here
            opacity: 1,
          },
          thumb: {
            // Adjust thumb styles here
            backgroundColor: darkMode ? "#FF5722" : "rgb(255,255,255,.5)",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined", // Set default variant
          size: "small", // Set default size
          InputLabelProps: {
            // shrink: true, // Shrink label on focus
          },
        },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3F435A",
                borderRadius: "5px",
                borderWidth: "1px",
              },
              "&.Mui-focused fieldset": {
                borderWidth: "1px",
                borderColor: darkMode ? "#3F435A" : "black",
                // backgroundColor:"red"
              },
            },
            "&.MuiFilledInput-root": {
              backgroundColor: "lightgreen",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "18px",
            },
            ".mui-1lveplb-MuiInputBase-input-MuiInput-input": {
              backgroundColor: "none",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              // fontSize: "16px",
              // color: "green",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid black",
            },
          },
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "black",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          contained: {
            // color: "#fff", // Set text color for text variant
          },
          outlined: {
            textTransform: "capitalize",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#3F435A", // Your desired default color
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "#ACB0CC",
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: {
          // "::-webkit-scrollbar": {
          //   width: "12px",
          //   background: darkMode ? "#000" : "#E1E1E1",
          // },
          "::-webkit-scrollbar": {
            backgroundColor: darkMode ? "#000" : "#E1E1E1",
            width: "5px",
            borderRadius: "10px",
            height: "5px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: darkMode ? "#fff" : "#4771AB",
            border: "none",
            borderRadius: "10px",
          },
          // "::-webkit-scrollbar-thumb": {
          //   background: darkMode ? "#8c4614" : "#fc8d3d",
          //   borderRadius: "6px",
          //   border: darkMode ? "3px solid #000" : "3px solid #E1E1E1",
          // },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            border: "2px solid transparent",
            // color: "yellow",
            // background: "black",
            // boxShadow: "1px 1px 2px white",
            // borderImage:
            //   "linear-gradient(123.6deg, rgba(255, 137, 6, 0.26) 0%, rgba(56, 8, 53, 0.73) 100%)",
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "#141718",
              "& .MuiIconButton-root": {
                margin: "8px",
              },
            },
          },
        },
      },
      MuiRadioButton: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "#141718",
              "& .MuiIconButton-root": {
                margin: "8px",
              },
            },
          },
        },
      },
      // MuiAvatar: {
      //   styleOverrides: {
      //     root: {
      //       background: darkMode ? "#121212" : "#fc8d3d",
      //       backgroundImage: darkMode
      //         ? "linear-gradient(123.6deg,rgba(255, 137, 6, 0.26)  0%,  rgba(56, 8, 53, 0.73) 100%)"
      //         : "",
      //     },
      //   },
      // },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com/i_am_ajitkumar/"> <InstagramIcon/></a>
          <a href="https://twitter.com/i_amajitkumar/"> <TwitterIcon/>  </a>
          <a href="https://github.com/i-am-ajitkumar/"> <GitHubIcon/>   </a>
          <a href="https://www.instagram.com/i_am_ajitkumar/"> <YouTubeIcon/>  </a>
          <a href="https://www.linkedin.com/in/iamajitkumar/"> <LinkedInIcon/> </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Ajit Kumar Sahoo
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
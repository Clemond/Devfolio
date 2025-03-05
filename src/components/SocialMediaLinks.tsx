import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box, IconButton } from "@mui/material";

export default function SocialMediaLinks() {
  return (
    <Box display="flex" gap={2}>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/nicholas-nieminen-jönsson/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/yourgithubprofile"
        target="_blank"
      >
        <GitHubIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
      <IconButton
        component="a"
        href="mailto:Nicholas.nieminenjonsson@gmail.com"
      >
        <EmailIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
    </Box>
  );
}

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
        className="shadow-md shadow-[#c227de]"
      >
        <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/yourgithubprofile"
        target="_blank"
        className="shadow-md shadow-[#c227de]"
      >
        <GitHubIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <IconButton
        component="a"
        href="mailto:Nicholas.nieminenjonsson@gmail.com"
        className="shadow-md shadow-[#c227de]"
      >
        <EmailIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

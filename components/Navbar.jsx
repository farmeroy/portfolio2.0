import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link as MuiLink } from "@mui/material";
import smoothScrollHandler from "../utility/scroll-handler";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (goal) => {
    setAnchorElNav(null);
    if (typeof goal === "string") {
      smoothScrollHandler(goal);
    }
  };

  // Named x... because it seemed the menu was layed out alphabetically?
  const xlinkedIn = (
    <a
      href="https://www.linkedin.com/in/raffaele-cataldo-dev/"
      rel="noreferrer"
      target="_blank"
      color="secondary"
    >
      <LinkedInIcon />
    </a>
  );

  const xgitHub = (
    <a
      href="https://github.com/farmeroy"
      rel="noreferrer"
      target="_blank"
      color="secondary"
    >
      <GitHubIcon />
    </a>
  );

  const xcontact = <EmailIcon onClick={() => handleScroll("Contact")} />;

  const resume = (
    <MuiLink
      underline="none"
      href="./RaffaeleCataldoCV.pdf"
      target="_blank"
      sx={{ my: 2, color: "white", display: "block" }}
    >
      Resume
    </MuiLink>
  );

  // We expect a prop called home 
  // if home = true than we render all the home sections in the navbar
  // else we render external links and a way to get home
  const pages = props.home
    ? ["About", "Portfolio", resume, xgitHub, xlinkedIn, xcontact]
    : [resume, xgitHub, xlinkedIn, xcontact];

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              color="secondary"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Button color="secondary">
                <Image
                  src="/R.svg"
                  alt="Raffaele Cataldo Logo"
                  width={140}
                  height={32}
                />
              </Button>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={pages.indexOf(page)}
                    onClick={handleScroll.bind(null, page)}
                  >
                    <Typography color="secondary" textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              color="secondary"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Image
                src="/R.svg"
                alt="Raffaele Cataldo Logo"
                width={140}
                height={32}
              />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={pages.indexOf(page)}
                  onClick={handleScroll.bind(null, page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default Navbar;

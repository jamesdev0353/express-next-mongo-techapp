import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import { pages } from "./pagesData";
import { loginform, logoutform } from "./pagesData";
import { useRouter } from "next/router";
import useStyles from "./styles";
import styles from "../../styles/Navbar.module.scss";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const ResponsiveAppBar: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();
  const [state, setState] = React.useState({
    left: false,
  });
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("userProfile")));
    if (user) {
      console.log("user");
      // dispatch(setUserAction(user));
    } else {
      console.log("no user");
    }
  }, [router]);

  // console.log(user, "user");
  const logout = () => {
    // dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userProfile");
    setUser(null);
    router.push("/");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const list = (anchor): JSX.Element => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.navBarBox}
    >
      <div className={styles.profStyles}>
        <div className={classes.boxClass}>
          <div className={classes.profilePhone}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar
                  className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Typography className={classes.userNamePhone} variant="body2">
              {user?.result.name}
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <Link key={index} href={page.path} passHref>
            <ListItem
              button
              key={index}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                // display: "block",
                justifyContent: "flex-end",
              }}
              className={styles.phoneBut}
            >
              {page.title}
              <p className={styles.icons}>{page.icon}</p>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar className={styles.navBar} position="sticky">
      <Container className={styles.navbarContainer}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Avatar alt="logo" />
          </Typography>

          <Box
            className={styles.burger}
            sx={{ flexGrow: 0, display: { xs: "flex" } }}
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  onClick={toggleDrawer(anchor, true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  color="white"
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="white"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Kober.tech
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              return (
                <Link key={index} href={page.path} passHref>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    className={styles.colorButtons}
                  >
                    {page.title}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!user ? (
              <Link href={loginform[0].path} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  className={styles.colorButtons}
                >
                  {loginform[0].title}
                </Button>
              </Link>
            ) : (
              <div className={styles.profData}>
                <div className={classes.profile}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar
                        className={classes.purple}
                        alt={user?.result.name}
                        src={user?.result.imageUrl}
                      >
                        {user?.result.name.charAt(0)}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Typography className={classes.userName} variant="h6">
                    {user?.result.name}
                  </Typography>
                </div>
              </div>
            )}
          </Box>
          {user ? (
            <Button
              onClick={logout}
              sx={{ my: 2, color: "white", display: "block" }}
              className={styles.colorButtons}
            >
              {logoutform[0].title}
            </Button>
          ) : (
            <></>
          )}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src=" " />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;

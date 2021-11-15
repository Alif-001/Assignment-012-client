import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Review from "../../Review/Review";
import Navigation from "../../Shared/Navigation/Navigation";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Allorders from "./Allorders/Allorders";
import "./Dashboard.css";
import DashBordAdd from "./DashBordAdd/DashBordAdd";
import Dashhome from "./Dashhome/Dashhome";
import Pay from "./Pay/Pay";

const drawerWidth = 222;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { allContexts } = useAuth();
  const { admin, user, logOut } = allContexts;

  console.log(user);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ color: "white" }}>
      <Tooltip placement="right" sx={{ mt: 1 }} title={user.displayName}>
        <IconButton>
          <Avatar alt="user photo" src={user.photoURL} />
        </IconButton>
      </Tooltip>
      <Divider />{" "}
      <Box sx={{ textAlign: "left", ml: 1, mt: 4 }}>
        {" "}
        {/* <Link style={{ textDecoration: "none" }} to="/home">
          <Button>Home</Button>
        </Link>
         
        <Link style={{ textDecoration: "none" }} to="/explore">
          <Button>Explore</Button>
        </Link> */}
        {admin && (
          <Box>
            <Link style={{ textDecoration: "none" }} to={`${url}`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                Manage All Product
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/manageall`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                Manage All Orders
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                Make Admin
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/addproduct`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                Add Product
              </Button>
            </Link>
          </Box>
        )}
        {!admin && (
          <Box>
            {" "}
            <Link style={{ textDecoration: "none" }} to={`${url}/myorder`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                My Order
              </Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/addreview`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                Add Review
              </Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
              <Button variant="contained" sx={{ width: 1, my: 1 }}>
                Payment
              </Button>
            </Link>
          </Box>
        )}
        {user.email && (
          <Button variant="contained" sx={{ width: 1, my: 1 }} onClick={logOut}>
            LogOut
          </Button>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        // position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Navigation />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ mx: "auto" }}
          >
            DashBoard
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(255, 255, 255,0.9)",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={`${path}`}>
            <Dashhome></Dashhome>
          </Route>
          <Route path={`${path}/myorder`}>
            <DashBordAdd></DashBordAdd>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/manageall`}>
            <Allorders />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <Route path={`${path}/Addreview`}>
            <Review />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

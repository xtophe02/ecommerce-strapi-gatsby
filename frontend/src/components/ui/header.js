import React, { useState } from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tab,
  Tabs,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"
import menu from "../../images/menu.svg"

import { styled } from "@mui/material/styles"

const CustomizedImage = styled("img")`
  width: 2rem;
  height: 2rem;
`

export default function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const routes = [
    ...props.categories,
    { node: { strapiId: "contact", name: "Contact Us", link: "/contact" } },
  ]
  const activeIndex = () => {
    try {
      let found
      if (typeof window !== undefined) {
        found = routes.indexOf(
          routes.filter(
            ({ node: { name, link } }) =>
              link || `/${name?.toLowerCase()}` === window?.location?.pathname
          )[0]
        )
      }

      return found === -1 ? false : found
    } catch (error) {
      console.log("FOUND", error)
    }
  }

  const matches = useMediaQuery(theme => theme.breakpoints.down("md"))
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const tabs = (
    <Tabs
      value={activeIndex()}
      sx={{
        ".MuiTabs-indicator": { backgroundColor: "#fff" },
        mx: "auto",
      }}
    >
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          key={route.node.strapiId}
          label={route.node.name}
          sx={{ fontFamily: theme => theme.typography.body1, fontWeight: 600 }}
        />
      ))}
    </Tabs>
  )
  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      sx={{
        ".MuiDrawer-paper": {
          backgroundColor: theme => theme.palette.primary.main,
        },

        mx: "auto",
      }}
    >
      <List>
        {routes.map((route, i) => (
          <ListItem key={route.node.strapiId} disablePadding>
            <ListItemButton
              divider
              selected={activeIndex() === i}
              component={Link}
              to={route.node.link || `/${route.node.name.toLowerCase()}`}
              // sx={{
              //   ".MuiListItemButton-root.MuiSelected": {
              //     color: "#000",
              //     backgroundColor: "#000",
              //   },
              // }}
            >
              <ListItemText
                primary={route.node.name}
                sx={{ ".MuiListItemText-primary": { color: "#fff" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar>
        <Button sx={{ mr: { xs: "auto", md: false } }} component={Link} to="/">
          <Typography variant="h1">
            <Box sx={{ color: "common.offBlack" }} component="span">
              VAR
            </Box>{" "}
            X
          </Typography>
        </Button>
        {matches ? drawer : tabs}

        <IconButton>
          <CustomizedImage src={search} alt="search" />
        </IconButton>
        <IconButton component={Link} to={"/cart"}>
          <CustomizedImage src={cart} alt="cart" />
        </IconButton>
        <IconButton
          component={Link}
          to={"/account"}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <CustomizedImage src={account} alt="account" />
        </IconButton>

        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <CustomizedImage src={menu} alt="menu" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

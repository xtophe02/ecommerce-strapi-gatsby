import React from "react"
import { Grid, Typography, IconButton } from "@mui/material"
import Link from "../Link"
import { styled } from "@mui/system"

import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

const CustomizedFooter = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "2rem",
}))

export default function Footer() {
  const socialMediaLinks = [
    { icon: facebook, alt: "facebook", link: "https://facebook.com" },
    { icon: twitter, alt: "twitter", link: "https://twitter.com" },
    { icon: instagram, alt: "instagram", link: "https://instagram.com" },
  ]
  const routes = {
    "Customer Service": [
      { label: "Contact Us", link: "/contact" },
      { label: "My Account", link: "/account" },
    ],
    Information: [
      { label: "Privacy Policy", link: "/privacy-policy" },
      { label: "Terms and Conditions", link: "/terms-conditions" },
    ],
    "Contact Us": [
      { label: "+351 00 000 00 00", href: "tel:+351 00 000 00 00" },
      {
        label: "eng.christophe.moreira@gmail.com",
        href: "mailto:eng.christophe.moreira@gmail.com",
      },
    ],
  }
  return (
    <CustomizedFooter>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container spacing={2}>
            {Object.keys(routes).map(route => (
              <Grid item key={route}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="h5" sx={{ fontSize: "1.25rem" }}>
                      {route}
                    </Typography>
                  </Grid>
                  {routes[route].map(item => (
                    <Grid item key={item.label}>
                      <Typography
                        component={item.link ? Link : "a"}
                        to={item.link ? item.link : undefined}
                        href={item.href ? item.href : undefined}
                        variant="body1"
                        sx={{ fontSize: "0.75rem" }}
                      >
                        {item.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            {socialMediaLinks.map(item => (
              <Grid item key={item.alt}>
                <IconButton
                  aria-label={item.alt}
                  component="a"
                  href={item.link}
                  target="_blank"
                >
                  <img src={item.icon} alt={item.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </CustomizedFooter>
  )
}

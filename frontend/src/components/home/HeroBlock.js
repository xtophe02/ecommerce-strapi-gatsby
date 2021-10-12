import React from "react"
import { Grid, Typography } from "@mui/material"
import Lottie from "react-lottie"

import animationData from "../../images/data.json"

export default function HeroBlock() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1" textAlign="center">
              The Premier <br />
              Devoloper Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" textAlign="center">
              high quality, custom-designed shirts, hats and hoodies
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie options={defaultOptions} width="40rem" />
      </Grid>
    </Grid>
  )
}

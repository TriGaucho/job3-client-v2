import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import logo from "../../assets/img/Job3_logo_black.svg"
export default () => {
  const [year, setYear] = useState<number>(new Date().getFullYear())
  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        width: '100%',
        padding: '1rem',
        background: (theme) => theme.palette.primary.main
      }}
      component='footer'
      >
        <Box>
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}>
            Copyright © {year} JOB3.
          </Typography>
        </Box>
        <Box 
        sx={{
            display: 'grid',
            placeItems: 'center',
             '>img' : {
              width: {
                xs: '50px',
                lg: '60px',
              },
              height: 'auto',
             } 
            }}>
          <img
            src={logo}
            alt="Logo JOB3"
          />
        </Box>
    </Container>
    )
}

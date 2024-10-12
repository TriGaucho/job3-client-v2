import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"

export default () => {
  const theme = useTheme()
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '64px',
      width: '100%',
      background: (theme) => theme.palette.primary.main
    }}
    component='footer'
    >

    </Box>
    )
}

import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                mb: 'auto',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 2
            }}
        >
          <Box>
            <Typography variant="body1">
              {'© '}
              {new Date().getUTCFullYear()}
              {' Chakkaphong Max'}
            </Typography>
          </Box>
        </Box>
      );
}
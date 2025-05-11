'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useColorMode, useLocale } from '../providers';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DownloadIcon from '@mui/icons-material/Download';
import { useTranslations } from 'next-intl';


function Header() {
  const t = useTranslations();
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { switchLocale } = useLocale()

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/files/dummy.pdf';
    link.download = 'chakkaphong-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <AppBar position="static" color='transparent'>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', p: 2, minWidth: 0 }}>
            <Avatar alt="logo" src="/static/icon-chrome-512x512.png" sx={{ width: 50, height: 50 }}/>
            <Box>
              <IconButton onClick={toggleColorMode}>
                  {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
            <Button variant='contained' color='primary' onClick={handleDownloadResume} endIcon={<DownloadIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='button' fontWeight='bold'>
                  {t('resume-button')}
                </Typography>
                
              </Box>
            </Button>
        </Toolbar>
    </AppBar>
  );
}
export default Header;

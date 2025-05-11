'use client';

import { useMemo, useState, createContext, useContext, ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { NextIntlClientProvider } from 'next-intl';
import en from '@/app/locales/en/messages.json'
import th from '@/app/locales/th/messages.json'

const ColorModeContext = createContext({ toggleColorMode: () => {} });
const LocaleContext = createContext({ switchLocale: () => {}, locale: 'en' });

export const useColorMode = () => useContext(ColorModeContext);
export const useLocale = () => useContext(LocaleContext)

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [lang, setLang] = useState<'en' | 'th'>('en');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#dee2e6' : '#495057',
          },
          secondary: {
            main: mode === 'dark' ? '#adb5bd' : '#dee2e6',
          },
        //   customGray: {
        //     50: '#f8f9fa',
        //     100: '#e9ecef',
        //     200: '#dee2e6',
        //     300: '#ced4da',
        //     400: '#adb5bd',
        //     500: '#6c757d',
        //     600: '#495057',
        //     700: '#343a40',
        //     800: '#212529',
        //   },
          background: {
            default: mode === 'dark' ? '#212529' : '#f8f9fa',
            paper: mode === 'dark' ? '#343a40' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#f8f9fa' : '#212529',
            secondary: mode === 'dark' ? '#adb5bd' : '#495057',
          },
        },
        components: {
          MuiTypography: {
            defaultProps: {
              textTransform: 'none',
            }
          }
        }
      }),
    [mode]
  );

  const localeControls = useMemo(
  () => ({
    switchLocale: () => 
      setLang(prev => prev === 'en' ? 'th' : 'en'),
    locale: lang
  }), [lang])

  const getMessages = () => {
    return lang === 'en' ? en : th
  }

  return (
    <LocaleContext.Provider value={localeControls}>
      <NextIntlClientProvider messages={getMessages()} locale={lang}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

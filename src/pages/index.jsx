import React from 'react'
import HeroSection from '../components/HeroSection';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Quicksand']
  }
});

darkTheme = responsiveFontSizes(darkTheme);

export default function index() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
      <ContactSection/>
    </ThemeProvider>
  )
}

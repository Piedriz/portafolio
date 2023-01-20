import React from 'react'
import HeroSection from '../components/HeroSection';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import AcademicSection  from '../components/AcademicSection';
import ScrollToTop from "react-scroll-to-top";


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
      <AcademicSection/>
      <Projects />
      <ContactSection/>
      <ScrollToTop smooth top/>
    </ThemeProvider>
  )
}

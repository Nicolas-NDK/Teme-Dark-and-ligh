import React from 'react';
import Home from './src/Home';
import { ThemeProvider } from 'styled-components';
import themes from './src/themes'
import { useColorScheme } from 'react-native';

export default function App() {
const deviceTheme = useColorScheme();
const theme = themes[deviceTheme] || theme.dark;

  return ( 
    <ThemeProvider theme= {theme}>
      <Home />
    </ThemeProvider>
  );
}
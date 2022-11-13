import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyled } from './styles/global';

export function App() {
  return (
    <React.Fragment>
        <Header />
        <Dashboard />
        <GlobalStyled />

        
    </React.Fragment>
  )
}

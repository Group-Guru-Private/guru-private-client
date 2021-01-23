import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import SandboxPage from './pages/SandboxPage'

export default function App() {
  return (
    <>
    <BottomNav/>
    {/* <HomePage /> */}
    </>
    // <SandboxPage />
  );
}
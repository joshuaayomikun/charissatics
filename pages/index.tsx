import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Nav from '../src/components/nav';
import Hero from '../src/components/hero';
import ServiceProvider, { ServiceContext } from '../src/providers/service-provider';
import HomePage from '../src/components/home-page';
const Home: NextPage = () => {
  return (
    <ServiceProvider>
      <Nav primaryButtonColor='#96abc7' primaryButtonTextColor="white" textColor='#96abc7'></Nav>
      <Hero/>
      <HomePage />
    </ServiceProvider>
  );
};

export default Home;

import React from 'react';
import NavOptions from '../components/NavOptions';
import PageFooter from '../components/PageFooter';
import { Navigation } from '../storybook';
import { 
  socialMediaAccounts,
} from '../lib/constants';
import '../styles/styles.scss';



export default function MyApp({ Component, pageProps }) {
  return (
    <Navigation navOptions={<NavOptions />} socialMediaUrls={socialMediaAccounts}>
      <Component {...pageProps} />
      <PageFooter />
    </Navigation>
  )
}

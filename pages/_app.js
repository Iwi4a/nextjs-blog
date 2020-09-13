import React from 'react';
import NavOptions from '../components/NavOptions';
import PageFooter from '../components/PageFooter';
import { Navigation } from '../storybook';
import { 
  socialMediaAccounts,
} from '../lib/constants';
import '../styles/styles.scss';



export default function MyApp({ Component, pageProps }) {
    const renderLogo = () => {
        let hideLogo = false;
        if (Component.name === 'Contact') {
            hideLogo = true;
        }
        return hideLogo;
    }
    return (
        <Navigation hideLogo={renderLogo()} inView={Component.name} navOptions={<NavOptions />} socialMediaUrls={socialMediaAccounts}>
            <Component {...pageProps} />
            <PageFooter />
        </Navigation>
    )
}

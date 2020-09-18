import React from 'react';
import NavOptions from '../components/NavOptions';
import PageFooter from '../components/PageFooter';
import { Navigation } from '../storybook';
import { 
  socialMediaAccounts,
} from '../lib/constants';
import '../styles/styles.scss';



export default function MyApp({ Component, pageProps }) {
    const renderNavProps = () => {
        return {
            hideLogo: ['Contact', 'About', 'Projects', 'SingleProject', ].includes(Component.name),
            darkMenuIcon: ['Projects'].includes(Component.name),
            inView: Component.name,
            socialMediaUrls: socialMediaAccounts
        }
    }
    return (
        <Navigation navOptions={<NavOptions />} {...renderNavProps()}>
            <Component {...pageProps} />
            <PageFooter />
        </Navigation>
    )
}

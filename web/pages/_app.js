import React from 'react';
import { useRouter } from 'next/router';
import NavOptions from '../components/NavOptions';
import PageFooter from '../components/PageFooter';
import { Navigation } from '../storybook';
import { 
  socialMediaAccounts,
} from '../lib/constants';
import '../styles/styles.scss';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const renderNavProps = () => {
        return {
            hideLogo: ['/about', '/blog', '/blog/[slug]', '/projects', '/projects/[slug]', '/contact', ].includes(router.route),
            darkMenuIcon: ['/projects'].includes(router.route),
            inView: router.route,
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
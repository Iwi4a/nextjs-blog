import React from 'react';
import {
    socialMediaAccounts
} from '../lib/constants';
import {
    SVG,
    Footer
} from '../storybook'

const PageFooter = () => {
    const socialIcons = socialMediaAccounts.map(acc => {
        return <a key={acc.id} target="_blank" href={acc.url}><SVG icon={acc.id} /></a>
    })
    return (
        <Footer>
            {socialIcons}
        </Footer>
    )
}

export default PageFooter;
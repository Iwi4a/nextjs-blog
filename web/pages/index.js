import React from 'react';
import { getHomepageData } from '../lib/api';
import ContactSection from '../components/ContactSection';
import { 
  ThumbnailsCollection,
  HomepageHero
} from '../storybook'

export async function getStaticProps() {
  const res = await getHomepageData();
  return { props: { ...res.data } }; 
};

const Index = (props) => {
  return (
    <div>
        <HomepageHero image={props.page.acfHeader.headerImage.mediaItemUrl} title={props.page.acfHome.headerTitle} style={{ backgroundPosition: '0 100%', backgroundSize: 'cover' }} />
        <ThumbnailsCollection collection={props.page.acfHome.frontThumbnails} />
        <ContactSection cv={props.contactSection.acfContact.cvLink.mediaItemUrl}>
          {props.contactSection.acfContact.contactFooterText}
        </ContactSection>
    </div>
  )
}

export default Index;

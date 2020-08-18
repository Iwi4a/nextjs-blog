import React from 'react';
import { getHomepageData } from '../lib/api';
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
        <HomepageHero image={props.page.acfHeader.headerImage.mediaItemUrl} title={props.page.acfHome.headerTitle} backgroundStyle={{ backgroundPosition: '0 100%' }} />
        <ThumbnailsCollection collection={props.page.acfHome.frontThumbnails} />
    </div>
  )
}

export default Index;

import React from 'react';
import { getHomepageData } from '../lib/api';

import { ThumbnailsCollection } from '../storybook'

export async function getStaticProps() {
  const res = await getHomepageData();
  return { props: { ...res.data } }; 
};

const Index = (props) => {
  return (
    <div>
        <ThumbnailsCollection collection={props.page.acfHome.frontThumbnails} />
    </div>
  )
}

export default Index;

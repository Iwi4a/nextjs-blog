import React from 'react';
import { getHomepageData } from '../lib/api';

export async function getStaticProps() {
  const data = await getHomepageData();
  return { props: { ...data.page } }; 
};

const Index = (props) => {
  return (
    <div>
        Lets begin with the homepage
    </div>
  )
}

export default Index;

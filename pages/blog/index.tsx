import React, { Component } from 'react';
import {FixedBackground} from '../../storybook';
import { getBlogpageData } from '../../lib/api';
import style from 'styled-components';


export async function getStaticProps() {
    const res = await getBlogpageData();
    return {
        props: {
            ...res.data
        }
    }
}


class Blog extends Component {
    render() {
        return (
            <>
                <FixedBackground
                    image={this.props.page.acfHeader.headerImage.mediaItemUrl}
                    style={{
                        backgroundSize: "auto",
                    }}
                    height="60vh" />
            </>
        )
    }
}

export default Blog;
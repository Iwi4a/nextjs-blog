import React from 'react';
import ThumbnailsCollection from './ThumbnailsCollection';

const thumbsListMock = [
    {
        thumbnailTitle: "Some lorem title",
        thumbnailImage: {mediaItemUrl: "https://placedog.net/500/500", altText: ""},
        thumbnailIntroText: "Lorem Ipsum stuff",
        thumbnailLink: { slug: "about" },
        thumbnailButton: "Button text on thumb one"
    },
    {
        thumbnailTitle: "Some lorem title2",
        thumbnailImage: {mediaItemUrl: "https://placekitten.com/500/500", altText: ""},
        thumbnailIntroText: "Lorem Ipsum stuff",
        thumbnailLink: { slug: "about2" },
        thumbnailButton: "Button text"
    },
    {
        thumbnailTitle: "Some lorem title3",
        thumbnailImage: { mediaItemUrl: "https://picsum.photos/500/500", altText: "" },
        thumbnailIntroText: "Lorem Picsum staad",
        thumbnailLink: { slug: "about2" },
        thumbnailButton: "Button text on thumb three"
    }
];

export const Basic = () => {
    return <ThumbnailsCollection collection={thumbsListMock} />
}


export default {
    title: "Organisms/ThumbnailsCollection",
}
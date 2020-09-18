import React from 'react';
import Thumbnail from '../../Atoms/Thumbnail/Thumbnail';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './styles.scss';

const ThumbnailsCollection = ({ collection }) => {
    if (collection.length < 1) return <p>Please add thumbnail collection</p>
    const thumbnails = collection.map((thumb, idx) => {
        const ThumbnailButton = () => {
            return <Link href={`/${thumb.thumbnailLink.slug}`}><a>{thumb.thumbnailButton}</a></Link>
        }
        return <Thumbnail key={idx} title={thumb.thumbnailTitle} image={thumb.thumbnailImage.mediaItemUrl} button={<ThumbnailButton />}>{thumb.thumbnailIntroText}</Thumbnail>
    })
    return (
        <div className="ThumbnailCollection">
            <div className="ThumbnailCollection__container">
                { thumbnails }
            </div>
        </div>
    )
}

ThumbnailsCollection.propTypes = {
    collection: PropTypes.array.isRequired,
}

ThumbnailsCollection.defaultProps = {
    collection: [],
}

export default ThumbnailsCollection;

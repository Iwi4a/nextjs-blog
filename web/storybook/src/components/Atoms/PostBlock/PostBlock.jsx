import React from 'react';
import PropTypes from  'prop-types';
import Link from 'next/link';
import './style.scss';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daySuffix = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const PostBlock = ({title, date, tags, excerpt, href, ...rest }) => {
    const dateObj = new Date(date);
    const humaniseDate = `${daySuffix(dateObj.getDate())} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    const makeLink = (element) => {
        return (
            <Link href={href} as={href}>
                <a>
                    {element}
                </a>
            </Link>
        )
    }
    return (
        <div className="PostBlock" {...rest}>
                    { makeLink(<h3 className="PostBlock__title">{title}</h3>) }
                    <div className="PostBlock__meta">
                        <div className="PostBlock__meta__date">{humaniseDate}</div>
                        <div className="PostBlock__meta__tags">{tags.map(tag => <span>{tag.node.name}</span>)}</div>
                    </div>
                    { makeLink(<div className="PostBlock__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />) }
        </div>
    )
}

PostBlock.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
    excerpt: PropTypes.string,
    href: PropTypes.string.isRequired,
}
PostBlock.defaultProps = {
    title: '',
    date: '',
    tags: [],
    excerpt: '',
}

export default PostBlock

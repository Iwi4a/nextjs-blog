import React from 'react';
import PostBlock from './PostBlock';

const mockPostData = {"node":{"id":"cG9zdDo0ODU=","title":"How to use git bisect","slug":"how-to-use-git-bisect","date":"2020-07-01T11:39:33","excerpt":"<p>git bisect is a binary search which could help you find a commit that introduced a bug. If you don’t have anything to try git bisect on, feel free to clone the simple demo . Binary search is helpful when you find out you have created a bug along the way, but you don’t know when it appeared… <span class=\"more\">continue reading</span></p>\n","tags":{"edges":[{"node":{"name":"git"}}]},"acfBlogSingle":{"articleLink":null}}}

export const basicPostBlock = () => <PostBlock 
                                        title={mockPostData.node.title}
                                        date={mockPostData.node.date}
                                        tags={mockPostData.node.tags.edges}
                                        excerpt={mockPostData.node.excerpt} />

export default {
    title: 'Atoms/PostBlock',
}
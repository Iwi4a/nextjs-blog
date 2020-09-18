import React from 'react';
import Tile from './Tile';

export const basicTile = () => <Tile image="https://placedog.net/200" title="Example" />
export const tallTile = () => <Tile image="https://placedog.net/200/500" title="Example" />

export default {
    title: 'Atoms/Tile',
}
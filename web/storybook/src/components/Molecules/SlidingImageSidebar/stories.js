import SlidingImageSidebar from './SlidingImageSidebar';
import { mockData } from '../../Atoms/ImageSidebar/stories';

const wrapperStyle = { 
    height: '1500px',
    backgroundColor: "#ccc",
    display: 'inline-block',
    padding: '0 20px',
}

export const basicSlidingImageSidebar = () => <div style={wrapperStyle}><SlidingImageSidebar {...mockData} /></div>

export default {
    title: 'Atoms/SlidingImageSidebar'
}
import SlidingShareSidebar from './SlidingShareSidebar';
import { mockData } from '../../Atoms/ShareSidebar/stories';

const wrapperStyle = { 
    height: '1500px',
    backgroundColor: "#ccc",
    display: 'inline-block',
    padding: '0 20px',
}

export const basicSlidingShareSidebar = () => <div style={wrapperStyle}><SlidingShareSidebar {...mockData} /></div>

export default {
    title: 'Atoms/SlidingShareSidebar'
}
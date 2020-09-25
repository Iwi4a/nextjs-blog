import ShareSidebar from './ShareSidebar';

export const mockData = {
    image: "https://placedog.net/500",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://placedog.net/500"
}

export const basicShareSidebar = () => <ShareSidebar {...mockData} />

export default {
    title: 'Atoms/ShareSidebar'
}
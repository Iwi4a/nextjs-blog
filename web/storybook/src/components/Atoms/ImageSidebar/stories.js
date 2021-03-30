import ImageSidebar from './ImageSidebar';

export const mockData = {
    image: "https://placedog.net/500",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://placedog.net/500"
}

export const basicImageSidebar = () => <ImageSidebar {...mockData} />

export default {
    title: 'Atoms/ImageSidebar'
}
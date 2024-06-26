import PhoneIcon from '../assets/icons/phone.svg?react';
import ComputerIcon from '../assets/icons/computer.svg?react';
import SmartWatchIcon from '../assets/icons/category-smart-watch.svg?react';
import CameraIcon from '../assets/icons/camera.svg?react';
import HeadPhonesIcon from '../assets/icons/headphones.svg?react';
import GamingIcon from '../assets/icons/gaming.svg?react';

const categories = [
    {
        id: 1,
        name: 'Phones',
        path: '/phones',
        icon: PhoneIcon,
    },
    {
        id: 2,
        name: 'Computers',
        path: '/computers',
        icon: ComputerIcon,
    },
    {
        id: 3,
        name: 'SmartWatch',
        path: '/smartWatch',
        icon: SmartWatchIcon,
    },
    {
        id: 4,
        name: 'Camera',
        path: '/camera',
        icon: CameraIcon,
    },
    {
        id: 5,
        name: 'HeadPhones',
        path: '/headPhones',
        icon: HeadPhonesIcon,
    },
    {
        id: 6,
        name: 'Gaming',
        path: '/gaming',
        icon: GamingIcon,
    },
];

export default categories;

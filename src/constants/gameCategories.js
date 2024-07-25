import CameraIcon from '@assets/icons/camera.svg?react';
import SmartWatchIcon from '@assets/icons/category-smart-watch.svg?react';
import ComputerIcon from '@assets/icons/computer.svg?react';
import GamingIcon from '@assets/icons/gaming.svg?react';
import HeadPhonesIcon from '@assets/icons/headphones.svg?react';
import PhoneIcon from '@assets/icons/phone.svg?react';

const gameCategories = [
    {
        id: 1,
        name: 'Phones',
        path: 'electronic/phones',
        icon: PhoneIcon,
    },
    {
        id: 2,
        name: 'Computers',
        path: 'electronic/computers',
        icon: ComputerIcon,
    },
    {
        id: 3,
        name: 'SmartWatch',
        path: 'electronic/smart-watch',
        icon: SmartWatchIcon,
    },
    {
        id: 4,
        name: 'Cameras',
        path: 'electronic/cameras',
        icon: CameraIcon,
    },
    {
        id: 5,
        name: 'HeadPhones',
        path: 'electronic/headphones',
        icon: HeadPhonesIcon,
    },
    {
        id: 6,
        name: 'Gaming',
        path: 'electronic/gaming',
        icon: GamingIcon,
    },
];

export default gameCategories;

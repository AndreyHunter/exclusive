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
        path: 'electronics/phones',
        icon: PhoneIcon,
    },
    {
        id: 2,
        name: 'Computers',
        path: 'electronics/computers',
        icon: ComputerIcon,
    },
    {
        id: 3,
        name: 'SmartWatch',
        path: 'electronics/smart-watch',
        icon: SmartWatchIcon,
    },
    {
        id: 4,
        name: 'Cameras',
        path: 'electronics/cameras',
        icon: CameraIcon,
    },
    {
        id: 5,
        name: 'HeadPhones',
        path: 'electronics/headphones',
        icon: HeadPhonesIcon,
    },
    {
        id: 6,
        name: 'Gaming',
        path: 'electronics/gaming',
        icon: GamingIcon,
    },
];

export default gameCategories;

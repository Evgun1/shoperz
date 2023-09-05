import Facebook from '../image/icons/facebook.svg';
import Instagram from '../image/icons/instagram.svg';
import inkedIn from '../image/icons/inkedIn.svg';
import Twitter from '../image/icons/twitter.svg';
import YouTube from '../image/icons/youtube.svg';

import Track from '../image/icons/track.svg';
import Shop from '../image/icons/shop.svg';
import Settings from '../image/icons/settings.svg';

import Language from '../image/icons/language.svg';
import Currency from '../image/icons/currency.svg';

export const MEDIA = [
    {
        link: '',
        img: {
            src: Facebook,
            alt: '',
        },
    },
    {
        link: '',
        img: {
            src: Instagram,
            alt: '',
        },
    },
    {
        link: '',
        img: {
            src: inkedIn,
            alt: '',
        },
    },
    {
        link: '',
        img: {
            src: Twitter,
            alt: '',
        },
    },
    {
        link: '',
        img: {
            src: YouTube,
            alt: '',
        },
    },
];

export const MENU = [
    {
        text: 'Track Order',
        img: {
            src: Track,
            alt: '',
        },
    },
    {
        text: 'Shop',
        img: {
            src: Shop,
            alt: '',
        },
    },
    {
        text: 'Settings',
        img: {
            src: Settings,
            alt: '',
        },
    },
];
export const SET = [
    {
        label: 'Language',
        img: {
            src: Language,
            alt: '',
        },
        options : [
            {
                value: 'english',
                label: 'English',
            },
            {
                value: 'ua',
                label: "Ukraini"
            }
        ],
    },
    {
        label: 'Currency',
        img: {
            src: Currency,
            alt: '',
        },
        options: [
            {
                value: 'usd',
                label: 'USD'
            }
        ]
    },
];

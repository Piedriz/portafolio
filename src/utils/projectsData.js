//icons
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
//images
import cryptoinfo from '../images/project-images/cryptoinfo-image.png';
import dreamshop from '../images/project-images/dreamshop-image.png';
import mytasks from '../images/project-images/mytasks-image.png';
import newerastore from '../images/project-images/newerastore-image.png';
import touristapp from '../images/project-images/touristapp-image.png';
import waterquality from '../images/project-images/waterquality-image.png';
//animations
import cianim from '../images/project-animations/cryptoinfo-animation.gif';
import wqanim from '../images/project-animations/waterquality-animation.gif';
import dsanim from '../images/project-animations/dreamshop-animation.gif';
import mtanim from '../images/project-animations/mytasks-animation.gif';
import nesanim from '../images/project-animations/newerastore-animation.gif';
import taanim from '../images/project-animations/touristapp-animation.gif';

export const projectsData = [
    {
        id:5,
        title: 'CryptoInfo',
        description: 'CryptoInfo es una página web que brinda información acerca de las principales criptomonedas del mercado',
        image: cryptoinfo,
        gif: cianim,
        imageAlt: "CryptoInfo image",
        tags:["ReactJS","Css",],
        links:[
            {
                icon: GitHubIcon,
                href: "https://github.com/Piedriz/crypto-info.git",
            },
            {
                icon: OpenInNewIcon,
                href: "https://piedriz.github.io/crypto-info/",
            },
        ],
    },
    {
        id: 1,
        title: 'NewEra Store',
        description: 'NewEra Store es un simple ecommerce que integra todos los hooks de ReactJS junto a la API de PayPal para realizar pagos online. Desarrollado como proyecto para el curso profesional de React Hooks de Platzy.',
        image: newerastore,
        gif: nesanim,
        imageAlt: "NewEra Store image",
        tags:["ReactJS","Css"],
        links:[
            {
                icon: GitHubIcon,
                href: "https://github.com/Piedriz/new-era-store",
            },
            {
                icon: OpenInNewIcon,
                href: "https://new-era-store-2be55.web.app/",
            },
        ],
    },
    {
        id:2,
        title: 'TouristApp',
        description: 'TouristApp es un sitio web orientado al turismo en el cual podemos crear una cuenta personal para aprender, conocer y gestionar sitios turisticos de Colombia.',
        image: touristapp,
        gif: taanim,
        imageAlt: "TouristApp image",
        tags:["ReactJS","NodeJs","MongoDB","Materialize"],
        links:[
            {
                icon: GitHubIcon,
                href: "https://github.com/Piedriz/TouristApp.git",
            },
            {
                icon: OpenInNewIcon,
                href: "https://touristapp-production.up.railway.app",
            },
        ],
    },
    {
        id:4,
        title: 'MyTasks',
        description: 'MyTasks es una aplicación web para asignar tareas a realizar en tu día a día y estructurar tu agenda.',
        image: mytasks,
        gif: mtanim,
        imageAlt: "MyTasks image",
        tags:["ReactJS","Styled-Components",],
        links:[
            {
                icon: GitHubIcon,
                href: "https://github.com/Piedriz/MyTasks.git",
            },
            {
                icon: OpenInNewIcon,
                href: "https://piedriz.github.io/MyTasks/",
            },
        ],
    },
    {
        id:6,
        title: 'WaterQuality',
        description: 'WaterQuality es una página web que predice la potabilidad del agua. Utiliza un modelo de machine learning entrenado con una base de datos, para realizar la predicción',
        image: waterquality,
        gif: wqanim,
        imageAlt: "WaterQuality image",
        tags:["ReactJS","Python",],
        links:[
            {
                icon: GitHubIcon,
                href: "https://github.com/Piedriz/WaterQuality.git",
            },
        ],
    },
    {
        id:3,
        title: 'DreamShop',
        description: 'DreamShop una página web de ventas online creado con ReactJS usando como guia los temas que Shopify suministra para crear un ecommerce en condiciones',
        image: dreamshop,
        gif: dsanim,
        imageAlt: "DreamShop image",
        tags:["ReactJS","Css"],
        links:[
            {
                icon: GitHubIcon,
                href: "https://github.com/Piedriz/dream-shop.git",
            },
            {
                icon: OpenInNewIcon,
                href: "https://piedriz.github.io/dream-shop/",
            },
        ],
    },
]
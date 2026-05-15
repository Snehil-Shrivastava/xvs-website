import projectsCardSVG from '@/public/svg/project-card-svg.svg'
import yearsCardSVG from '@/public/svg/years-card-svg.svg'
import peopleCardSVG from '@/public/svg/people-card-svg.svg'
import ratingCardSVG from '@/public/svg/rating-card-svg.svg'

export const NavMenuLinksMain = [
    {
        id: 1,
        label: 'About',
        url: '/about'
    },
    {
        id: 2,
        label: 'Services',
        url: '/services'
    },
    {
        id: 3,
        label: 'Work',
        url: '/work'
    },
    {
        id: 4,
        label: 'Contact',
        url: '/contact'
    },
]

export const NavMenuLinksBody = [
    {
        id: 1,
        heading: 'Branding',
        subheading: 'Identity and Design',
        url: '/'
    },
    {
        id: 2,
        heading: 'UI/UX',
        subheading: 'Interface and Experience',
        url: '/'
    },
    {
        id: 3,
        heading: 'Graphic Design',
        subheading: 'Print and Digital',
        url: '/'
    },
    {
        id: 4,
        heading: 'Web and App',
        subheading: 'Design and Development',
        url: '/'
    },
    {
        id: 5,
        heading: 'Editing and Motion Graphics',
        subheading: 'Motion Craft',
        url: '/'
    },
    {
        id: 6,
        heading: '3D Products and Animations',
        subheading: 'Design and Modelling',
        url: '/'
    },
]

export const HomeStatsData = [
    {
        id: 1,
        cardTitle: 'Projects',
        cardStat: '500+',
        cardText1: 'meaningful impact on businesses',
        cardText2: 'with our design projects',
        descriptor: '',
        SVGIcon: projectsCardSVG
    },
    {
        id: 2,
        cardTitle: 'Years',
        cardStat: '10',
        cardText1: 'years of working with our customers',
        cardText2: 'to improve their design footprint',
        descriptor: '',
        SVGIcon: yearsCardSVG
    },
    {
        id: 3,
        cardTitle: 'People',
        cardStat: '12',
        cardText1: 'talented professionals using their',
        cardText2: 'skills to bring designs to life',
        descriptor: '',
        SVGIcon: peopleCardSVG
    },
    {
        id: 4,
        cardTitle: 'Rating',
        cardStat: '4.9',
        cardText1: 'average ORR* awarded by our customers',
        cardText2: '',
        descriptor: 'ORR = Overall Review Rating',
        SVGIcon: ratingCardSVG
    },
]

export const HomeServicesData = [
    {
        id: 1,
        cardTitle: "Branding",
        cardDesc: "Thoughtful, purposeful designs that shape identity.",
        gifSrc: "/gifs/3DProductRenderAndAnimation.webp",
        gifAlt: "Branding",
        gifClass: "scale-150",
        imgContainerClass: "absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container transition-all duration-100 ease-linear",
        // animationData: BrandingAnimation
    },
    {
        id: 2,
        cardTitle: "Graphic Design",
        cardDesc: "From pixel to paper - designing visually connecting designs.",
        gifSrc: "/gifs/Branding.webp",
        gifAlt: "Graphic Design",
        gifClass: "scale-80 -top-30",
        imgContainerClass: "absolute max-sm:top-10 top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container transition-all duration-100 ease-linear",
        // animationData: GraphicDesignAnimation
    },
    {
        id: 3,
        cardTitle: "Editing and Motion Graphics",
        cardDesc: "Storytelling with fluid animations and clean edits.",
        gifSrc: "/gifs/Graphicdesign.webp",
        gifAlt: "Editing and Motion Graphics",
        gifClass: "scale-85 -top-40",
        imgContainerClass: "absolute max-sm:top-5 top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container transition-all duration-100 ease-linear",
        // animationData: MotionAnimation
    },
    {
        id: 4,
        cardTitle: "UI/UX",
        cardDesc: "Designing interfaces made for humans, connecting users with the idea of your brand.",
        gifSrc: "/gifs/Motion.webp",
        gifAlt: "UI/UX",
        gifClass: "scale-90 -top-30",
        imgContainerClass: "absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container transition-all duration-100 ease-linear",
        // animationData: UIAnimation
    },
    {
        id: 5,
        cardTitle: "Web and App",
        cardDesc: "Digital intuitive products, built for clarity.",
        gifSrc: "/gifs/UX-UI.webp",
        gifAlt: "Web and App",
        gifClass: "scale-90 -top-40",
        imgContainerClass: "absolute max-sm:top-8 top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container transition-all duration-100 ease-linear",
        // animationData: WebsiteAnimation
    },
    {
        id: 6,
        cardTitle: "3D Product and Animations",
        cardDesc: "Bridging imagination and experience through 3D designs and products.",
        gifSrc: "/gifs/Website.webp",
        gifAlt: "3D Product and Animations",
        gifClass: "scale-80 -top-40",
        imgContainerClass: "absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none gif-container transition-all duration-100 ease-linear",
        // animationData: ProductRenderAnimation
    },
]

export const HomeTestimonial = [
    {
        quote:
            "xVS Creations was organized, planning and executing the work well, while particularly excelling in design.",
        clientDesc: "Scott B. Knox, CEO, Sunlight HV LLP",
        url: "https://clutch.co/go-to-review/1dd89fea-a7bd-49a8-a3a5-f8aabdb66c8e/144289",
    },
    {
        quote:
            "They're able to absorb inputs well in order to deliver something relatively aligned with our requirements.",
        clientDesc: "Pukhraj Singh Kang, Founder & Director, Gecko Monaco",
        url: "https://clutch.co/go-to-review/1dd89fea-a7bd-49a8-a3a5-f8aabdb66c8e/182877",
    },
    {
        quote:
            "They were instrumental in helping us translate our vision for the website, prints, and customized videos.",
        clientDesc: "Ananat Agarwal, Operations Manager, Genius Unlocked Inc.",
        url: "https://clutch.co/go-to-review/1dd89fea-a7bd-49a8-a3a5-f8aabdb66c8e/3774",
    },
];

export const HomeClientLogos = [
    {
        id: 1,
        src: "/svg/Ashok_Leyland-Logo.svg",
        alt: "",
        imgClass: "w-15 sm:max-md:w-18 md:max-lg:w-20 lg:max-xl:w-24 xl:max-1440p:w-32 1440p:max-2xl:w-38 2xl:max-1920p:w-44 1920p:w-48 h-auto"
    },
    {
        id: 2,
        src: "/svg/Savills_logo.svg",
        alt: "",
        imgClass: "w-5 md:max-lg:w-6 lg:max-xl:w-8 xl:max-1440p:w-10 1440p:max-2xl:w-13 2xl:max-1920p:w-15 1920p:w-16 h-auto"
    },
    {
        id: 3,
        src: "/svg/Confederation_of_Indian_Industry_(CII).svg",
        alt: "",
        imgClass: "w-15 md:max-lg:w-18 lg:max-xl:w-22 xl:max-1440p:w-28 1440p:max-2xl:w-38 2xl:max-1920p:w-42 1920p:w-44 h-auto"
    },
    {
        id: 4,
        src: "/svg/Paytm_Logo.svg",
        alt: "",
        imgClass: "w-8 md:max-lg:w-10 lg:max-xl:w-12 xl:max-1440p:w-16 1440p:max-2xl:w-22 2xl:max-1920p:w-26 1920p:w-32 h-auto"
    },
    {
        id: 5,
        src: "/svg/invideo-seeklogo.svg",
        alt: "",
        imgClass: "w-14 md:max-lg:w-18 lg:max-xl:w-22 xl:max-1440p:w-28 1440p:max-2xl:w-32 2xl:max-1920p:w-38 1920p:w-42 h-auto"
    },
    {
        id: 6,
        src: "/svg/flighthouse.svg",
        alt: "",
        imgClass: "w-10 md:max-lg:w-12 lg:max-xl:w-14 xl:max-1440p:w-18 1440p:max-2xl:w-24 2xl:max-1920p:w-30 1920p:w-32 h-auto"
    },
    {
        id: 7,
        src: "/svg/CliniExperts.svg",
        alt: "",
        imgClass: "w-18 sm:max-md:w-22 md:max-lg:w-24 lg:max-xl:w-28 xl:max-1440p:w-42 1440p:max-2xl:w-52 2xl:max-1920p:w-62 1920p:w-64 h-auto"
    },
    {
        id: 8,
        src: "/svg/ACC_Limited_logo.svg",
        alt: "",
        imgClass: "w-8 lg:max-xl:w-10 xl:max-1440p:w-14 1440p:max-2xl:w-18 2xl:max-1920p:w-20 1920p:w-21 h-auto"
    },
    // {
    //     id: 9,
    //     src: (
    //         <Amity className="max-sm:w-[42px] sm:max-md:w-[52px] md:max-lg:w-14 lg:max-xl:w-[62px] xl:max-1440p:w-[88px] 1440p:max-2xl:w-[99px] 2xl:max-1920p:w-[110px]" />
    //     ),
    // },
    {
        id: 10,
        src: "/svg/Milaan-Foundation.svg",
        alt: "",
        imgClass: "w-7 md:max-lg:w-10 lg:max-xl:w-14 xl:max-1440p:w-18 1440p:max-2xl:w-20 2xl:max-1920p:w-22 1920p:w-26 h-auto"
    },
    {
        id: 11,
        src: "/svg/Yi Logo.svg",
        alt: "",
        imgClass: "w-12 md:max-lg:w-15 lg:max-xl:w-18 xl:max-1440p:w-24 1440p:max-2xl:w-28 2xl:max-1920p:w-30 1920p:w-32 h-auto"
    },
    {
        id: 12,
        src: "/svg/UNICEF.svg",
        alt: "",
        imgClass: "w-18 md:max-lg:w-22 lg:max-xl:w-24 xl:max-1440p:w-30 1440p:max-2xl:w-36 2xl:max-1920p:w-40 1920p:w-44 h-auto"
    },
    {
        id: 13,
        src: "/svg/DonateKart.svg",
        alt: "",
        imgClass: "w-18 md:max-lg:w-20 lg:max-xl:w-24 xl:max-1440p:w-32 1440p:max-2xl:w-42 2xl:max-1920p:w-46 1920p:w-48 h-auto"
    },
    {
        id: 14,
        src: "/svg/Zavenir Daubert.svg",
        alt: "",
        imgClass: "w-15 md:max-lg:w-18 lg:max-xl:w-20 xl:max-1440p:w-26 1440p:max-2xl:w-32 2xl:max-1920p:w-36 1920p:w-40 h-auto"
    },
    {
        id: 15,
        src: "/svg/SuperHouse.svg",
        alt: "",
        imgClass: "w-9 md:max-lg:w-11 lg:max-xl:w-13 xl:max-1440p:w-18 1440p:max-2xl:w-20 2xl:max-1920p:w-22 1920p:w-24 h-auto"
    },
    {
        id: 16,
        src: "/svg/Tedx.svg",
        alt: "",
        imgClass: "w-9 md:max-lg:w-11 lg:max-xl:w-13 xl:max-1440p:w-18 1440p:max-2xl:w-20 2xl:max-1920p:w-22 1920p:w-24 h-auto"
    },
    {
        id: 17,
        src: "/svg/Danbro Logo.svg",
        alt: "",
        imgClass: "w-10 md:max-lg:w-12 lg:max-xl:w-14 xl:max-1440p:w-20 1440p:max-2xl:w-24 2xl:max-1920p:w-26 1920p:w-30 h-auto"
    },
    {
        id: 18,
        src: "/svg/Mozilla_logo_(2017–2024).svg",
        alt: "",
        imgClass: "w-10 md:max-lg:w-12 lg:max-xl:w-14 xl:max-1440p:w-20 1440p:max-2xl:w-24 2xl:max-1920p:w-26 1920p:w-30 h-auto"
    },
];
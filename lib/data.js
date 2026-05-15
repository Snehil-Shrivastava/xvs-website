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
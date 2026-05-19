import projectsCardSVG from '@/public/svg/project-card-svg.svg'
import yearsCardSVG from '@/public/svg/years-card-svg.svg'
import peopleCardSVG from '@/public/svg/people-card-svg.svg'
import ratingCardSVG from '@/public/svg/rating-card-svg.svg'

import Behance from '@/public/images/behance.png'
import Instagram from '@/public/images/instagram.png'
import Dribble from '@/public/images/dribble.png'
import Facebook from '@/public/images/facebook.png'
import Linkedin from '@/public/images/linkedin.png'
import Twitter from '@/public/images/twitter.png'

import AboutIdeasProcess from '@/public/svg/AboutIdeasProcess.svg'
import AboutBlendingProcess from '@/public/svg/AboutBlendingProcess.svg'

import Vinay from "@/public/images/members/Vinay.webp";
import Sanjeev from "@/public/images/members/Sanjeev.webp";
import Gyan from "@/public/images/members/Gyan.webp";
import Himanshu from "@/public/images/members/Himanshu.webp";
import Mehul from "@/public/images/members/Mehul.webp";
import Joshua from "@/public/images/members/Joshua.webp";
import Devanshu from "@/public/images/members/Devanshu.webp";
import Snehil from "@/public/images/members/Snehil.webp";
import Bhumika from "@/public/images/members/Bhumika.webp";

import proofReader from '@/public/svg/Proof Reading.svg'
import motionGraphics from '@/public/svg/Motion Graphics.svg'
import graphicDesigner from '@/public/svg/Graphic Design.svg'

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
        imgClass: "w-12 md:max-lg:w-15 lg:max-xl:w-18 xl:max-1440p:w-24 1440p:max-2xl:w-28 2xl:max-1920p:w-30 1920p:w-32 h-auto"
    },
    {
        id: 11,
        src: "/svg/Yi Logo.svg",
        alt: "",
        imgClass: "w-7 md:max-lg:w-10 lg:max-xl:w-14 xl:max-1440p:w-18 1440p:max-2xl:w-20 2xl:max-1920p:w-22 1920p:w-26 h-auto"
    },
    {
        id: 12,
        src: "/svg/UNICEF.svg",
        alt: "",
        imgClass: "w-12 md:max-lg:w-15 lg:max-xl:w-18 xl:max-1440p:w-24 1440p:max-2xl:w-28 2xl:max-1920p:w-30 1920p:w-32 h-auto"
    },
    {
        id: 13,
        src: "/svg/DonateKart.svg",
        alt: "",
        imgClass: "w-18 md:max-lg:w-22 lg:max-xl:w-24 xl:max-1440p:w-30 1440p:max-2xl:w-36 2xl:max-1920p:w-40 1920p:w-44 h-auto"
    },
    {
        id: 14,
        src: "/svg/Zavenir Daubert.svg",
        alt: "",
        imgClass: "w-18 md:max-lg:w-20 lg:max-xl:w-24 xl:max-1440p:w-32 1440p:max-2xl:w-42 2xl:max-1920p:w-46 1920p:w-48 h-auto"
    },
    {
        id: 15,
        src: "/svg/SuperHouse.svg",
        alt: "",
        imgClass: "w-15 md:max-lg:w-18 lg:max-xl:w-20 xl:max-1440p:w-26 1440p:max-2xl:w-32 2xl:max-1920p:w-36 1920p:w-40 h-auto"
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
        imgClass: "w-9 md:max-lg:w-11 lg:max-xl:w-13 xl:max-1440p:w-18 1440p:max-2xl:w-20 2xl:max-1920p:w-22 1920p:w-24 h-auto"
    },
    {
        id: 18,
        src: "/svg/Mozilla_logo_(2017–2024).svg",
        alt: "",
        imgClass: "w-10 md:max-lg:w-12 lg:max-xl:w-14 xl:max-1440p:w-20 1440p:max-2xl:w-24 2xl:max-1920p:w-26 1920p:w-30 h-auto"
    },
];

export const Socials = [
    {
        img: Behance,
        link: "https://www.behance.net/xVSCreations",
        alt: "behance",
        className: "w-6"
    },
    {
        img: Instagram,
        link: "https://www.instagram.com/xvscreations",
        alt: "instagram",
        className: "w-5"
    },
    {
        img: Dribble,
        link: "https://www.dribbble.com/xvscreations",
        alt: "dribble",
        className: "w-5"
    },
    {
        img: Facebook,
        link: "https://www.facebook.com/xVSCreations",
        alt: "facebook",
        className: "w-5"
    },
    {
        img: Linkedin,
        link: "https://www.linkedin.com/company/xvs-creations",
        alt: "linkedin",
        className: "w-5"
    },
    {
        img: Twitter,
        link: "https://x.com/xvscreations",
        alt: "twitter",
        className: "w-5"
    },
]

export const FooterServices = [
    {
        id: 1,
        heading: 'Branding',
        subheading: 'Identity and Design',
    },
    {
        id: 2,
        heading: 'UI/UX',
        subheading: 'Interface and Experience',
    },
    {
        id: 3,
        heading: 'Graphic Design',
        subheading: 'Print and Digital',
    },
    {
        id: 4,
        heading: 'Web and App',
        subheading: 'Design and Development',
    },
    {
        id: 5,
        heading: 'Editing and Motion Graphics',
        subheading: 'Motion Craft',
    },
    {
        id: 6,
        heading: '3D Products and Animations',
        subheading: 'Design and Modelling',
    },
]

export const AboutProcessData = [
    {
        id: 1,
        cardTitle: 'Ideas',
        cardDesc: "It's really that simple, most of our ideas come from knowing people who are passionately working for what they believe and trying to make it happen. So we listen.",
        cardIcon: AboutIdeasProcess,
        cardIconClass: "origin-center scale-120 translate-x-1.5 translate-y-0.5"
    },
    {
        id: 2,
        cardTitle: 'Blending',
        cardDesc: "Matching those ideas with the tools available and even going out on a limb to find something new that fits perfectly in an ever-evolving work.",
        cardIcon: AboutBlendingProcess,
        cardIconClass: "origin-center scale-120"
    },
]

export const ClientTestimonialData = {
    clutch: [
        {
            id: 1,
            name: "Scott B. Knox",
            designation: "CEO, Sunlight HV LLP",
            rating: "5.0",
            stars: 5,
            review:
                `"The team produced excellent results, delivering a site that generated good feedback from everyone, from users to in-house team members. xVS Creations was organized, planning and executing the work well, while particularly excelling in design."`,
            reviewLink: 'https://clutch.co/go-to-review/1dd89fea-a7bd-49a8-a3a5-f8aabdb66c8e/144289'
        },
        {
            id: 2,
            name: "Dhirendra Singh",
            designation: "CEO & Co-Founder, Milaan Foundation",
            rating: "5.0",
            stars: 5,
            review:
                `"Internal and external feedback on xVS Creations’s work has been extremely positive. Along with their design expertise, their flexibility was also noteworthy. Customers can expect an understanding team that meets expectations."`,
            reviewLink: 'https://clutch.co/go-to-review/1dd89fea-a7bd-49a8-a3a5-f8aabdb66c8e/141105'
        },
        {
            id: 3,
            name: "Pukhraj Singh Kang",
            designation: "Founder & Director, Gecko Monaco",
            rating: "5.0",
            stars: 5,
            review:
                `"The client has been pleased with xVS Creations' services. The team's ability to deliver well-thought-out outputs that align with the client's vision is attributed to their knowledge, technical expertise, and creativity. Moreover, they're receptive to feedback and work with a can-do attitude."`,
            reviewLink: 'https://clutch.co/go-to-review/1dd89fea-a7bd-49a8-a3a5-f8aabdb66c8e/182877'
        },
    ],
    sortlist: [
        {
            id: 1,
            name: "Atullya Narayan Srivastava",
            designation: "Dual qualified, Solicitor in England and Wales and Advocate in India at To Enlyt",
            rating: "5.0",
            stars: 5,
            review:
                `"The website launched successfully and performed stably, with a 100% success rate for the payment gateway and a 30% increase in homepage engagement. xVS Creations provided reliable and efficient project management, was extremely responsive to feedback, and communicated excellently."`,
            reviewLink: 'https://www.sortlist.com/agency/xvs-creations'
        },
        {
            id: 2,
            name: "Shashank Srivastava",
            designation: "Executive Officer at Confederation of Indian Industry",
            rating: "5.0",
            stars: 5,
            review:
                `"The websites and other material delivered by xVS Creations has been very effective. Their team worked quickly and creatively at all times."`,
            reviewLink: 'https://www.sortlist.com/agency/xvs-creations'
        },
        {
            id: 3,
            name: "Manish Badani",
            designation: "Director at Divit Industries",
            rating: "5.0",
            stars: 5,
            review:
                `"The vendor has provided effective services in a time-efficient manner. Customers have responded well to the designs. The team has excellent communication skills."`,
            reviewLink: 'https://www.sortlist.com/agency/xvs-creations'
        },
    ]
}

export const AboutMembersData = [
    {
        id: 1,
        name: `Vinay Sharma`,
        designation: `Founder, Chief Design Officer`,
        image: Vinay,
    },
    {
        id: 2,
        name: `Sanjeev Sharma`,
        designation: `Co-Founder, Chief Executive Officer`,
        image: Sanjeev,
    },
    {
        id: 3,
        name: `Gyan Sharma`,
        designation: `Motion Graphic Artist`,
        image: Gyan,
    },
    {
        id: 4,
        name: `Himanshu Joshi`,
        designation: `3D Visual Editor`,
        image: Himanshu,
    },
    {
        id: 5,
        name: `Mehul Kumar`,
        designation: `Senior Video Editor`,
        image: Mehul,
    },
    {
        id: 6,
        name: `Joshua Sumiter Singh`,
        designation: `Video Editor`,
        image: Joshua,
    },
    {
        id: 7,
        name: `Devanshu Kumar`,
        designation: `Video Editor`,
        image: Devanshu,
    },
    {
        id: 9,
        name: `Snehil Srivastava`,
        designation: `Website Developer`,
        image: Snehil,
    },
    {
        id: 11,
        name: `Bhumika Chaurasia`,
        designation: `Graphic Designer`,
        image: Bhumika,
    },
]

export const AboutGlassdoorReview = [
    {
        id: 1,
        icon: proofReader,
        name: "Senior Proofreader and Copy Editor",
        review: "Working here has been a beautiful balance of chill vibes and creative freedom. The environment is light, encouraging, and most importantly — pressure-free, which makes showing up every day feel effortless and positive.",
        stars: 5,
        reviewDate: "07 July 2025"
    },
    {
        id: 2,
        icon: motionGraphics,
        name: "Motion Graphics Artist",
        review: "The work culture here is both inspiring and supportive. What I appreciate most is the team spirit — everyone here is passionate, driven, and always willing to help each other grow. Deadlines are respected, creativity is celebrated, and there's always room to innovate.",
        stars: 5,
        reviewDate: "30 July 2025"
    },
    {
        id: 3,
        icon: graphicDesigner,
        name: "Designer",
        review: "Seriously, the vibe here is awesome, super supportive peeps. Pay is pretty good, and the benefits are top-notch, they really care.",
        stars: 5,
        reviewDate: "07 July 2025"
    },
]
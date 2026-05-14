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
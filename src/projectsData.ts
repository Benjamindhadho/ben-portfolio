interface Metric {
  value: string
  label: string
}

interface CaseSection {
  eyebrow: string
  title: string
  body?: string
  steps?: {
    title: string
    body: string
  }[]
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  tags: string[]
  year: string
  link?: string
  featured?: boolean
  overview: string
  role: string
  stack: string[]
  metrics: Metric[]
  caseSections: CaseSection[]
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'shuleyetu',
    title: 'ShuleYetu',
    description: 'A real-time school management platform for results, fees, events, and communication.',
    tags: ['React Native', 'Django', 'Strawberry GraphQL'],
    year: '2026',
    featured: true,
    overview: 'ShuleYetu helps schools manage student results, fees, events, teachers, parents, and school communication from one platform.',
    role: 'Fullstack Developer',
    stack: ['React Native', 'Django', 'GraphQL', 'PostgreSQL'],

    metrics: [
      {
        value: 'Multi-role',
        label: 'Separate flows for admins, teachers, parents, and bursars.',
      },
      {
        value: 'GraphQL',
        label: 'Role-aware queries and mutations for school data.',
      },
      {
        value: 'Mobile-first',
        label: 'Built for practical access on phones and tablets.',
      },
    ],

    caseSections: [
      {
        eyebrow: 'Problem',
        title: 'The challenge',
        body:
          'The main challenge was piecing together the many features such a platform requires — school tenants, role permissions, complex model relationships, results, fees, events, and a clear mobile interface — in a way that makes complex school information easy to access and act on.',
      },
      {
        eyebrow: 'Process',
        title: 'Design and development approach',
        steps: [
          {
            title: 'Structure',
            body: 'Defined the core school roles, screens, models, and data flow.',
          },
          {
            title: 'Build',
            body: 'Implemented reusable React Native UI components and Django GraphQL integration.',
          },
          {
            title: 'Refine',
            body: 'Improved hierarchy, empty states, loading states, and role-based user flows.',
          },
        ],
      },
      {
        eyebrow: 'Result',
        title: 'Outcome',
        body:
          'The final product delivers a practical school platform with a polished interface, maintainable backend structure, and clear flows for different users.',
      },
    ],
  }, 

    {
    id: '02',
    slug: 'sokoletu',
    title: 'SokoLetu',
    description:
      'A mobile-first marketplace platform for listing products, browsing categories, and connecting buyers with sellers.',
    tags: ['React Native', 'Django', 'REST API'],
    year: '2026',
    overview:
      'SokoLetu is a marketplace app that allows users to list products, browse items by category and user location, view product details, and contact sellers directly. It includes feautures like authentication, product listing with images and likes functionality, wishlists, filtering and sorting, search, product ratings, social media links,  and more',
    role: 'Fullstack Developer',
    stack: ['React Native', 'Django', 'Django REST Framework', 'PostgreSQL'],

    metrics: [
      {
        value: 'Marketplace',
        label: 'Product listing, browsing, filtering, and seller contact flows.',
      },
      {
        value: 'REST API',
        label: 'Backend endpoints for products, categories, images, and users.',
      },
      {
        value: 'Mobile-first',
        label: 'Designed for smooth usage on phones with clear product cards.',
      },
    ],

    caseSections: [
      {
        eyebrow: 'Problem',
        title: 'The challenge',
        body:
          'The main challenge was building a simple marketplace experience where users can easily add products, view categories, browse listings, and contact sellers without making the interface feel crowded or difficult to use.',
      },
      {
        eyebrow: 'Process',
        title: 'Design and development approach',
        steps: [
          {
            title: 'Structure',
            body: 'Defined product models, category relationships, image handling, and seller information flow.',
          },
          {
            title: 'Build',
            body: 'Created REST API endpoints and connected them to reusable React Native screens and product cards.',
          },
          {
            title: 'Refine',
            body: 'Improved category filtering, product display, empty states, and mobile spacing for easier browsing.',
          },
        ],
      },
      {
        eyebrow: 'Result',
        title: 'Outcome',
        body:
          'The final product provides a clean marketplace flow with organized categories, readable product details, and a practical mobile-first buying and selling experience.',
      },
    ],
  },
]
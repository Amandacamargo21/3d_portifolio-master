import {
  mobile,
  backend,
  creator,
  web,
  all,
  L,
  link,
  loja,
  carol,
  teilor,
  netflix,
  carolphoto,
  vanessaphoto,
  publicacoesonline_logo,
  heli,
  terra,
} from '../assets'

export const navLinks = [
  // {
  //   id: 'language',
  //   title: 'Language',
  // },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'github',
    title: 'Github',
    url: 'https://github.com/amandacamargo21'
  },
  {
    id: 'contact',
    title: 'Contact',
    url: 'https://w.app/ql10ti'
  },
  
]

const services = [
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: creator,
  },
  {
    title: 'Database Analist',
    icon: creator,
  },
]

const experiences = [
  {
    title: 'Backend developer/Systems analyst',
    company_name: 'Helisul Aviação',
    icon: heli,
    iconBg: '#383E56',
    date: 'August 2024 - Present',
    points: [
      'Developing backend solutions with C# .NET and mobile features using Kotlin, focusing on performance and scalability.',
      'Creating responsive interfaces with JavaScript, HTML, and CSS to ensure a seamless user experience.',
      'Integrating APIs and backend services with Node.js to enhance interoperability with external platforms.',
      'Managing projects independently, overseeing everything from planning to deployment while ensuring quality and deadlines.',
      'Continuously testing and monitoring systems to maintain stability and quickly resolve production issues.',
      'Designing modular and sustainable code architectures, keeping scalability and long-term maintainability in mind.',
      'Collaborating closely with stakeholders to align deliveries with business goals, implementing new features and improvements regularly.'
    ],
  },
  {
    title: 'Fullstack developer',
    company_name: 'Publicações Online',
    icon: publicacoesonline_logo,
    iconBg: '#383E56',
    date: 'July 2023 - August 2024',
    points: [
      'Collaborating with cross-functional teams, I develop effective software solutions in Php, Javascript, Html, and CSS.',
      'I conduct tests to ensure software quality and continuously monitor system integrity',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Implementing new features, I also maintain code standards for scalability and maintainability while designing scalable architectures for high user volumes',
    ],
  },
  {
    title: 'Fullstack developer',
    company_name: 'Allstrategy',
    icon: all,
    iconBg: '#383E56',
    date: 'July 2022 - May 2023',
    points: [
      'Developing and maintaining web applications using PHP, Zend, HTML, CSS, Javascript, JQuery, and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Freelancer Developer',
    company_name: 'SevenTech',
    icon: L,
    iconBg: '#E6DEDD',
    date: 'March 2022 - Present',
    points: [
      'Developing responsive layouts using technologies such as HTML, CSS, and JavaScript',
      'Implementing animations and visual effects using libraries like jQuery, GSAP, and CSS3',
      'Integrating with third-party APIs to obtain dynamic data and content.',
      'Usability and compatibility testing across different browsers and devices.',
      'Optimizing site or application performance using techniques such as file minification and asynchronous loading.',
      'Researching and implementing new technologies and trends to improve user experience and development efficiency.',
      'As a freelancer, I am also responsible for managing my own time and projects, communicating with clients, and ensuring the delivery of high-quality results within the established deadlines.',
    ],
  },
]

const testimonials = [
 
  {
    testimonial:
      'Amanda successfully captured the essence of my brand and delivered something beyond my expectations. It was truly an amazing experience.',
    name: 'Caroline Castro',
    designation: 'CEO',
    company: 'Carol Castro MakeUp',
    image: carolphoto,
  },
  {
    testimonial:
      "After Amanda optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Vanessa Teilor',
    designation: 'CTO',
    company: 'Teilor advocacia',
    image: vanessaphoto,
  },
]

const projects = [
  {
    name: 'Carol Castro MakeUp',
    description:
      'The website is designed with responsiveness in mind, ensuring a seamless experience across different devices and screen sizes. The visual design not only captures the essence of the clients brand identity but also ensures a consistent and engaging experience for visitors. The project showcases a strong commitment to delivering a high-quality, user-centric website that highlights the makeup artists services and expertise. With a combination of HTML, CSS, and JavaScript libraries, the site incorporates smooth scrolling and captivating image sliders.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
    ],
    image: carol,
    source_code_link:
      'https://github.com/Amandacamargo21/Carol-Castro-MakeUp.git',
    project_link: 'https://makeupbycarolinecastro.com',
  },
  {
    name: 'Teilor Advocacia',
    description:
      'This is responsive website designed to provide a user-friendly experience. With a modern and intuitive design, the site adapts to different devices, ensuring its functionality on all devices. It features clear navigation, relevant content, attractive design, and interactive features. Additionally, the site provides information about the companys services, areas of expertise, team of professionals, and location. Responsiveness and user experience are prioritized in this project, aiming to deliver a positive experience for users interested in the services',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JQuery',
        color: 'pink-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: teilor,
    source_code_link: 'https://github.com/Amandacamargo21/Teilor-Advocacia.git',
    project_link: 'https://teilor-advocacia.vercel.app/',
  },
  {
    name: 'Terravia',
    description:
      'Developed with the aim of providing a robust platform for the sale of agricultural and road implements, focusing on product display, quote requests, and building business partnerships. The responsive design ensures the site is accessible on any device, from desktops to smartphones, allowing customers to easily browse product categories. Features such as interactive catalogs, quick quote forms, and a dedicated area for corporate partnerships were implemented to streamline the purchasing process and strengthen the company’s business relationships.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS/SCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: terra,
    source_code_link: 'https://github.com/Amandacamargo21/Implenovo',
    project_link: 'https://terravia.vercel.app/',
  },
  {
    name: 'Cara Store',
    description:
      'This responsive app showcases a visually appealing website design with a stylish header, user-friendly navigation, and adaptability. Key features like free shipping, online ordering, promotions, and 24/7 support are highlighted with icons and descriptions. It presents featured products with images, descriptions, ratings, and prices, allowing users to add items to their cart. Catchy banners promote special offers. Overall, it provides a delightful user experience, engaging users to explore and shop on the website.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS/SCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: loja,
    source_code_link:
      'https://github.com/Amandacamargo21/LojaOnline--Responsivo-.git',
    project_link: 'https://loja-online-9wuw.vercel.app/',
  },
]

export { services, experiences, testimonials, projects }

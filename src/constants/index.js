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
  fp
} from '../assets'

export const navLinks = [
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
    name: 'Família Provedor',
    description:
      "The Família Provedor Church website was designed to provide visitors with an intuitive and engaging experience. With a fully responsive design, it adapts seamlessly to any device, ensuring accessibility and smooth navigation. The platform features interactive sections for events, ministries, prayer requests, and donations, fostering a closer connection between the church and its community. Additionally, strategic features such as contact forms, online giving, and dynamic content updates enhance engagement and encourage active participation from members.",
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'CSS', color: 'green-text-gradient' },
      { name: 'JavaScript', color: 'pink-text-gradient' },
      { name: 'PHP', color: 'blue-text-gradient' },
    ],
    image: fp,
    source_code_link: 'https://github.com/Amandacamargo21',
    project_link: 'https://familiaprovedor.com.br/',
  },
  {
    name: 'Caroline Castro MakeUp',
    description:
      "Designed to offer a seamless experience across all devices, the Carol Castro MakeUp website reflects the brand’s visual identity while providing intuitive navigation. The project highlights the makeup artist’s services and expertise with a user-centered, responsive design. Technologies such as HTML, CSS, and JavaScript libraries were used to create smooth scrolling effects and immersive image sliders, ensuring a professional and captivating digital presence.",
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'CSS', color: 'green-text-gradient' },
      { name: 'JavaScript', color: 'pink-text-gradient' },
      { name: 'PHP', color: 'blue-text-gradient' },
    ],
    image: carol,
    source_code_link: 'https://github.com/Amandacamargo21/Carol-Castro-MakeUp.git',
    project_link: 'https://www.makeupbycarolinecastro.com/',
  },
  {
    name: 'Teilor Advocacia',
    description:
      "With a modern and responsive design, the Teilor Advocacia website delivers a user-friendly experience on any device. It was developed to clearly present the firm's services, practice areas, and professional team, ensuring that visitors can easily find the information they need. A simplified navigation structure, relevant content, and sophisticated design position the firm as a trusted authority in its field, reinforcing credibility and professionalism.",
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'CSS', color: 'green-text-gradient' },
      { name: 'JQuery', color: 'pink-text-gradient' },
      { name: 'JavaScript', color: 'pink-text-gradient' },
    ],
    image: teilor,
    source_code_link: 'https://github.com/Amandacamargo21/Teilor-Advocacia.git',
    project_link: 'https://teilor-advocacia.vercel.app/',
  },
  {
    name: 'Terravia',
    description:
      "Built to serve as a robust platform for the sale of agricultural and road equipment, the Terravia website focuses on product showcasing, quote requests, and business partnerships. Its responsive design ensures accessibility across all devices, from desktops to smartphones, allowing customers to browse product categories with ease. Interactive catalogs, quick quote request forms, and a dedicated corporate partnership section streamline the purchasing process and strengthen the company's business relationships.",
    tags: [
      { name: 'HTML', color: 'blue-text-gradient' },
      { name: 'CSS/SCSS', color: 'green-text-gradient' },
      { name: 'JavaScript', color: 'pink-text-gradient' },
    ],
    image: terra,
    source_code_link: 'https://github.com/Amandacamargo21/Implenovo',
    project_link: 'https://terravia.vercel.app/',
  },
];


export { services, experiences, testimonials, projects }

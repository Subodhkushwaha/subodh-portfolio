// Edit this file to update your portfolio content.
// Replace every '#' with your real link.

export const profile = {
  name: 'Subodh Kushwaha',
  shortName: 'Subodh K.',
  role: 'Java Backend Developer',
  intro:
    'I build and deploy full-stack web apps, with secure Spring Boot REST APIs behind them and 400+ solved DSA problems keeping the code efficient.',
  email: 'subodhkushwaha36@gmail.com',
  phone: '+91 80900 63170',
  phoneHref: 'tel:+918090063170',
  location: 'Ghaziabad, Uttar Pradesh, India',
  github: 'https://github.com/Subodhkushwaha',
  linkedin: '#',
  leetcode: '#',
  gfg: '#',
  liveErp: 'https://campus-hq-school-erp.vercel.app/',
  erpRepo: 'https://github.com/Subodhkushwaha/CampusHQ-School-ERP',
  bookMyShowRepo: '#',
}

export const navLinks = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
]

export const stats = [
  ['400+', 'DSA problems solved'],
  ['35+', 'REST APIs designed'],
  ['3', 'Full-stack projects'],
  ['2027', 'B.Tech graduation'],
]

export const about = [
  "I'm a B.Tech Computer Science student at Raj Kumar Goel Institute of Technology, Ghaziabad. I focus on **Java backend development**: designing REST APIs, modelling relational data, and protecting endpoints with Spring Security.",
  'I also build the frontend with HTML5, CSS3 and JavaScript, so I can ship a working feature end to end. My CampusHQ School ERP is deployed and live on Vercel. Daily DSA practice keeps my code efficient, and I\u2019m looking for an internship or entry-level role where I can build scalable, high-performance backend systems.',
]

export const skillGroups = [
  {
    title: 'Backend',
    wide: true,
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'JPA', 'JDBC', 'Servlets', 'RESTful API Design', 'JWT Authentication', 'RBAC', 'Maven', 'Exception Handling', 'Microservices (basics)'],
  },
  { title: 'Databases', items: ['MySQL', 'Relational Design', 'Query Optimization', 'Indexing', 'Transactions'] },
  { title: 'Frontend', items: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'] },
  { title: 'Deployment and tools', items: ['Git and GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Docker', 'Vercel deployment', 'CI/CD (basics)'] },
  { title: 'CS fundamentals and DSA', items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Arrays and Strings', 'Linked Lists', 'Stacks and Queues', 'Trees', 'Recursion', 'Complexity Analysis'] },
]

// side.kind: 'roles' shows role labels, 'endpoints' shows HTTP method + path
export const projects = [
  {
    title: 'CampusHQ School ERP',
    sub: 'Full-stack school management system | Deployed on Vercel',
    side: { kind: 'roles', rows: ['Admin', 'Principal', 'Teacher', 'Accountant', 'Student', 'Parent', 'Receptionist'] },
    bullets: [
      'Built and **deployed a full-stack ERP** for running a school, live on the web.',
      'Supports **seven user roles** (Admin, Principal, Teacher, Accountant, Student, Parent and Receptionist), each with its own login and access.',
      'Handled the full path from backend and database to frontend and **production deployment**.',
    ],
    links: [
      ['View live application', 'liveErp'],
      ['GitHub repository', 'erpRepo'],
    ],
  },
  {
    title: 'E-Commerce Application',
    sub: 'Java, Spring Boot, Spring Security, MySQL, JPA, Hibernate, REST APIs, HTML5, CSS3, JavaScript',
    side: {
      kind: 'endpoints',
      rows: [['get', 'GET', '/api/products'], ['get', 'GET', '/api/cart'], ['post', 'POST', '/api/cart/items'], ['post', 'POST', '/api/orders'], ['get', 'GET', '/api/orders/{id}'], ['put', 'PUT', '/api/admin/products'], ['del', 'DEL', '/api/admin/products/{id}']],
    },
    bullets: [
      'Built a full-stack store with **product catalog, cart, order management and secure checkout** on a layered MVC architecture.',
      'Designed and implemented **20+ RESTful APIs** covering users, products, cart, orders and payment status.',
      'Added **role-based access control** with separate Admin and Customer permissions.',
      'Modelled the MySQL schema (products, categories, orders, order items, users) with Spring Data JPA and Hibernate, and used **indexing** to speed up catalog search and order lookups.',
    ],
    links: [],
  },
  {
    title: 'BookMyShow Clone',
    sub: 'Movie ticket booking system | Java, Spring Boot, MySQL, JPA, Hibernate, HTML5, CSS3, JavaScript',
    side: {
      kind: 'endpoints',
      rows: [['get', 'GET', '/api/movies'], ['get', 'GET', '/api/theaters'], ['get', 'GET', '/api/shows/{id}/seats'], ['post', 'POST', '/api/tickets'], ['post', 'POST', '/api/admin/shows'], ['del', 'DEL', '/api/tickets/{id}']],
    },
    bullets: [
      'Architected a full-stack booking app with **RBAC** for distinct user and admin workflows.',
      'Designed and implemented **15+ RESTful APIs** for movies, theaters, shows, seats and tickets, and tested every endpoint in Postman.',
      'Built a **responsive, mobile-friendly UI** and persisted data in MySQL through Spring Data JPA and Hibernate.',
    ],
    links: [['View repository on GitHub', 'bookMyShowRepo']],
  },
]

export const education = [
  { time: 'Sep 2023 to Sep 2027', title: 'B.Tech, Computer Science and Engineering', text: 'Raj Kumar Goel Institute of Technology, Ghaziabad. CGPA 7.3/10.' },
  { time: 'Jan 2026 to present', title: 'DSA training, GeeksforGeeks', text: 'Arrays, strings, recursion, linked lists, stacks, queues and trees, with a focus on time and space complexity.' },
  { time: '2022', title: 'Class XII, Science (PCM)', text: 'Maharana Pratap Intermediate College, Deoria. Class X completed in 2020.' },
]

export const achievements = [
  { title: 'GfG 160: 160 Days of Problem Solving', text: 'Completed the GeeksforGeeks course with Nation SkillUp, awarded for dedication and consistency.' },
  { title: '400+ DSA problems solved', text: 'On LeetCode and GeeksforGeeks, with a focus on optimized time and space complexity.' },
  { title: 'NPTEL SWAYAM: Fundamentals of OOP', text: '2024. Credential from IIT/NIT faculty.' },
  { title: 'Code for Success: Spring Boot Development', text: 'Hands-on certification in REST API design and backend development.' },
]

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Marcus's Portfolio",
  description: "FUll Stack Developer | UI/UX Learner | Tennis Fan",
  og: {
    title: "Marcus Ren Portfolio",
    type: "website",
    url: "http://alberthathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Marcus Ren",
  logo_name: "Marcus Ren",
  nickname: "Rentely",
  subTitle: "FUll Stack Developer | UI/UX Learner | Tennis Fan",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/rennie-bee",
  githubProfile: "https://github.com/rennie-bee",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/rennie-bee",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:rentely816@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Telegram",
  //   link: "https://t.me/RainbowSunDev",
  //   fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
  // {
  //   name: "Skype",
  //   link: "https://t.me/RainbowSunDev",
  //   fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "Blue", // Reference https://simpleicons.org/?q=instagram
  // },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/tianli-ren-35229524b/",
    fontAwesomeIcon: "fa-linkedin",
    backgroundColor: "#0A66C2",
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/rennie.marcus?igsh=ODA1NTc5OTg5Nw%3D%3D&utm_source=qr",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Node, Express, Django, and Flask",
        "⚡ Building responsive website front end using React and Bootstrap",
        "⚡ Developing mobile applications using Kotlin and React Native",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            // backgroundColor: "#000000",
            color: "#3178C6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          // style: {
          //   color: "#3776AB",
          // },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-light",
          // style: {
          //   color: "#339933",
          // },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "teenyicons:nextjs-solid",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Qt",
          fontAwesomeClassname: "simple-icons:qt",
          style: {
            color: "#41CD52",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "MicroSoft SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#D22128",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable graph neural network (GNN) models for various deeplearning use cases",
        "⚡ Conducting statistical analysis on commercial products using ECharts and ApexCharts in websites",
        "⚡ Currently studying to adopt large language model (LLM) algorithms in practical projects",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C",
          },
        },
        {
          skillName: "PyG",
          fontAwesomeClassname: "simple-icons:pyg",
          style: {
            backgroundColor: "transparent",
            color: "#3C2179",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#F37626",
          },
        },
        {
          skillName: "ECharts",
          fontAwesomeClassname: "simple-icons:apacheecharts",
          style: {
            backgroundColor: "transparent",
            color: "#AA344D",
          },
        },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractive and intuitive user interface for mobile and web applications",
        "⚡ Customizing logo designs for start-up companies",
        "⚡ Organizing the flow of application functionalities to facilitate user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe PS",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Draw.io",
          fontAwesomeClassname: "simple-icons:diagramsdotnet",
          style: {
            color: "#F08705",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/albert_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@albert391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Washington",
      subtitle: "M.S. in Electrical and Computer Engineering",
      logo_path: "W-Logo_Purple_RGB.png",
      // logo_path: "iiitk_logo.png",
      alt_name: "UW",
      duration: "2023 - 2025 (Expected)",
      descriptions: [
        "⚡ Overall GPA: 4.0/4.0",
        "⚡ Relevant Courses: Data Structures and Algorithms for ECE Applications, Software Design & Implementation, Introduction to Database Systems, etc.",
      ],
      website_link: "https://www.washington.edu//",
    },
    {
      title: "University College Dublin",
      subtitle: "B.S. in Software Engineering",
      logo_path: "UCD_Dublin.png",
      // logo_path: "iiitk_logo.png",
      alt_name: "UCD",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Overall GPA: 3.72/4.20",
        "⚡ Relevant Courses: Data Structures & Algs, Object Oriented Prog & Design, Computer Networks, Databases and Info Sys, Operating Systems, Web Application Development, Mobile Computing, Computer Graphics, Distributed Systems, Information Retrieval, Performance of Comp Systems, Machine Learning, Cloud Computing, etc.",
      ],
      website_link: "https://www.ucd.ie/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Educate Web Builder",
      subtitle: "- AWS",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/c390b4e8-5e66-4282-a020-a70bbe80f4cb/linked_in_profile",
      alt_name: "AWS",
      color_code: "#262e3b",
    },
    {
      title: "Solution Architecting",
      subtitle: "- AWS",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/1be92e48-9708-45ab-9cfa-e18c8b87c443/linked_in_profile",
      alt_name: "AWS",
      color_code: "#262e3b",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have always been dedicated to addressing real-world problems and challenges using software and data solutions. My previous professional experiences have equipped me with the skills to conduct highly efficient communications with colleagues and clients from various departments. Meanwhile, prioritizing the development of well-organized and scalable solutions has become my primary focus when working on a technical project.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Senior Full stack Developer",
    //       company: "Boyle",
    //       company_url: "https://boyle.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "San Fransisco, CA",
    //       description:
    //         "Boyle is an international Technology and Management Consulting Group " +
    //         "with a rapid pace development and innovative solutions for demanding" +
    //         "projects. I work as a full-stack developer here, responsible for building" +
    //         "deploying and maintaining internal web applications.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Full Stack Developer",
    //       company: "Lauzon",
    //       company_url: "https://lauzonflooring.com/",
    //       logo_path: "muffito_logo.png",
    //       duration: "2013 - 2018",
    //       location: "San Fransisco, CA",
    //       description:
    //         "Lauzon is a universal digital loyalty program that offers unique and fun" +
    //         "rewards at the places you love. \n Hired, trained and lead Agile team of 7 full-stack developers.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Solution Architect",
    //       company: "Keeling Group",
    //       company_url: "http://www.keelingconsulting.com/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "2010 - 2013",
    //       location: "Palo Alto, CA",
    //       description:
    //         "Keeling Group is a leading Digital Product Studio in California, helping" +
    //         "companies to thrive on mobile apps, the web, VR/AR and IoT.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Work Experiences",
      experiences: [
        {
          title: "Software Engineer (Capstone Project)",
          company: "Novo Nordisk",
          company_url: "https://www.novonordisk.com/",
          logo_path: "novo-nordisk.png",
          duration: "Jan 2024 - Present",
          location: "Seattle, WA, United States",
          description:
            // "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
            "Working on Capstone Project 'Sickle Cell Disease (SCD) Physician Chatbot'. Design and develop an application which would supply the physician with an easily accessible set of clinical and behavioral protocols to identify and best treat the SCD patient.",
          color: "#001965",
        },
        {
          title: "Software Engineer Intern",
          company: "SIEMENS AG",
          company_url: "https://www.siemens.com/cn/en.html",
          logo_path: "siemens.png",
          duration: "Sept 2022 - Jan 2023",
          location: "Beijing, China",
          description:
            "Developed a full-stack desktop application using Numpy, Openpyxl, and PyQt for automating billing data processes. Retrieved web-crawled form data through APIs, subsequently managing it within a MySQL database. Maintained and upheld Windows and Linux servers, executing routine system updates and patch management.",
          color: "#00e6dc",
        },
        {
          title: "Teaching Assistant",
          company: "University College Dublin",
          company_url: "https://www.ucd.ie/cs/",
          logo_path: "UCD_Dublin.png",
          duration: "Sept 2021 - Dec 2022",
          location: "Remote",
          description:
            // "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
            "Teaching Assistant experiences in computer science modules 'Introduction to Programming' and 'Object-oriented Design'. Supervised 4 groups of students (each scaling from 5 to 6) to conduct projects powered by Spring Boot. Applied Agile and Object-oriented principles to progress task distribution and system design.",
          color: "#6BBE51",
        },
        {
          title: "Research and Development Intern",
          company:
            "Data and Intelligence Research (DAIR) Lab at Peking University",
          company_url: "https://github.com/PKU-DAIR",
          logo_path: "pku.svg",
          duration: "July 2022 - Sept 2022",
          location: "Beijing, China",
          description:
            "Carried out research on large-scale graph machine learning at the Data and Intelligence Research Laboratory (DAIR). Integrated Graph Neural Network models with downstream tasks such as node classification and link prediction to conduct predictive experiments for the Scalable Graph Learning (SGL) toolkit, enhancing test completeness by 50%. Reconstructured PyTorch linear graph models using TensorLayer to enhance high-level graph machine learning APIs.",
          color: "#fc1f20",
        },
        {
          title: "Software Engineer Intern",
          company: "Melody Dreambit",
          company_url:
            "https://www.linkedin.com/company/melody-dreambit/?viewAsMember=true",
          logo_path: "melodydreambit.png",
          duration: "Mar 2022 - June 2022",
          location: "Remote",
          description:
            "Developed a Django web application for selling instrument products. Adopted Bootstrap + React to create frontend panels for streamlined administration. Utilized the ECharts library to visualize month-based sales and visit data stored in MircroSoft Azure. Containerized end services separately through Docker Compose before deploying them onto the server.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Actor",
          company: "SIEMENS AG",
          company_url: "https://www.siemens.com/cn/en.html",
          logo_path: "siemens.png",
          duration: "Nov 2022",
          location: "Beijing, China",
          description:
            "Played as the lead actor in the promotional video of siemore platform. Video link: https://mp.weixin.qq.com/s/nznsMMAKybswAhvAh9ZfGg",
          color: "#00e6dc",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    // "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
    "My projects make use of vast variety of technical tools and frameworks.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research Outcome",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ren2.jpeg",
    description:
      "I am available on several social medias. Feel free to contact me through any of them!",
  },
  blogSection: {
    title: "Photography Collection",
    subtitle:
      "In my leisure time, I would like to capture interesting moments using my camera. It is really enjoyable to share those images and videos with my friends.",
    // link: "https://wordpress.org/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Seattle, WA, United States",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@43.2082365,-79.8651724,18.5z",
  },
  phoneSection: {
    title: "Work Email",
    subtitle: "marcus_rennie@outlook.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};

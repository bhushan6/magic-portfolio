import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "",
  lastName: "",
  name: `Commet`,
  role: "Design Agency",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing work of ${person.name} ${person.role}`,
  headline: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        fontSize: "38px",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid red",
          margin: 0,
          gap: "12px",
        }}
      >
        Hi, We are{" "}
        <img
          style={{
            // border: "1px solid red",
            // height: "99%",
            margin: 0,
            padding: 0,
            transform: "translateY(4px)",
            objectFit: "cover",
          }}
          width={150}
          src={
            "https://res.cloudinary.com/dlcjorjvc/image/upload/v1756136515/gif-comet-logo-1-ezgif.com-crop_josgi9.gif"
          }
        />
      </span>
      {/* <br /> */}
      <div>We craft motion that shines bright.</div>
    </div>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <div
      style={{
        fontSize: "32px",
      }}
    ></div>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        At Comet, we believe powerful design starts with powerful storytelling.
        We’re a motion design studio dedicated to transforming complex ideas
        into visually stunning, easy-to-understand stories. Whether it’s UI
        animation, product explainers, or brand videos, our mission is to create
        visuals that not only catch eyes but also connect with hearts. What sets
        us apart is our blend of creativity and strategy—we don’t just animate;
        we craft experiences that elevate your brand and leave a lasting
        impression. With a focus on detail, clarity, and impact, every project
        we deliver is built to shine as bright as a comet in the sky.
      </>
    ),
  },
  // work: {
  //   display: true, // set to false to hide this section
  //   title: "Our Purpose",
  //   experiences: [
  //     {
  //       company: "FLY",
  //       timeframe: "2022 - Present",
  //       role: "Senior Design Engineer",
  //       achievements: [
  //         <>
  //           Redesigned the UI/UX for the FLY platform, resulting in a 20%
  //           increase in user engagement and 30% faster load times.
  //         </>,
  //         <>
  //           Spearheaded the integration of AI tools into design workflows,
  //           enabling designers to iterate 50% faster.
  //         </>,
  //       ],
  //       images: [
  //         // optional: leave the array empty if you don't want to display images
  //         {
  //           src: "/images/projects/project-01/cover-01.jpg",
  //           alt: "Once UI Project",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       company: "Creativ3",
  //       timeframe: "2018 - 2022",
  //       role: "Lead Designer",
  //       achievements: [
  //         <>
  //           Developed a design system that unified the brand across multiple
  //           platforms, improving design consistency by 40%.
  //         </>,
  //         <>
  //           Led a cross-functional team to launch a new product line,
  //           contributing to a 15% increase in overall company revenue.
  //         </>,
  //       ],
  //       images: [],
  //     },
  //   ],
  // },
  // studies: {
  //   display: true, // set to false to hide this section
  //   title: "Studies",
  //   institutions: [
  //     {
  //       name: "University of Jakarta",
  //       description: <>Studied software engineering.</>,
  //     },
  //     {
  //       name: "Build the Future",
  //       description: <>Studied online marketing and personal branding.</>,
  //     },
  //   ],
  // },
  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: (
  //         <>Able to prototype in Figma with Once UI with unnatural speed.</>
  //       ),
  //       tags: [
  //         {
  //           name: "Figma",
  //           icon: "figma",
  //         },
  //       ],
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: (
  //         <>Building next gen apps with Next.js + Once UI + Supabase.</>
  //       ),
  //       tags: [
  //         {
  //           name: "JavaScript",
  //           icon: "javascript",
  //         },
  //         {
  //           name: "Next.js",
  //           icon: "nextjs",
  //         },
  //         {
  //           name: "Supabase",
  //           icon: "supabase",
  //         },
  //       ],
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //   ],
  // },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

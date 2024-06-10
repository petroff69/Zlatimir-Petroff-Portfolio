type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Zlatimir Petrov — Portfolio",
    fullName: "Zlatimir Georgiev Petrov",
    email: "zlatimirpetrov23@gmail.com",
  },
  hero: {
    name: "Zlatimir Petrov",
    p: ["I love tech and gaming", "developer and researcher"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `As a software developer with good skills, I have experience in TypeScript and JavaScript.
       I'm really good at using frameworks like React, Node.js, and Three.js. 
       I learn things quickly and I like to work closely with clients. 
       I help to make solutions that are easy to use, can be made bigger or smaller, and solve real problems. 
I'm really good at JavaScript and I'm also making VR apps using Unity. At the same time, I'm learning C#. 
Even though I mostly do web development, I want to get better and combine VR development with science and math. 
I'm excited to work with you to make your ideas come true! Let's work together!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Tests.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links and demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

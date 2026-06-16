// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects is coming 🔜",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-patents-are-not-the-main-work",
      
        title: "Patents Are Not the Main Work",
      
      description: "Two more patent applications are issuing, and a note on what AI engineering looks like in production.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/patents-are-not-the-main-work/";
        
      },
    },{id: "post-why-data-scientists-should-learn-git",
      
        title: "Why Data Scientists Should Learn Git",
      
      description: "A discussion on the importance of Git for data scientists, focusing on collaboration, version control, and production delivery.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/why-data-scientists-should-learn-git/";
        
      },
    },{id: "post-inference-time-techniques-for-llm-reasoning",
      
        title: "Inference-Time Techniques for LLM Reasoning",
      
      description: "An overview of different techniques to improve LLM reasoning capabilities at inference time, from prompting strategies to self-improvement methods.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/inference-time-techniques-for-llm-reasoning/";
        
      },
    },{id: "news-my-first-post-here-rag-project-with-a-telegram-bot-ui",
          title: 'My first post here! RAG project with a Telegram Bot UI',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%6B%73%61%6E%64%72.%76.%6B%69%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aleksandrkim", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

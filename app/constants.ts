export const TITLE = "Xander Martinez";
export const EMAIL_URL = "https://www.gmail.com";
export const GITHUB_URL = "https://www.github.com";
export const LINKEDIN_URL = "https://www.linkedin.com";

export const WORK_EXPRIENCES: WorkExperience[] = [
  {
    id: 0,
    fromDate: new Date("November 2022"),
    toDate: "Present",
    company: "DFAB Shop",
    location: "Remote",
    position: "Owner, Web Developer",
    summary: "Streamlined Business Operations through personalized WebApps",
  },
  {
    id: 1,
    fromDate: new Date("November 2019"),
    toDate: new Date("March 2021"),
    company: "Freelance",
    location: "Remote",
    position: "Full Stack Web Developer",
    summary: "Optimized Business Operations through personalized WebApps",
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: 0,
    title: "Notflix",
    summary:
      "The most popular and authoritative source for movie, TV and celebrity content. ",
    techstack: ["react"],
    liveUrl: "https://movie-app-one-sandy-27.vercel.app/",
  },
  {
    id: 1,
    title: "Sorting, Visualized",
    summary: "A slick Sorting Algorithms Visualizer",
    techstack: ["react"],
    liveUrl: "https://dwyte.github.io/sorting-visualized/",
  },
  {
    id: 2,
    title: "IAM",
    summary: "A blockchain-based digital credentials system.",
    techstack: ["react"],
    liveUrl: "https://iam-web-client.herokuapp.com/",
  },
];

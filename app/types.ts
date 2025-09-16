type WorkExperience = {
  id: number;
  company: string;
  position: string;
  fromDate: Date;
  location: string;
  toDate: Date | "Present";
  summary: string;
  accomplishments?: string[];
};

type SideProject = {
  id: number;
  title: string;
  liveUrl?: string;
  sourceUrl?: string;
  summary: string;
  techstack?: string[];
};

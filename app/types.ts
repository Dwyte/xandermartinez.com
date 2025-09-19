type WorkExperience = {
  id: number;
  company: string;
  position: string;
  fromDate: Date;
  location: string;
  url?: string;
  toDate: Date | "Present";
  summary: string;
  accomplishments?: string[];
};

type SideProject = {
  id: number;
  title: string;
  summary: string;
  date: Date;
  url?: string;
  sourceUrl?: string;
  videoUrl?: string;
  downloadUrl?: string;
  techstack?: string[];
};

type WorkExperience = {
  id: number;
  company: string;
  position: string;
  fromDate: Date;
  location: string;
  toDate: Date | "Present";
  summary: string;
  accomplishments?: { id: number; content: string }[];
};

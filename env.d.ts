type Skill = {
  name: string;
  iconurl: string;
};

type Job = {
  date: string;
  title: string;
  titleJob: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  usedSkills: skill[];
  urLImg: string;
  link: string;
  categories: string[];
};

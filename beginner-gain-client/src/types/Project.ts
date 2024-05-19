export interface ISelect {
  answer: string;
  question: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  filePath: string;
  select: Array<ISelect>;
}

export interface QuestionSelected {
    question: string,
    answer: string,
}

export interface IMakeProject {
    name: string,
    description: string,
    select: QuestionSelected[],
    userId: string,
}

export interface IMakeProjectResponse {
    name: string,
    description: string,
    filePath: string,
}
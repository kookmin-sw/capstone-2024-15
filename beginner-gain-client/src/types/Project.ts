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

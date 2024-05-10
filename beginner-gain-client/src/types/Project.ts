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
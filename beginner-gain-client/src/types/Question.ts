export interface IGetQuestion {
    questionId: string | string[],
}

export interface  IGetQuestionGroup {
    questionId: string | string[],
}

export enum QuestionType {
    '단일질문' = "1",
    '그룹질문' = "2",
}

export interface IAnswerData {
    id: number,
    name: string,
    nextQuestionId: number,
    nextQuestionType: QuestionType,
}

export interface IQuestionData {
    id: number,
    content: string,
    answers: IAnswerData[],
}

export interface IQuestionGroupData {
    id: number,
    questions: IQuestionData[],
}
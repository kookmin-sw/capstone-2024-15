export interface IGetQuestion {
    questionId: string | string[],
}

export interface IAnswerData {
    id: number,
    name: string,
    nextQuestionId: number,
    nextQuestionType: number,
}

export interface IQuestionData {
    id: number,
    content: string,
    answers: IAnswerData[],
}
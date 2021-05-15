type Option = {
    id: string;
    option: string;
    isRight: boolean;
}

type Question = {
    question: string;
    options: Option[];
    pts: number;
    negativePts: number;
}

type Quiz = {
    id: string;
    topic: string;
    questions: Question[];
}

type Quizzes = Quiz[]
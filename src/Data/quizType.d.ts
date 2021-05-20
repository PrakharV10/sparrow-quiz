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
    image: string;
    maximum: number;
    questions: Question[];
}

type Quizzes = Quiz[]


type User = {
    userId: string
    email: string;
    password: string;
}

type UserTable = User[]
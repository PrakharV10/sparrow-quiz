type QuestionOptionsProps = {
    questionNumber: number;
    timer: number;
    currentQuiz: Quiz;
    score: number;
    dispatch: Dispatch;
    selectedOption: Option | undefined;
    quizId: string;
}
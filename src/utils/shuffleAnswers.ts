import Bird from "../models/Bird";

const shuffleAnswers = (answers: Bird[]) => [...answers].sort(() => Math.random() - 0.5);

export default shuffleAnswers;
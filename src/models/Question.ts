import Bird from './Bird';

export default interface Question {
  correctAnswer: Bird;
  answers: Bird[];
}

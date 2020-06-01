import questionsJSON from './Objects/questions.json';

export default {
  hello: 'world',
  questions: questionsJSON,
  currentQuestionIdx: 0,
  userResponses: {
    answer: ['1','2','3','4']
  }
}
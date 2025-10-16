import { useState } from 'react'
import './RelationshipQuiz.css'

const quizQuestion = [
  {
    questionText: 'Qual foi o local da nossa primeira viagem?',
    answerOptions: [
      { answerText: 'Pipa', isCorrect: false },
      { answerText: 'São Miguel do Gostoso', isCorrect: true },
      { answerText: 'Areia Branca', isCorrect: false },
      { answerText: 'Mossoro', isCorrect: false },
    ],
  },
  {
    questionText: 'Como foi feito o pedido de namoro?',
    answerOptions: [
      { answerText: 'Fui na sua casa no serrambi', isCorrect: false },
      { answerText: 'Agendei uma encomenda', isCorrect: true },
      { answerText: 'Na praia', isCorrect: false },
      { answerText: 'No galpão', isCorrect: false },
    ],
  },
  {
    questionText: 'Onde aconteceu o nosso primeiro beijo?',
    answerOptions: [
      { answerText: 'Natal Shoppwing', isCorrect: false },
      { answerText: 'Cinepolis Natal Shopping', isCorrect: true },
      { answerText: 'Cinemark Midway Mall', isCorrect: false },
      { answerText: 'Na praia', isCorrect: false },
    ],
  },
  {
    questionText: 'Qual foi o primeiro presente que Bia deu a Matheus?',
    answerOptions: [
      { answerText: 'Uma carteira', isCorrect: true },
      { answerText: 'Um sapato', isCorrect: false },
      { answerText: 'Bia não deu nenhum presente a matheus', isCorrect: false },
      { answerText: 'um telefone', isCorrect: false },
    ],
  },
  {
    questionText: 'De quanto é a diferença de idade entre os dois?',
    answerOptions: [
      { answerText: '2 anos', isCorrect: false },
      { answerText: '6 meses e 14 dias', isCorrect: true },
      { answerText: '1 ano 3 meses e 16 dias', isCorrect: false },
      { answerText: '5 meses 4 dias', isCorrect: false },
    ],
  },
  {
    questionText: 'Onde foi a maior loucura que já fizemos?',
    answerOptions: [
      { answerText: 'Rarus Motel', isCorrect: false },
      { answerText: 'Vision Motel', isCorrect: false },
      { answerText: 'Via Costeira', isCorrect: true },
      { answerText: 'Pipa', isCorrect: false },
    ],
  },
]

export default function RelationshipQuiz() {
  const [isStarted, setisStarted] = useState(false)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleStart = () => {
    setisStarted(true)
  }

  const handleRestart = () => {
    setisStarted(false)
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  const handleAnswerClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < quizQuestion.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="quiz-section">
      <div className="quiz-texts">
        <h2 className="quiz-title">Teste seu conhecimento</h2>
        <p className="quiz-subtitle">Me mostre o quanto você sabe!</p>
      </div>
      {!isStarted && (
        <div className="start-screen">
          <h3 className="start-title">Vocẽ está pronta?</h3>
          <button className="start-button" onClick={handleStart}>
            START
          </button>
        </div>
      )}

      {isStarted && (
        <div className="score-conteiner">
          {showScore ? (
            <div className="score-selection">
              Você acertou {score} de {quizQuestion.length} perguntas !
              <p className="score-message">
                {score === quizQuestion.length
                  ? 'Parabens! Você me conhece muito bem'
                  : 'Excelente, Nossas memorias são as melhores!'}
              </p>
              <button onClick={handleRestart} className="restart-button">
                RESTART
              </button>
            </div>
          ) : (
            <div className="question-section">
              <div className="question-count">
                <span>
                  Pergunta {currentQuestion + 1} de {quizQuestion.length}
                </span>
              </div>
              <div className="question-text">
                {quizQuestion[currentQuestion].questionText}
              </div>
              <div className="answer-section">
                {quizQuestion[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(answerOption.isCorrect)}
                      className="answer-button"
                    >
                      {answerOption.answerText}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

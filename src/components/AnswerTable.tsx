import React from 'react';
import { AnswerObject } from '../App';
// styles
import { AnswerWrapper } from './AnswerTable.styles';

type Props = {
  results: AnswerObject[];
  score: number;
};

const AnswerTable: React.FC<Props> = ({ results, score }) => (
  <AnswerWrapper>
    <table>
      <caption>Correct Answers: {score} out of {results.length}</caption>
      <thead>
        <tr>
          <th scope="col">Question</th>
          <th scope="col">Correct Answer</th>
          <th scope="col">User Answer</th>
        </tr>
      </thead>
      <tbody>
        {
          results.map(result => (
            <tr key={result.id} className={result.correct ? "correct" : "wrong"}>
              <td className="question" dangerouslySetInnerHTML={{ __html: result.question }}></td>
              <td>{result.correctAnswer}</td>
              <td>{result.answer}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </AnswerWrapper>
);

export default AnswerTable;
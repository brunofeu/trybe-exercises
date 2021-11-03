import React, { useContext } from 'react';
import QuestionsContext from '../context/QuestionsContext';

import QuestionCard from './QuestionCard';

function QuestionList() {
  const { question } = useContext(QuestionsContext);

  return (
    <section>
      {
        question
          .map((quest, index) => <QuestionCard key={ index } question={ quest } />)
      }
    </section>
  );
}

export default QuestionList;

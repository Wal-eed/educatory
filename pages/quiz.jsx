import { Container, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { questions, answers } from 'components/quiz';
import React, { useState } from 'react';
import styles from './Quiz.module.scss';
import RippleButton from 'components/RippleButton';

// const Quiz = () => {
// 	const [selections, setSelections] = useState([]);

// 	const handleSelection = (selection, qNum) => {
// 		const newSelections = [...selections];
// 		newSelections[qNum] = selection[0];
// 		setSelections(newSelections);
// 	};

// 	return (
// 		<div>
// 			{questions.map((eachQuestion, qNum) => (
// 				<Container className={styles.quizContainer}>
// 					<Test onOptionSelect={(selection) => handleSelection(selection, qNum)}>
// 						<QuestionGroup questionNumber={0}>
// 							<Question>{eachQuestion.question}</Question>
// 							{eachQuestion.choices.map((eachChoice, i) => (
// 								<Option value={i}>{eachChoice.text}</Option>
// 							))}
// 						</QuestionGroup>
// 					</Test>
// 				</Container>
// 			))}

// 			<pre>{JSON.stringify(selections)}</pre>
// 		</div>
// 	);
// };

const Quiz = () => {
	const [selections, setSelections] = useState([]);
	const [quizFinished, setQuizFinished] = useState(false);
	const [incorrectQuestions, setIncorrectQuestions] = useState([]);

	const handleSelection = (val, qNum) => {
		const newSelections = [...selections];
		newSelections[qNum] = parseInt(val);
		setSelections(newSelections);
	};

	const finishQuiz = (event) => {
		event.preventDefault();
		const incorrectQs = [];
		selections.forEach((selection, i) => {
			if (selection == answers[i]) {
				console.log(`Q${i}. is correct`);
			} else {
				console.log(`Q${i}. is incorrect`);
				incorrectQs.push({
					...questions[i],
					qNum: i,
				});
			}
		});
		setQuizFinished(true);
		setIncorrectQuestions(incorrectQs);
	};

	return !quizFinished ? (
		<div>
			{questions.map((eachQuestion, qNum) => (
				<Container className={styles.quizContainer}>
					<Text className={styles.question} fontSize="2xl">
						{eachQuestion.question}
					</Text>
					<RadioGroup onChange={(val) => handleSelection(val, qNum)} value={selections[qNum]}>
						<Stack>
							{eachQuestion.choices.map((eachChoice, choiceNum) => (
								<Radio size="sm" name="1" colorScheme="red" value={choiceNum}>
									{eachChoice.text}
								</Radio>
							))}
						</Stack>
					</RadioGroup>
				</Container>
			))}
			<Container style={{ textAlign: 'center', marginTop: '14px' }}>
				<RippleButton onClick={finishQuiz} text="Submit"></RippleButton>
			</Container>
		</div>
	) : (
		<div>
			{incorrectQuestions.map((eachQuestion) => (
				<Container className={styles.quizContainer}>
					<Text className={styles.question} fontSize="2xl">
						{eachQuestion.question}
					</Text>
					<Stack>
						{eachQuestion.choices.map((eachChoice, choiceNum) => (
							<RadioGroup
								value={
									selections[eachQuestion.qNum] === choiceNum
										? 0
										: answers[eachQuestion.qNum] === choiceNum
										? 0
										: 1
								}
							>
								<Radio
									size="sm"
									name="1"
									colorScheme={answers[eachQuestion.qNum] === choiceNum ? 'green' : 'red'}
									value={0}
								>
									{answers[eachQuestion.qNum] === choiceNum ? (
										<strong>
											{eachChoice.text} &mdash; {eachChoice.explanation}
										</strong>
									) : (
										<span>{eachChoice.text}</span>
									)}
								</Radio>
							</RadioGroup>
						))}
					</Stack>
				</Container>
			))}
			<Container style={{ textAlign: 'center', marginTop: '14px' }}>
				<RippleButton onClick={finishQuiz} text="Submit"></RippleButton>
			</Container>
		</div>
	);
};

export default Quiz;

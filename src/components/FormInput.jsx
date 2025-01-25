import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormInput({ setQuestions }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const changeQuestionHandler = (e) => {
        setQuestion(e.target.value);
    };
    const changeAnswerHandler = (e) => {
        setAnswer(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        setQuestion('');
        setAnswer('');
        setQuestions((prev) => {
            const newQuestion = {
                id,
                question,
                answer,
            };
            return [...prev, newQuestion];
        });
        data.push({ id, question, answer });
    };
    return (
        <Form onSubmit={submitHandler}>
            <Row className="mb-3">
                <Col md={5} className="mb-2">
                    <Form.Control
                        type="text"
                        placeholder="ادخل السؤال"
                        className="py-2 "
                        onChange={changeQuestionHandler}
                        value={question}
                        required
                    />
                </Col>

                <Col md={5} className="mb-2">
                    <Form.Control
                        type="text"
                        placeholder="ادخل الاجابة"
                        className="py-2"
                        onChange={changeAnswerHandler}
                        value={answer}
                        required
                    />
                </Col>

                <Col md={2} className="text-center mb-2">
                    <button
                        className="btn-color px-3 py-2 w-100 h-100"
                        type="submit"
                    >
                        اضافة
                    </button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormInput;

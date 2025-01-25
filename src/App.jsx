import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormInput from './components/FormInput';
import QAAccordion from './components/QAAccordion';

function App() {
    const [questions, setQuestions] = useState([]);

    const deleteQuestionsHandler = (e) => {
        e.preventDefault();
        setQuestions([]);
    };
    return (
        <>
            <div className="font color-body">
                <Container>
                    <Row>
                        <Col
                            md={3}
                            className="mt-5 text-center align-items-center"
                        >
                            <h3>قائمة الأسئلة السابقة</h3>
                        </Col>
                        <Col md={9} className="mt-5 text-center">
                            <FormInput setQuestions={setQuestions} />
                            {!questions.length ? (
                                <h6 className="mt-5">لا يوجد اسئلة حاليا</h6>
                            ) : (
                                questions.map((question, index) => (
                                    <QAAccordion
                                        key={index}
                                        data={question}
                                        setQuestions={setQuestions}
                                    />
                                ))
                            )}
                            {questions.length ? (
                                <button
                                    className="btn-color px-3 py-2 mb-3 w-100"
                                    type="submit"
                                    onClick={deleteQuestionsHandler}
                                >
                                    حذف كل الاسئلة
                                </button>
                            ) : (
                                ''
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;

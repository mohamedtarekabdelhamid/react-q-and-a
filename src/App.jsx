import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormInput from './components/FormInput';
import QAAccordion from './components/QAAccordion';

import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

function App() {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const questions = JSON.parse(localStorage.getItem('QUESTIONS'));
        if (questions) {
            setQuestions(questions);
        }
    }, []);

    const notify = (message, status) => {
        toast[status](message);
    };

    const deleteQuestionsHandler = () => {
        Swal.fire({
            title: 'هل انت متاكد من حذف كل الاسئلة؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#224f61',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            customClass: {
                title: 'font',
                content: 'font',
                confirmButton: 'font',
                cancelButton: 'font',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('QUESTIONS');
                setQuestions([]);
                notify('تم حذف كل الاسئلة بنجاح', 'success');
            }
        });
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
                            <FormInput
                                setQuestions={setQuestions}
                                notify={notify}
                            />
                            {!questions.length ? (
                                <h6 className="mt-5">لا يوجد اسئلة حاليا</h6>
                            ) : (
                                questions.map((question, index) => (
                                    <QAAccordion
                                        key={index}
                                        data={question}
                                        setQuestions={setQuestions}
                                        notify={notify}
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
                <ToastContainer />
            </div>
        </>
    );
}

export default App;

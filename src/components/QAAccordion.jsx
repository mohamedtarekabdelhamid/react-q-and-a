import Accordion from 'react-bootstrap/Accordion';

function QAAccordion({ data, setQuestions }) {
    const deleteQuestionHandler = () => {
        setQuestions((prev) => {
            const prevData = prev.filter((item) => item.id !== data.id);

            return prevData;
        });
    };
    return (
        <Accordion className="my-3">
            <Accordion.Item>
                <Accordion.Header>
                    <div className="d-flex justify-content-between w-100">
                        <span>{data.question}</span>
                        <span className="accordion-icon"></span>
                    </div>
                </Accordion.Header>
                <Accordion.Body className=" p-3">
                    <div className="d-inline-block mx-3">{data.answer}</div>
                    <button
                        className="btn-color py-1"
                        onClick={deleteQuestionHandler}
                    >
                        حذف السؤال
                    </button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default QAAccordion;

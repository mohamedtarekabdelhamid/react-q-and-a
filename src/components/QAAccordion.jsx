import Accordion from 'react-bootstrap/Accordion';
import Swal from 'sweetalert2';

function QAAccordion({ data, setQuestions, notify }) {
    const deleteQuestionHandler = () => {
        Swal.fire({
            title: 'هل انت متاكد من حذف السؤال؟',
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
                setQuestions((prev) => {
                    const prevData = prev.filter((item) => item.id !== data.id);
                    localStorage.setItem('QUESTIONS', JSON.stringify(prevData));
                    return prevData;
                });
                notify('تم حذف السؤال بنجاح', 'success');
            }
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

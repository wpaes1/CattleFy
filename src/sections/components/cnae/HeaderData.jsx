import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

// project-imports
import MainCard from 'components/MainCard';

const HeaderData = React.memo(({ headers }) => {
    const [animation, setAnimation] = React.useState('');
    const [modalOpen, setModalOpen] = React.useState(false);
    const head = headers[0];

    const handleButtonClick = (value) => {
        setModalOpen(true);
        setAnimation(value);
    };

  return (
    <>
     
        <MainCard 
            title={
            <h5>
            <i className="ti ti-tractor align-middle f-24 text-primary" /> {head.titulo}
            </h5>
            }
            secondary={
            <Button variant="light-primary" size="sm" onClick={() => handleButtonClick('sticky-up')}>
            <i className="ph ph-bell align-middle me-1 " />           
            Check in
            </Button>
            }
            bodyClassName="p-0"
        />
        

        <Modal
            className={`modal-animate anim-${animation} `}
            id="animateModal"
            dialogClassName="border-0"
            show={modalOpen}
            onHide={() => setModalOpen(false)}
        >
            <Modal.Header className="bg-dark" closeButton closeVariant="white">
                <Modal.Title as="h5" className="text-white">
                    Area of expertise
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Modal.Title> {head.titulo}</Modal.Title>
                <p>
                    {head.descricao}
                </p>

                <p className="mb-0">
                <b>Objetvos:</b> 
                </p>
                <ul>
                {head.objetivos?.map((objetivo, idx) => (
                    <li key={idx} className="mb-0">
                        {objetivo}
                    </li>
                ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={() => setModalOpen(false)}>
                Close
                </Button>                    
            </Modal.Footer>
        </Modal>
    </>
  );
});

export default HeaderData;
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = id => {
        navigate(`/service/${id}`);
    };

    const handleBooknow = () => {
        navigate('/booknow')
    }

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => handleServiceDetail(id)} variant="primary">Check Details</Button>
                    <Button onClick={handleBooknow} variant="primary">Book now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
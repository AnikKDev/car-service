import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>Service details: {id}</h3>
        </div>
    );
};

export default ServiceDetail;
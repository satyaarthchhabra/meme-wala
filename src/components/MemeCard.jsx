import React from 'react'
import { Card, Col } from 'react-bootstrap'

const MemeCard = ({id,name,url,MemeCardHandler}) => {
    return (
        <>
            <Col xs={10} className="mx-auto my-4" md={4} onClick={() =>MemeCardHandler(id)}>
                <Card>
                    <Card.Img variant="top" src={url} className="card__img" />
                    <Card.Body>
                        <Card.Title className="text-center">{name}</Card.Title>

                    </Card.Body>

                </Card>
            </Col>
        </>
    )
}

export default MemeCard

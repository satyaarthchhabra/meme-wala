import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom';
const SingleMemePage = () => {
    const [apnaMeme, setApnaMeme] = useState(null)
    const [loading, setLoading] = useState(false)
    let { id } = useParams();

    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("");
    const params = {
        template_id: id,
        text0: topText,
        text1: bottomText,
        username: "xzk03017",
        password: "xzk03017@cndps.com"
    };


    useEffect(() => {
        if (!topText&&!bottomText) {
            setLoading(true);
        }else{
            setLoading(false);

        }
    }, [topText,bottomText])
    useEffect(() => {
        MemeImporter();
    }, [MemeImporter])
    const MemeImporter = async () => {
        let response = await axios.get(`https://api.imgflip.com/get_memes`)
        setApnaMeme(await response.data.data.memes.find(item => item.id === id))

    }
    // console.log(apnaMeme);
    const objectToQueryParam = obj => {
        const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
        return "?" + params.join("&");
    };
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        // add logic to create meme from api
        console.log("handle sub");

        const response = await axios.post(
            `https://api.imgflip.com/caption_image${objectToQueryParam(
                params
            )}`
        );
        setApnaMeme(await response.data.data);
        setLoading(false);
    }

    return (
        <>
            <div className="container my-4 ">
                <div className="d-flex justify-content-center flex-column">
                    <img src={apnaMeme?.url} alt="404 not found" className="img-fluid mb-2 " />
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control value={topText} onChange={e => setTopText(e.target.value)}className="mb-3" placeholder="text-1" />
                            <Button disabled={loading} variant="info" onClick={handleSubmit} className="ml-auto" size="lg" >
                                Create MeMe
                        </Button>
                            </Col>
                            <Col>
                                <Form.Control value={bottomText} onChange={e => setBottomText(e.target.value)} placeholder="text-2" className="mb-3" />
                            <Button disabled={loading} variant="warning" href={apnaMeme?.url} size="lg" download 
                            >
                              Download Meme
                        </Button>
                            </Col>
                        </Row>
                        
                       
                    </Form>
                </div>

            </div>
        </>
    )
}

export default SingleMemePage

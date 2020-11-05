import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import MemeCard from './MemeCard'
import { useHistory } from 'react-router-dom'

const MemeContainer = () => {
    let history = useHistory();
    const [memesArray, setMemeArray] = React.useState([]);
    useEffect(() => {
        MemeKaImporter();
    }, [])
    const MemeKaImporter = async () => {
        
        let response = await axios.get(`https://api.imgflip.com/get_memes`)
        setMemeArray(await response.data.data.memes)

    }
    const MemeCardHandler = (id) => {
        history.push(`/meme/${id}`)
    }
    return (
        <>
            <Container>
                <h1 className="display-4 text-center">Select Any One 😍</h1>
                <Row>
                    {
                    memesArray?.map(item => {
                    return (
                        <MemeCard key={item.id} {...item} MemeCardHandler={MemeCardHandler} />
                    )
                })
                }
                </Row>
            </Container>
        </>
    )
}

export default MemeContainer

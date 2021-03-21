import React, { useState } from 'react'
import Card from '../CardUi/CardUi'
import { Row, Col, notification } from 'antd';
import films from '../../data/films.json'

const CardList = ({ query }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([...films])

    setTimeout(() => {
        setLoading(false)
    }, 1500)

    const deleteItem = (id) => {
        setData(data.filter(film => film.id !== id))
        notification['info']({
            message: 'Eliminada',
            description:
                'La pelicula ha sido eliminada correctamente',
        });
    }

    return (
        <div>
            <Row gutter={16}>
                { data.map(film => {
                return(
                    <Col key={film.id} className="gutter-row" span={8} style={{ margin: '10px 0' }}>
                    <Card
                        loading={loading}
                        {...film}
                        ratings={ (film.ratings.reduce((a, c) => { return a + c }, 0) / film.ratings.length).toFixed(1) }
                        onDelete={() => deleteItem(film.id)}
                    />
                    </Col>
                )
                }) }
            </Row>
        </div>
    )
}

export default CardList

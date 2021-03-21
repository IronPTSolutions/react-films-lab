import React from 'react'
import { Card, Image, Tag, Tooltip, Button } from 'antd';
import { DeleteOutlined, StarOutlined } from '@ant-design/icons'
import './CardUi.css'

const CardUi = ({ loading, posterurl, title, storyline, onDelete, genres, ratings, year }) => {
    const { Meta } = Card;

    return (
        <Card
            cover={ 
                loading 
                ? null
                : <Image
                        width='100%'
                        src={posterurl}
                        alt={title}
                    />
            }
            loading={loading}
        >
            <Meta title={ `${title} (${year})` } description={storyline} />
            <div style={{ marginTop: '15px' }}>
                <b style={{ marginRight: '7px' }}>
                    <StarOutlined style={{color: '#ffc008'}}/> {ratings}
                </b>
                { genres.map((g, id) => {
                    return (<Tag color="default" key={id}>{g}</Tag>)
                }) }
            </div>
            <div className="deleteBtn">
                <Tooltip title="Eliminar">
                    <Button shape="circle" onClick={onDelete} icon={<DeleteOutlined />} />
                </Tooltip>
            </div>
        </Card>
    )
}

export default CardUi

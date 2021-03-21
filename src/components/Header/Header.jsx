import React from 'react'
import { Typography, PageHeader, Button, Divider } from 'antd';

const Header = () => {
    const { Title } = Typography;

    return (
        <div style={{ marginBottom: '30px' }}>
            <Title style={{ margin: '0px' }}>Iron Films</Title>
            <PageHeader
                style={{ padding: '0px' }}
                className="site-page-header"
                title="React component state tutorial"
                extra={[
                    <Button key="1" type="primary" onClick={ () => { window.location.href = 'https://github.com/manucaralmo/react-films-lab' } }>
                        Github project
                    </Button>,
                ]}
            />
            <Divider />
        </div>
    )
}

export default Header

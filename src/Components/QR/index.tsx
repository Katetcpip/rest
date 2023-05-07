import { useState } from 'react'
import { Input, QRCode, Space } from 'antd'

const Code: React.FC = () => {
    const [text, setText] = useState(
        'https://eda.yandex.ru/moscow?shippingType=delivery'
    )

    return (
        <Space direction="vertical" align="center">
            <QRCode value={text || '-'} />
            <Input
                placeholder="-"
                maxLength={60}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </Space>
    )
}

export default Code

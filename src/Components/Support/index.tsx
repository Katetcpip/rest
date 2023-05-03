import { Modal } from 'antd';
import {useState} from 'react'
import { SmileOutlined } from '@ant-design/icons';
import { Form, Button, Input, notification } from 'antd';
import './styles.css'

const Support = () => {

    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    
    const openNotification = () => {
      api.open({
        message: 'Успешно!',
        description:
          'Мы получили ваше сообщение и обработаем его в ближайшее время!',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    };

    const showModal = () => {
        setIsModalOpen(true);
      };
        
    const handleOk = () => {
        setIsModalOpen(false);
        setMsg("")
        setName('')
        openNotification();
      };

     const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
        handleOk()
    };

    return(
        <>
        {contextHolder}
        <div className='rounded-full p-3 bg-yellow-300 fixed bottom-6 left-10 flex items-center justify-center' onClick={showModal}>
            <img alt='' className='w-10 h-10' src='https://cdn1.iconfinder.com/data/icons/basic-line-6/1024/message-512.png'></img>
        </div>

        <Modal  title="🥷ОБРАЩЕНИЕ В ПОДДЕРЖКУ" className="text-2xl flex flex-col mt-20"
                open={isModalOpen}>

            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="Your name" label="Your name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </Form>
        </Modal>
        </>
    )
}

export default Support;
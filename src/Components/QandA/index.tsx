import { Collapse } from 'antd'

const { Panel } = Collapse

const QandA: React.FC = () => {
    const onChange = (key: string | string[]): void => {
        console.log(key)
    }

    return (
        <Collapse
            defaultActiveKey={['1']}
            onChange={onChange}
            className="w-full"
        >
            <Panel header="Где мой заказ?" key="1">
                <p>
                    Внимательно проверили: заказ привезли вам не позднее
                    ориентировочного времени доставки, указанного в приложении.
                </p>
            </Panel>

            <Panel header="Вопросы по приложению" key="2">
                <p>
                    Расскажите, что случилось с приложением? Если получится,
                    отправьте нам скриншот или запись экрана, так мы быстрее
                    разберёмся и поможем.
                </p>
            </Panel>

            <Panel header="Управление историей заказов" key="3">
                <p>
                    Вы можете управлять своей историей заказов в Еде: — Чтобы
                    скрыть заказы в приложении, зайдите в «Заказы», найдите
                    нужный заказ и нажмите кнопку «Скрыть». — Чтобы удалить
                    историю заказов через Яндекс ID, перейдите в раздел
                    «Удаление данных» и найдите Яндекс Еду. На этой же странице
                    можно отслеживать статус удаления. После удаления вы не
                    увидите заказы из ресторанов и магазинов, но вам будут
                    доступны заказы в других сервисах, например, в Лавке.
                </p>
            </Panel>

            <Panel header="Деньги не вернулись" key="4">
                <p>
                    При отмене деньги приходят на карту почти сразу. А при
                    возврате могут идти около 7 дней — зависит от вашего банка.
                    Если деньги не вернутся через неделю, свяжитесь с нами —
                    будем разбираться вместе.
                </p>
            </Panel>

            <Panel header="У меня другой вопрос" key="5">
                <p>
                    Сейчас у нас очень много обращений, стараемся помочь всем,
                    но на запросы без темы будем отвечать дольше — в течение
                    дня. Уточните суть вашего вопроса, выбрав подходящую тему
                    выше.
                </p>
            </Panel>
        </Collapse>
    )
}

export default QandA

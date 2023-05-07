import Render from 'Components/Render'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import RestPage from 'Components/RestPage'
import StartPage from 'Components/StartPage'
import Cart from 'Components/Cart'
import { Rest } from 'Components/RestPage'
import { FrownOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import { Result, Button } from 'antd'

export type CartType = {
    name: string
    price: number
    quantity: number
    restaurantId: number
    itemId: number
}

function App() {
    const [restaurants, setRestaurants] = useState(Array<Rest>)

    const [load, setLoad] = useState(true)

    const [copyArray, setcopyArray] = useState(Array<Rest>)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.bit-by-bit.ru/api/student-projects/restaurants'
            )
            setRestaurants(result.data)
            setcopyArray(result.data)
            setLoad(false)
        }
        fetchData()
    }, [])

    const onChange = (whatToSet: Array<Rest>): void => {
        setRestaurants(whatToSet)
    }

    const [cartItems, setCartItems] = useState(Array<CartType>)

    const [api, contextHolder] = notification.useNotification()

    const openNotification = (): void => {
        api.open({
            message: 'Упс!',
            description:
                'Один заказ - один ресторан. Для продолжения удалите товары из корзины!',
            icon: <FrownOutlined style={{ color: '#108ee9' }} />,
        })
    }

    const actionInCart = (newCart: Array<CartType>): void => {
        setCartItems(newCart)
    }

    useEffect(() => {
        let newArr: Array<CartType> = JSON.parse(
            localStorage.getItem('cart') || 'null'
        )
        if (newArr !== null) setCartItems(newArr)
    }, [])

    const addToCart = (
        price: number,
        name: string,
        restaurantId: number,
        itemId: number
    ): void => {
        let quantity = 1
        let item: CartType = { name, restaurantId, itemId, quantity, price }
        let copyArr2: Array<CartType> = [...cartItems]

        if (copyArr2.length === 0) {
            copyArr2.push(item)
            setCartItems([...cartItems, item])
            localStorage.setItem('cart', JSON.stringify(copyArr2))
        } else if (
            copyArr2.length !== 0 &&
            restaurantId === copyArr2[0].restaurantId
        ) {
            let findItem: number | boolean = copyArr2.findIndex(
                (el) => el.name === name
            )
            if (findItem !== -1) {
                copyArr2[findItem].quantity = copyArr2[findItem].quantity + 1
                setCartItems(copyArr2)
                localStorage.setItem('cart', JSON.stringify(copyArr2))
            }
            if (findItem === -1) {
                copyArr2.push(item)
                setCartItems([...cartItems, item])
                localStorage.setItem('cart', JSON.stringify(copyArr2))
            }
        } else if (
            copyArr2.length !== 0 &&
            restaurantId !== copyArr2[0].restaurantId
        ) {
            openNotification()
        }
    }

    const removeFromCart = (name: string): void => {
        let newArr: Array<CartType> = [...cartItems]
        let result: number | boolean = newArr.findIndex(
            (el) => el.name === name
        )

        if (newArr[result].quantity >= 1) {
            newArr[result].quantity = newArr[result].quantity - 1
            setCartItems(newArr)
            localStorage.setItem('cart', JSON.stringify(newArr))
        }

        if (newArr[result].quantity === 0) {
            newArr.splice(result, 1)
            setCartItems(newArr)
            localStorage.setItem('cart', JSON.stringify(newArr))
        }
    }

    const deleteAllCart = (): void => {
        let newArr: Array<CartType> = []
        setCartItems(newArr)
        localStorage.setItem('cart', JSON.stringify(newArr))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Result
                            title="404"
                            status="404"
                            subTitle="Кажется, такой страницы нет..."
                            extra={
                                <Link
                                    to="/rest"
                                    className="flex justify-center w-full"
                                >
                                    <Button
                                        className="!flex !border !border-blue-400 hover:scale-105 !text-blue-400"
                                        type="primary"
                                    >
                                        Вернуться к ресторанам
                                    </Button>
                                </Link>
                            }
                        />
                    }
                ></Route>
                <Route path="/" element={<StartPage />}></Route>
                <Route
                    path="/cart"
                    element={
                        <Cart
                            removeFromCart={removeFromCart}
                            cartItems={cartItems}
                            deleteAllCart={deleteAllCart}
                            actionInCart={actionInCart}
                            copyArray={copyArray}
                            onChange={onChange}
                        />
                    }
                ></Route>
                <Route
                    path="/rest"
                    element={
                        <Render
                            cartItems={cartItems}
                            restaurants={restaurants}
                            copyArray={copyArray}
                            load={load}
                            onChange={onChange}
                        />
                    }
                ></Route>
                <Route
                    path="/rest/:slug"
                    element={
                        <RestPage
                            copyArray={copyArray}
                            onChange={onChange}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            cartItems={cartItems}
                            contextHolder={contextHolder}
                        />
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

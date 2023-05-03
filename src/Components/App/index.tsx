import Render from 'Components/Render';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestPage from 'Components/RestPage';
import StartPage from 'Components/StartPage';
import Cart from 'Components/Cart';
import { Rest } from 'Components/RestPage';
import { FrownOutlined } from '@ant-design/icons';
import { notification } from 'antd';

export type CartType =   {
    name: string,
    price: any,
    amount: number,
    restaurantId : any
}

function App() {

    const [restaurants, setRestaurants] = useState(Array<Rest>);

    const [load, setLoad] = useState(true);

    const [copyArray, setcopyArray] = useState([
        {
            id: 1,
            name: 'example',
            slug: 'url-example',
            phone: 'tel-example',
            email : 'mailexample-example',
            cuisine : 'type k-example',
            address : 'address-example',
            image : 'img-example',
            openAt :'timeopen-example',
            closeAt : 'timeclose-example',
            description :'descr-example',
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.bit-by-bit.ru/api/student-projects/restaurants',
            );
            setRestaurants(result.data);
            setcopyArray(result.data);
            setLoad(false)
        };
        fetchData();
    }, []);

    const onChange = (whatToSet : any) => {
        setRestaurants(whatToSet)
    }
    const [cartItems, setCartItems] = useState(Array<CartType>);

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
      api.open({
        message: 'Упс!',
        description:
          'Один заказ - один ресторан. Для продолжения удалите товары из корзины!',
        icon: <FrownOutlined style={{ color: '#108ee9' }} />,
      });
    };

    const actionInCart = (newCart : Array<CartType>) => {
        setCartItems(newCart)
    }

    useEffect(() => {
        let newArr = JSON.parse(localStorage.getItem('cart') || "null");
        if (newArr !== null) 
        setCartItems(newArr)
      },[]);

    const addToCart = (price:any, name:any, restaurantId:any) =>{
        let amount = 1;
        let item = {name, price, amount, restaurantId};
        let copyArr2 : Array<CartType> = JSON.parse(JSON.stringify(cartItems))

        if (copyArr2.length === 0)
            {copyArr2.push(item)
            setCartItems([...cartItems, item])
            localStorage.setItem("cart", JSON.stringify(copyArr2))
            }

            else if(copyArr2.length !== 0 && restaurantId === copyArr2[0].restaurantId) {
                let findItem = copyArr2.findIndex(el => el.name === name)
                if (findItem !== -1) {
                    copyArr2[findItem].amount = copyArr2[findItem].amount + 1;
                    setCartItems(copyArr2)
                    localStorage.setItem("cart", JSON.stringify(copyArr2))
             }
                if (findItem === -1){
                    copyArr2.push(item)
                    setCartItems([...cartItems, item])
                    localStorage.setItem("cart", JSON.stringify(copyArr2))
                }
            }

            else if (copyArr2.length !== 0 && restaurantId !== copyArr2[0].restaurantId) {
            openNotification();
            } 
    }

    const removeFromCart = (name:any) =>{
        let newArr : Array<CartType> = JSON.parse(JSON.stringify(cartItems))
        let result = newArr.findIndex(el => el.name === name)

        if (newArr[result].amount >= 1) {
            newArr[result].amount = newArr[result].amount - 1;
            setCartItems(newArr)
            localStorage.setItem("cart", JSON.stringify(newArr))
        }

        if (newArr[result].amount === 0) {
            newArr.splice(result, 1);
            setCartItems(newArr)
            localStorage.setItem("cart", JSON.stringify(newArr))
        }
    }

    const deleteAllCart = () =>{
        let newArr : Array<any> = [];
        setCartItems(newArr)
        localStorage.setItem("cart", JSON.stringify(newArr))
    }

    return ( 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<StartPage/>}></Route>
            <Route path='/cart' element={<Cart cartItems={cartItems} deleteAllCart={deleteAllCart} actionInCart={actionInCart}/>}></Route>
            <Route path='/rest' element={<Render restaurants={restaurants} copyArray={copyArray} load={load} onChange={onChange}/>}></Route>
            <Route path='/rest/:slug' element={<RestPage copyArray={copyArray} onChange={onChange} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} contextHolder={contextHolder}/>}></Route>
        </Routes>
        </BrowserRouter> 
    );
}
export default App;
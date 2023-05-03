import Nav from "Components/Navigation";
import Footer from "Components/Footer";
import { Result } from 'antd';
import { nanoid } from 'nanoid'
import { CartType } from "Components/App";
import {Link} from 'react-router-dom'
import {ArrowLeftOutlined} from '@ant-design/icons'
 
const Cart = ({cartItems, deleteAllCart, actionInCart}:any) => {

    const addToCart = (name:any) =>{
        let newArr : Array<CartType> = JSON.parse(JSON.stringify(cartItems))
        let indexItem = newArr.findIndex(el => el.name === name)
        newArr[indexItem].amount = newArr[indexItem].amount + 1;
        actionInCart(newArr)
        localStorage.setItem("cart", JSON.stringify(newArr))
        itemsAmount(newArr);
    }

    const removeFromCart = (name:any) =>{
        let newArr : Array<CartType> = JSON.parse(JSON.stringify(cartItems))
        let indexItem = newArr.findIndex(el => el.name === name)

        if ( newArr[indexItem].amount > 1){
        newArr[indexItem].amount = newArr[indexItem].amount - 1;
        actionInCart(newArr)
        localStorage.setItem("cart", JSON.stringify(newArr))
        }
        itemsAmount(newArr);
    }

    const itemsAmount = (cartToSum : Array<CartType>) => {
        let sum = 0;
        cartToSum.map((el : CartType) => sum = sum + Math.round(el.price * el.amount)) 
        return sum;
    }

     return(
        <div className="min-h-screen flex flex-col">
        <Nav/>

        <div className="w-full flex flex-row pt-6 mb-10">
            <Link to='/rest'>
                <div className="w-fit pl-8 pt-1 flex items-center h-full text-2xl"><ArrowLeftOutlined /></div>
            </Link>
            <p className="pl-2 text-4xl font-bold w-fit flex items-center">Корзина</p>
            {cartItems.length !== 0 &&
                <div onClick={ deleteAllCart} className="p-4 rounded-2xl bg-white shadow-md text-yellow-500 border border-yellow-200 mr-8 w-fit ml-auto h-fit hover:bg-yellow-200 font-semibold">Очистить корзину</div>
            }
        </div>

        {cartItems.length === 0 
            ? 
                <Result
                status="404"
                title="404"
                subTitle="Кажется, в корзине пусто..."
            />
            : 
            <div className="flex flex-col pt-4 items-center w-full mb-20">  
                {cartItems.map((item:any) => (
                    <div key={nanoid()} className="flex flex-col rounded-xl w-1/2 p-3 pr-10 pl-8 bg-yellow-100 m-auto mb-4">
                        <div className="flex flex-row justify-start pl-2 h-fit items-center">
                            <p className="text-md font-bold pr-4 text-slate-700 cursor-pointer">{cartItems.indexOf(item)+1}. </p>
                            <p className="text-md font-normal pr-4 text-slate-700 w-1/3">{item.name}</p>
                            <p className="text-md font-semibold pr-4 text-slate-700 ml-4 w-1/6 text-center">{Math.round(item.price * item.amount)} ₽</p>
                            <div onClick={() => removeFromCart(item.name)} className="ml-auto cursor-pointer">➖</div>
                            <p className="text-md font-normal pr-4 text-slate-700 rounded-full bg-white flex justify-center p-2 px-4 border-2 border-yellow-400 ml-1 mr-1"> {item.amount} </p>
                            <div onClick={() => addToCart(item.name)} className="cursor-pointer">➕</div>
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 &&
                    <div className="flex flex-row justify-center rounded-xl w-1/2 p-3 pr-10 pl-10 border m-auto">
                        <p>Сумма заказа: {itemsAmount(cartItems)}  ₽</p>
                        <div className="ml-auto font-bold">ОФОРМИТЬ</div>
                    </div>
                 }
            </div>
            }       
        <Footer/>
        </div>
         )
}

export default Cart;
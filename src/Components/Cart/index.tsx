import Nav from "Components/Navigation";
import Footer from "Components/Footer";
import { Result, notification } from 'antd';
import { nanoid } from 'nanoid'
import { CartType } from "Components/App";
import {Link} from 'react-router-dom'
import {ArrowLeftOutlined} from '@ant-design/icons'
import FormOrder from "Components/Form";
import { SmileOutlined } from '@ant-design/icons';
import { Rest } from "Components/RestPage";
 
type finalCart = {
    itemId: number,
    quantity: number,
    price:any
}

type Request = {
    customerName: string,
    phone: any,
    email: string,
    restaurantId: number,
    cartItems: Array<finalCart>
}

type FormData = {
    firstName : string,
    phone : number,
    email : string
}

type Props = {
    cartItems : Array<CartType>,
    deleteAllCart : () => void,
    actionInCart : (a : Array<CartType>) => void,
    copyArray : Array<Rest>,
    onChange : (a : Array<Rest>) => void
}

const Cart = ({cartItems, deleteAllCart, actionInCart, copyArray, onChange} : Props) => {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () : void => {
      api.open({
        message: 'Успешно!',
        description:
          'Мы получили ваш заказ и уже работаем над ним!',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    };

    const addToCart = (name : string) : void => {
        let newArr : Array<CartType> = JSON.parse(JSON.stringify(cartItems))
        let indexItem : number | boolean = newArr.findIndex((el : CartType) => el.name === name)
        newArr[indexItem].quantity = newArr[indexItem].quantity  + 1;
        actionInCart(newArr)
        localStorage.setItem("cart", JSON.stringify(newArr))
        itemsquantity (newArr);
    }

    const removeFromCart = (name : string) : void => {
        let newArr : Array<CartType> = JSON.parse(JSON.stringify(cartItems))
        let indexItem : number | boolean = newArr.findIndex((el : CartType) => el.name === name)

        if ( newArr[indexItem].quantity > 1){
            newArr[indexItem].quantity  = newArr[indexItem].quantity  - 1;
            actionInCart(newArr)
            localStorage.setItem("cart", JSON.stringify(newArr))
        }

        itemsquantity (newArr);
    }

    const itemsquantity  = (cartToSum : Array<CartType>) : number => {
        let sum = 0;
        cartToSum.map((el : CartType) => sum = sum + Math.round(el.price * el.quantity )) 
        return sum;
    }

    const fromFormData = (formData : FormData) : void => {
        registerOrder(cartItems, formData)
    }

    const registerOrder = (cartItems : Array<CartType>, formData : FormData) : void => {
        const finalCart : Array<finalCart> = cartItems.map(({name, restaurantId, ...keepAttrs}) => keepAttrs)   

        const requestBody : Request = {
            customerName: formData.firstName,
            phone: formData.phone,
            email: formData.email,
            restaurantId: cartItems[0].restaurantId,
            cartItems: finalCart
         }
         
         const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestBody)
        }

        fetch('https://www.bit-by-bit.ru/api/student-projects/restaurants/order', requestOptions)
        .then(response => response.json())
        .then(data => openNotification());
    }

     return(
        <div className="min-h-screen flex flex-col">
            {contextHolder}
            <Nav copyArray={copyArray} onChange={onChange}/>

            <div className="w-full flex flex-row pt-6 mb-10">
                <Link to='/rest'>
                    <div className="w-fit pl-8 pt-1 flex items-center h-full md:text-2xl text-xl">
                        <ArrowLeftOutlined />
                    </div>
                </Link>
                <p className="pl-2 md:text-4xl text-xl font-bold w-fit flex items-center">Корзина</p>
                {cartItems.length !== 0 &&
                    <div onClick={ deleteAllCart} className="md:p-4 p-2 rounded-2xl bg-white shadow-md text-yellow-500 border border-yellow-200 mr-8 w-fit ml-auto h-fit hover:bg-yellow-200 font-semibold">Очистить корзину</div>
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
                    {cartItems.map((item : CartType) => (
                        <div key={nanoid()} className="flex flex-col rounded-xl xl:w-1/2 w-11/12 p-3 md:pr-10 pr-4 md:pl-8 pl-2 bg-yellow-100 m-auto mb-4">
                            <div className="flex flex-row justify-start pl-2 h-fit items-center">
                                <p className="text-md font-bold pr-4 text-slate-700 cursor-pointer lg:text-base text-sm">{cartItems.indexOf(item)+1}. </p>
                                <p className="text-md font-normal pr-4 text-slate-700 w-1/3 lg:text-base text-sm">{item.name}</p>
                                <p className="text-md font-semibold pr-4 text-slate-700 ml-4 w-1/6 text-center lg:text-base text-sm">{Math.round(item.price * item.quantity )} ₽</p>
                                <div onClick={() => removeFromCart(item.name)} className="ml-auto cursor-pointer lg:text-base text-чы">➖</div>
                                <p className="text-md font-normal pr-4 text-slate-700 rounded-full bg-white flex justify-center p-2 lg:px-4 px-4 border-2 border-yellow-400 ml-1 mr-1 lg:text-base text-sm"> {item.quantity } </p>
                                <div onClick={() => addToCart(item.name)} className="cursor-pointer lg:text-base text-чы">➕</div>
                            </div>
                        </div>
                    ))}
                    {cartItems.length !== 0 &&
                        <div className="flex flex-row flex-wrap justify-center xl:w-1/2 w-11/12 m-auto">
                            <p className="lg:w-fit w-full border-2 md:mb-0 mb-4 border-yellow-400 p-3 rounded-xl h-fit mr-auto"> Сумма заказа: {itemsquantity(cartItems)}  ₽</p>
                            <FormOrder fromFormData={fromFormData}/>
                        </div>
                    }
                </div>
            }       
            <Footer/>
        </div>
    )
}

export default Cart;
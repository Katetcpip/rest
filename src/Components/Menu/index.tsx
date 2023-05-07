import {useEffect, useState} from 'react';
import { nanoid } from 'nanoid'
import axios from 'axios';
import './styles.css';
import QandA from 'Components/QandA';
import Support from 'Components/Support';
import { CartType } from 'Components/App';

type Dishes = {
    id: number,
    restaurantId: number,
    name : string,
    image: string,
    description : string,
    price  : number,
}

type Props = {
    slug : string | undefined,
    addToCart : (price:number, name:string, restaurantId:number, itemId:number) => void,
    removeFromCart : (name : string) => void,
    cartItems : Array<CartType>
}

const Menu = ({slug, addToCart, removeFromCart, cartItems} : Props) => {

    const [dishes, setDishes] = useState(Array<Dishes>);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`,
            );
            setDishes(result.data);
        };
        fetchData();
    }, [slug]);

     return(
        <>
        <div className="flex flex-row flex-wrap gap-1 pt-4 justify-between w-full mb-20 border-t border-yellow-300 ">
            {dishes.map((item : Dishes) => (
                <div key={nanoid()} className="flex flex-col rounded-xl widthCard p-4 shadow-xl">
                    <div className="flex flex-col relative mb-2"> 
                            <img alt='' src={item.image} className="w-full h-44 rounded-lg object-cover z-0"></img>
                    </div>

                    <div className="flex flex-col pb-4 pl-2 h-fit pb-0">
                        <p className="lg:text-2xl text-xl font-semibold pr-4 text-slate-700"> {item.price}₽</p>
                        <p className="lg:text-base text-sm font-normal text-slate-800 pb-4"> {item.name}</p>                          
                        <p className="lg:text-sm text-xs font-normal pr-4 text-slate-400">  {item.description}</p>
                    </div>

                    <div className='flex w-full justify-center mt-auto'>
                        <div className='font-semibold bg-slate-100 p-3 rounded-2xl flex 
                            justify-center w-full cursor-pointer hover:bg-slate-200 
                            hover:duration-700 transition'>
                            {cartItems.filter((el : CartType) => el.name === item.name).length <= 0 
                                ? <div className='w-full flex justify-center' onClick={() => addToCart(item.price, item.name, item.restaurantId, item.id)}>➕ Добавить</div>
                                : (
                                    <>
                                    <div className='flex items-center pl-3 w-1/5 h-full' onClick={() => removeFromCart(item.name)}>➖</div>
                                    <div className='px-3 w-3/5 text-center'>{cartItems.filter((el : CartType)=> el.name === item.name)[0].quantity }</div> 
                                    <div className='flex items-center pr-3 w-1/5' onClick={() => addToCart(item.price, item.name, item.restaurantId, item.id)}>➕</div>   
                                    </>
                                )
                            }
                        </div>
                    </div>

                </div>
            ))}
        </div>
        <QandA/>
        <Support/>
        </>
    )
}

export default Menu;
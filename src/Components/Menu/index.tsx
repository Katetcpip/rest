import {useEffect, useState} from 'react';
import { nanoid } from 'nanoid'
import axios from 'axios';
import './styles.css';
import QandA from 'Components/QandA';

const Menu = ({slug}:any) => {

    const [dishes, setDishes] = useState([
        {
            id: 0,
            restaurantId: 'example',
            name : 'name-example',
            image: 'img-example',
            description : 'descr-example',
            price  : 'price-example',
        }
    ]);

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
                {dishes.map((item:any) => (
                    <div key={nanoid()} className="flex flex-col rounded-xl widthCard p-4 shadow-xl">
                       <div className="flex flex-col relative mb-2"> 
                            <img alt='' src={item.image} className="w-full h-44 rounded-lg object-cover z-0"></img>
                       </div>
                            <div className="flex flex-col pb-4 pl-2 h-fit pb-0">
                            <p className="text-2xl font-semibold pr-4 text-slate-700"> {item.price}₽</p>
                                <p className="text-base font-normal text-slate-800 pb-4"> {item.name}</p>                          
                                <p className="text-sm font-normal pr-4 text-slate-400">  {item.description}</p>
                            </div>
                            <div className='flex w-full justify-center mt-auto'>
                                <div className='font-semibold bg-slate-100 p-3 rounded-2xl flex justify-center w-full cursor-pointer hover:bg-slate-200 hover:duration-700 transition'>➕ Добавить</div>
                            </div>
                    </div>
                ))}
            </div>
            <QandA/>
        </>
         )
}

export default Menu;
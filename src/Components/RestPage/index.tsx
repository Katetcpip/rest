import ImageGrid from "Components/Skeleton";
import {useEffect, useState} from 'react';
import axios from 'axios';
import dateFormat from "dateformat";
import { Modal } from 'antd';
import {useParams} from 'react-router-dom'
import './styles.css'
import Menu from "Components/Menu";
import {Link} from 'react-router-dom'
import {ArrowLeftOutlined} from '@ant-design/icons'
import ComponentDemo from "Components/Advertising";
import ScrollButton from "Components/ScrollButton";
import Nav from "Components/Navigation";
import Footer from "Components/Footer";
import { CartType } from "Components/App";

export type Rest = {
    id: number,
    name: string,
    slug: string,
    phone: any,
    email : string,
    cuisine : string,
    address : string,
    image : string,
    openAt :any,
    closeAt : any,
    description :string,
}

type Props = {
    copyArray : Array<Rest> ,
    onChange : (a:any) => void,
    removeFromCart : (name: string) => void,
    addToCart : (price:number, name:string, restaurantId:number, itemId:number) => void,
    cartItems : Array<CartType>,
    contextHolder : any
}

const RestPage = ({copyArray, onChange, removeFromCart, addToCart, cartItems, contextHolder} : Props) => {

    const {slug} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`,
            );
            setLoad(false);
            setRestaurant(result.data);
            console.log(result.data)
        };
        fetchData();
    }, [slug]);

    const [restaurant, setRestaurant] = useState<Rest>();
   
    const [load, setLoad] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return(
       <div className="min-h-screen flex flex-col">   
            {contextHolder}  
            <Nav copyArray={copyArray} onChange={onChange}/>
            <div className="flex flex-row flex-wrap gap-5 p-4 justify-center w-full mb-4"> 
            <Link to='/rest'>
                  <div className="w-fit font-semibold bg-slate-100 p-3 rounded-2xl cursor-pointer top-0 px-10 sm:fixed top-28 left-16 right-0 flex items-center gap-2"><ArrowLeftOutlined />Все реcтораны</div>
            </Link>
            {load ? <div className="flex justify-center">
                         <ImageGrid/>
                    </div> 
            : (restaurant !== undefined &&                 
                <div className="flex flex-row flex-wrap gap-5 p-4 justify-center lg:w-3/5 sm:w-4/5 w-full mb-8"> 
                    <div className="flex flex-col rounded-xl w-full">
                       <div className="flex flex-col items-center w-full h-fit relative">
                            <img className="rounded-xl w-full h-72 object-cover z-0" alt="" src={restaurant.image}></img>
                            <div className="rounded-xl w-full h-full object-cover z-10 bg-slate-800 absolute left-0 bottom-0 opacity-60 bg-gradient-to-r from-gray-900 via-slate-800 to-yellow-600"></div>
                            <p className="text-white font-bold sm:text-5xl text-3xl absolute left-4 bottom-20 z-30">{restaurant.name}</p>
                            <div className="flex flex-row gap-2 absolute left-4 bottom-4 z-30">
                                <div className="rounded-xl text-slate-800 bg-white p-2 font-bold opacity-70">
                                    {restaurant.cuisine.toUpperCase()}
                                </div>
                                <div className="rounded-xl text-slate-800 bg-white p-2 font-semibold opacity-70">
                                    🕖 {dateFormat((restaurant.openAt), "shortTime")} - {dateFormat((restaurant.closeAt), "shortTime")}
                                </div>
                                <div className="rounded-xl text-slate-800 bg-white p-2 font-semibold opacity-70 hover:scale-105 hover:bg-gray-100 transition hover:duration-700"  
                                    onClick={showModal}>❓
                                </div>
                                <Modal title="ADDITIONAL INFORMATION" 
                                        className="font-semibold text-2xl"
                                        open={isModalOpen} 
                                        onOk={handleOk} 
                                        onCancel={handleCancel}>
                                    <p className="text-slate-800 p-2 border-b text-red-800">{restaurant.cuisine.toUpperCase()}</p>
                                    <p className="text-slate-800 p-2 border-b">🕗 {dateFormat((restaurant.openAt), "shortTime")} - {dateFormat((restaurant.closeAt), "shortTime")}</p>
                                    <p className="text-slate-800 p-2 border-b font-normal">✉️ {restaurant.email}</p>
                                    <p className="text-slate-800 p-2 border-b font-normal">📞 {restaurant.phone}</p>
                                    <p className="text-slate-800 p-2 border-b font-normal">{restaurant.description}</p>
                                </Modal>
                            </div>
                       </div>
                    </div>  
                    <ComponentDemo text="✨ Кешбэк с заказа — 5% вернём на Плюс"/>
                    <ComponentDemo text="🎁 Блюдо в подрок при заказе от 1000₽"/>
                    <ScrollButton />
                    <div className='pt-10 w-full flex m-auto md:text-4xl text-2xl font-semibold text-gray-800 '>Для вас</div>
                    <Menu slug={slug} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}/>
                </div>)
            }
            </div>
            <Footer/>
        </div>
    )
}

export default RestPage;
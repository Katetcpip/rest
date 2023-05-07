import ImageGrid from "Components/Skeleton";
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";
import './styles.css'
import {Link} from 'react-router-dom'
import ScrollButton from "Components/ScrollButton";
import { Rest } from "Components/RestPage";
import { CartType } from "Components/App";
import PageLayout from "Components/PageLayout";

type Props = {
    restaurants : Array<Rest>,
    copyArray : Array<Rest>,
    load : boolean,
    onChange : (a : Array<Rest>) => void,
    cartItems : Array<CartType>
}

type CuisineType = {
    value : string,
    title : string
}

const cuisines : CuisineType[] = [
    {
        value : 'all',
        title: 'Все'
    },
    {
        value : 'pasta',
        title: 'Паста'
    },
    {
        value : 'pizza',
        title: 'Пицца'
    },
    {
        value : 'burger',
        title: 'Бургер'
    }
] 

const Render = ({restaurants, copyArray, load, onChange, cartItems} : Props) => {

    const [filter, setFilter] = useState(cuisines[0].value)

    const makeFilter = (cType: string): void => {
        setFilter(cType)
        if (cType === 'all'){onChange(copyArray)}
        else{
        const arrayTop: Array<Rest> = copyArray.filter(
            (el : Rest) => el.cuisine === cType
        );
        onChange(arrayTop)}
    }

    return(
        <PageLayout cartItems={cartItems} copyArray={copyArray} onChange={onChange}>
        <div className="min-h-screen flex flex-col">
            <div className='p-4 md:pt-6 pt-2 md:text-4xl text-2xl font-bold text-gray-800 mt-4'>Рестораны</div>

            <div className="px-3 md:py-3 py-1 rounded-3xl bg-slate-100 m-4 flex flex-row flex-wrap gap-3">

                {cuisines.map((c: CuisineType) => (
                    <div
                        className={
                        c.value !== filter
                        ? "filter hover:bg-slate-200 md:text-xl text-sm md:py-3 py-2" 
                        : "bg-slate-700 text-slate-200 hover:text-black filter hover:bg-slate-200 md:text-xl text-sm md:py-3 py-2"
                        }
                        onClick={() => makeFilter(c.value)}
                        >
                            {c.title}
                    </div>
                ))}

            </div>

            {load 
                ? <div className="flex justify-center">
                    <ImageGrid/>
                  </div> 
                : <div className="flex flex-row flex-wrap gap-5 p-4 lg:justify-center justify-between w-full mb-20">
                    {restaurants.map((item : Rest) => (
                        <div key={uuidv4()} className="flex flex-col rounded-xl w-full md:w-1/4 sm:w-1/3 lg:w-1/5 hover:scale-95 transition hover:duration-700">
                            <Link to={`/rest/${item.slug}`}>

                            <div className="flex flex-col relative mb-2"> 
                                <img alt='' src={item.image} className="w-full h-44 rounded-lg object-cover z-0"></img>
                                <div className="absolute right-0 bottom-0 text-white w-fit  p-1 rounded-tl-lg rounded-br-lg bg-slate-700">
                                    {dateFormat((item.openAt), "shortTime")} - {dateFormat((item.closeAt), "shortTime")} 
                                </div>
                            </div>
                        
                            <div className="flex flex-col pb-4 gap-1 border-l-2 pl-2 h-fit pb-0 border-yellow-300">
                                <p className="text-xl font-semibold pb-1"> {item.name}</p>                         
                                <p className="text-slate-700 border-2 border-yellow-300 rounded-2xl p-1 pl-2 pr-4 font-semibold w-fit">🥙  {item.cuisine}</p>
                                <p className="text-slate-700 p-1 pl-2 font-semibold w-fit text-base">☎️ {item.phone}</p>
                                <p className="text-slate-700 bg-slate-100 rounded-xl p-1 pl-2 font-semibold w-fit lg:flex hidden flex-wrap text-xs">✉️  {item.email}</p>
                                <p className="text-sm font-semibold pr-4 text-slate-700">  {item.address}</p>
                            </div>

                            </Link>
                        </div>
                    ))}
                </div>
            }
        <ScrollButton />
        </div>
        </PageLayout>
    )
}

export default Render;
import ImageGrid from "Components/Skeleton";
import {useEffect, useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import dateFormat, { masks } from "dateformat";

const Render = () => {
    const [restaurants, setRestaurants] = useState([
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
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.bit-by-bit.ru/api/student-projects/restaurants',
            );
            setRestaurants(result.data);
            setLoad(false)
        };
        fetchData();
    }, []);

     return(
        <>
        {load ? <div className="flex justify-center">
            <ImageGrid/>
            </div> 
            : <div className="flex flex-row flex-wrap gap-5 p-4 justify-center w-full mb-20">
                {restaurants.map(item => (
                    <div key={uuidv4()} className="flex flex-col rounded-xl w-1/6">
                       <div className="flex flex-col relative mb-2"> 
                            <img alt='' src={item.image} className="w-full h-44 rounded-lg object-cover"></img>
                            <div className="absolute right-0 bottom-0 text-white w-fit  p-1 rounded-tl-lg rounded-br-lg bg-slate-700">
                                 {dateFormat((item.openAt), "shortTime")} - {dateFormat((item.closeAt), "shortTime")} 
                            </div>
                       </div>
                        <div className="flex flex-col pb-4 gap-1 border-l-2 pl-2 h-fit pb-0 border-yellow-300">
                            <p className="text-xl font-semibold pb-1"> {item.name}</p>                         
                            <p className="text-slate-700 border-2 border-yellow-300 rounded-2xl p-1 pl-2 pr-4 font-semibold w-fit">🥙  {item.cuisine}</p>
                            <p className="text-slate-700 p-1 pl-2 font-semibold w-fit text-base">☎️ {item.phone}</p>
                            <p className="text-slate-700 bg-slate-100 rounded-xl p-1 pl-2 font-semibold w-fit text-xs">✉️  {item.email}</p>
                            <p className="text-sm font-semibold pr-4 text-slate-700">  {item.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        }
        </>
         )
}

export default Render;
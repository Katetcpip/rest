import ImageGrid from "Components/Skeleton";
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";
import './styles.css'
import {Link} from 'react-router-dom'
import ScrollButton from "Components/ScrollButton";


const Render = ({restaurants, copyArray, load, onChange} : any) => {
  
    const [butTop, setButTop] = useState(false);
    const [butAll, setButAll] = useState(true);
    const [butPasta, setButPasta] = useState(false)
    const [butOut, setButOut] = useState(false)
    const [butPizza, setButPizza] = useState(false)
    const [butBurger, setButBurger] = useState(false)

    // const [restaurants, setRestaurants] = useState([
    //     {
    //         id: 1,
    //         name: 'example',
    //         slug: 'url-example',
    //         phone: 'tel-example',
    //         email : 'mailexample-example',
    //         cuisine : 'type k-example',
    //         address : 'address-example',
    //         image : 'img-example',
    //         openAt :'timeopen-example',
    //         closeAt : 'timeclose-example',
    //         description :'descr-example',
    //     }
    // ]);
    // const [load, setLoad] = useState(true);

    // const [copyArray, setcopyArray] = useState([
    //     {
    //         id: 1,
    //         name: 'example',
    //         slug: 'url-example',
    //         phone: 'tel-example',
    //         email : 'mailexample-example',
    //         cuisine : 'type k-example',
    //         address : 'address-example',
    //         image : 'img-example',
    //         openAt :'timeopen-example',
    //         closeAt : 'timeclose-example',
    //         description :'descr-example',
    //     }
    // ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             'https://www.bit-by-bit.ru/api/student-projects/restaurants',
    //         );
    //         setRestaurants(result.data);
    //         setcopyArray(result.data);
    //         setLoad(false)
    //     };
    //     fetchData();
    // }, []);

    const filterTop = () => {
        const arrayTop = copyArray.filter((el : any) => el.phone[0] === '3');
        onChange(arrayTop);
        setButTop(true);
        setButAll(false);
        setButPasta(false);
        setButOut(false);
        setButPizza(false);
        setButBurger(false);
    }
    const filterOut = () => {
        const arrayOut = copyArray.filter((el:any) => el.phone[2] === '2' || el.phone[2] === '9')
        onChange(arrayOut)
        setButTop(false);
        setButAll(false);
        setButPasta(false);
        setButOut(true);
        setButPizza(false);
        setButBurger(false);
    }
    const filterPasta = () => {
        const arrayPasta = copyArray.filter((el:any) => el.cuisine === 'pasta')
        onChange(arrayPasta)
        setButTop(false);
        setButAll(false);
        setButPasta(true);
        setButOut(false);
        setButPizza(false);
        setButBurger(false);
    }
    const filterBurger = () => {
        const arrayBurger = copyArray.filter((el:any) => el.cuisine === 'burger')
        onChange(arrayBurger)
        setButTop(false);
        setButAll(false);
        setButPasta(false);
        setButOut(false);
        setButPizza(false);
        setButBurger(true);
    }
    const filterPizza = () => {
        const arrayPizza = copyArray.filter((el : any) => el.cuisine === 'pizza')
        onChange(arrayPizza)
        setButTop(false);
        setButAll(false);
        setButPasta(false);
        setButOut(false);
        setButPizza(true);
        setButBurger(false);
    }
    const filterAll = () => {
        onChange(copyArray)
        setButTop(false);
        setButAll(true);
        setButPasta(false);
        setButOut(false);
        setButPizza(false);
        setButBurger(false);
    }
     return(
        <>
         <div className='p-4 pt-6 text-4xl font-bold text-gray-800 mt-4'>Рестораны</div>
         
        <div className="px-3 py-3 rounded-3xl bg-slate-100 m-4 flex flex-row gap-3">
            <div className={butAll === false ? "filter hover:bg-slate-200" : "bg-slate-700 text-slate-200 hover:text-black filter hover:bg-slate-200"} onClick={() => filterAll()}>Все</div>
            <div className={butOut === false ? "filter hover:bg-slate-200" : "bg-slate-700 text-slate-200 filter hover:text-black hover:bg-slate-200"} onClick={() => filterOut()}>Навынос</div>
            <div className={butTop === false ? "filter hover:bg-slate-200" : "bg-slate-700 text-slate-200 filter hover:text-black hover:bg-slate-200"} onClick={() => filterTop()}>Топ</div>
            <div className={butPasta === false ? "filter hover:bg-slate-200" : "bg-slate-700 text-slate-200 filter hover:text-black hover:bg-slate-200"} onClick={() => filterPasta()}>Паста</div>
            <div className={butBurger === false ? "filter hover:bg-slate-200" : "bg-slate-700 text-slate-200 filter hover:text-black hover:bg-slate-200"} onClick={() => filterBurger()}>Бургер</div> 
            <div className={butPizza === false ? "filter hover:bg-slate-200" : "bg-slate-700 text-slate-200 filter hover:text-black hover:bg-slate-200"} onClick={() => filterPizza()}>Пицца</div>
        </div>

        {load ? <div className="flex justify-center">
            <ImageGrid/>
            </div> 
            : <div className="flex flex-row flex-wrap gap-5 p-4 justify-center w-full mb-20">
                {restaurants.map((item:any) => (

                    <div key={uuidv4()} className="flex flex-col rounded-xl w-1/6 hover:scale-95 transition hover:duration-700">
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
                            <p className="text-slate-700 bg-slate-100 rounded-xl p-1 pl-2 font-semibold w-fit text-xs">✉️  {item.email}</p>
                            <p className="text-sm font-semibold pr-4 text-slate-700">  {item.address}</p>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        }
        <ScrollButton />
        </>
         )
}

export default Render;
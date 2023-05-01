// import "./styles.css"
// import {useEffect, useState} from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// const Filters = () =>{

//     const [restaurants, setRestaurants] = useState([
//         {
//             id: 1,
//             name: 'example',
//             slug: 'url-example',
//             phone: 'tel-example',
//             email : 'mailexample-example',
//             cuisine : 'type k-example',
//             address : 'address-example',
//             image : 'img-example',
//             openAt :'timeopen-example',
//             closeAt : 'timeclose-example',
//             description :'descr-example',
//         }
//     ]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(
//                 'https://www.bit-by-bit.ru/api/student-projects/restaurants',
//             );
//             setRestaurants(result.data);           
//         };
//         fetchData();
//     }, []);

//     const filterAll = () => {

//     }

//     return (
//     <div className="px-3 py-3 rounded-3xl bg-slate-100 m-4 flex flex-row gap-3">
//         <button className="bg-slate-700 text-slate-200 filter hover:bg-slate-600">Все</button>
//         <button className="filter hover:bg-slate-200">Навынос</button>
//         <button className="filter hover:bg-slate-200" >Топ</button>
//         <button className="filter hover:bg-slate-200" >Паста</button>
//         <button className="filter hover:bg-slate-200">Бургер</button>
//         <button className="filter hover:bg-slate-200" >Пицца</button>
//     </div>
//     )
// };
// export default Filters;
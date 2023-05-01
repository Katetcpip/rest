// import { observable, action } from 'mobx';
// import {useEffect, useState} from 'react';

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

// useEffect(() => {
//     const fetchData = async () => {
//         const result = await axios(
//             'https://www.bit-by-bit.ru/api/student-projects/restaurants',
//         );
//         setRestaurants(result.data);
//         setLoad(false)
//     };
//     fetchData();
// }, []);

// class Store {
//     @observable likesCount = 12

//     @action filterTop(){
//         const 
//     }

  
// }

// const storeInstance = new Store()
// export default storeInstance;
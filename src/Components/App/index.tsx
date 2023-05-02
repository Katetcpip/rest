import './App.css';
import Render from 'Components/Render';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RestPage from 'Components/RestPage';
import StartPage from 'Components/StartPage';

function App() {

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

    const [copyArray, setcopyArray] = useState([
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

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.bit-by-bit.ru/api/student-projects/restaurants',
            );
            setRestaurants(result.data);
            setcopyArray(result.data);
            setLoad(false)
        };
        fetchData();
    }, []);

    const onChange = (whatToSet : any) => {
        setRestaurants(whatToSet)
    }

    return ( 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<StartPage/>}></Route>
            <Route path='/rest' element={<Render restaurants={restaurants} copyArray={copyArray} load={load} onChange={onChange}/>}></Route>
            <Route path='/rest/:slug' element={<RestPage restaurants={restaurants} copyArray={copyArray} onChange={onChange}/>}></Route>
        </Routes>
        </BrowserRouter> 
    );
}
export default App;
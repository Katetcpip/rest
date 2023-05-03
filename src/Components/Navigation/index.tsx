import { Rest } from "Components/RestPage";
import "./styles.css"
import {Link} from 'react-router-dom'

type Props = {
    copyArray : Array<Rest>,
    onChange : (a : Array<Rest>) => void
}

const Nav = ({ copyArray, onChange }: Props) : JSX.Element => {

    const restSearch = (rest : string) => {
        const restToFind : Array<Rest> = copyArray.filter((el : Rest) => el.name.toLowerCase().includes(rest.toLowerCase()))
        onChange(restToFind)
    }

    return (
        <nav className='nav sticky top-0 bg-white z-50'>
            <div className='inner-nav md:flex-row flex-wrap justify-center'>
                <Link to='/' className='flex md:w-fit w-full justify-center md:pb-0 pb-4'>
                    <img alt='' src={require('./logo.png')} className='lg:w-12 lg:h-11 h-8 w-10 mr-4 cursor-pointer flex items-center h-full'></img>
                    <p className='flex items-center lg:mr-20 mr-4 lg:text-3xl sm:text-xl text-xl text-gray-800'>Купи.Еда</p>
                </Link>

                <div className='search-border hover:duration-700 hover:border-yellow-400 md:mb-0 mb-4'>
                    <div className='rounded-l-lg mr-2 flex items-center pl-2'>
                        <img alt='' className='w-5 h-5' src={require('./lupa.png')}></img>
                    </div>
                    <input 
                        className='p-1 text-base border-none focus-none font-thin outline-none'
                        placeholder='Найти ресторан'
                        onChange={(event) => restSearch(event.target.value)}
                    >
                    </input>
                    <Link to='/rest' className='text-gray-600 text-lg rounded-r-lg bg-yellow-300 hover:bg-yellow-400 flex items-center px-4 py-1 transition duration-0 hover:duration-700 cursor-pointer'>
                        <p className="lg:text-xl sm:text-md text-sm">Найти</p>
                    </Link>
                </div>  

                <div className='flex flex-row items-center bg-gray-700 rounded-xl pr-4 ml-4 p-1'>
                    <img alt='' className='w-8 h-8 md:ml-4 ml-2 mr-2' src={require('./map.png')}></img>
                    <p className='p-1 lg:text-xl sm:text-md text-sm text-gray-400 font-semibold md:pr-4 pr-2 cursor-pointer hover:text-gray-300 transition duration-0 hover:duration-700'>г. Москва</p>
                </div>

                <Link to='/cart' className='gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div className='flex flex-row items-center bg-white p-0.5 rounded-full'>
                        <img alt='' className="lg:w-11 lg:h-11 w-8 h-8 cursor-pointer p-2" src='https://cdn-icons-png.flaticon.com/512/6644/6644893.png'></img>
                    </div>
                </Link>

                <div className='rounded-full p-0.5 ml-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div className='flex flex-row items-center bg-white p-0.5 rounded-full'>
                        <img alt='' src={require('./lk.png')} className='lg:w-11 lg:h-11 w-8 h-8 cursor-pointer'></img>
                    </div>
                </div>
                
            </div>
        </nav>
    )
};
export default Nav;
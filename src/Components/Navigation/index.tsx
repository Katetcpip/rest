import "./styles.css"

const Nav = () =>{
    return (
    <nav className='nav sticky top-0 bg-white'>
    <div className='inner-nav'>
        <img alt='' src='./logo.png' className='w-12 h-11 mr-4 cursor-pointer flex items-center h-full'></img>

        <p className='flex items-center mr-20 text-3xl text-gray-800'>Купи.Еда</p>

        <div className='search-border hover:duration-700 hover:border-yellow-400'>
            <div className='rounded-l-lg mr-2 flex items-center pl-2'><img alt='' className='w-5 h-5' src='./lupa.png'></img></div>
                <input 
                className='p-1 text-base border-none focus-none font-thin outline-none'
                placeholder='Найти ресторан'>
                </input>
            <div className='text-gray-600 text-lg rounded-r-lg bg-yellow-300 hover:bg-yellow-400 flex items-center px-4 py-1 transition duration-0 hover:duration-700 cursor-pointer'>Найти</div>
        </div>  

        <div className='flex flex-row items-center bg-gray-700 rounded-xl pr-4 ml-4 p-1'>
            <img alt='' className='w-8 h-8 ml-4 mr-2' src='./map.png'></img>
            <p className='p-1 text-xl text-gray-400 font-semibold pr-4 cursor-pointer hover:text-gray-300 transition duration-0 hover:duration-700'>г. Москва</p>
        </div>

        <div className='gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex flex-row items-center bg-white p-0.5 rounded-full'>
                <img alt='' src='./lk.png' className='w-11 h-11 cursor-pointer'></img>
            </div>
        </div>
        
    </div>
    </nav>
    )
};
export default Nav;
import './App.css';
import Nav from "Components/Navigation"
import Filters from "Components/Filters"
import Render from 'Components/Render';
import Footer from 'Components/Footer';

function App() {
    return ( 
    <>
        <Nav />
        <div className='p-4 pt-6 text-4xl font-bold text-gray-800 mt-4'>Рестораны</div>
        <Filters />
        <Render/> 
        <Footer/>
    </>
    );
}
export default App;
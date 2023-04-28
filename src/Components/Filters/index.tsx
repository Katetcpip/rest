import "./styles.css"
const Filters = () =>{
    return (
    <div className="px-3 py-3 rounded-3xl bg-slate-100 m-4 flex flex-row gap-3">
        <div className="bg-slate-700 text-slate-200 filter hover:bg-slate-600">Все</div>
        <div className="filter hover:bg-slate-200">Навынос</div>
        <div className="filter hover:bg-slate-200">Топ</div>
        <div className="filter hover:bg-slate-200">Бургеры</div>
        <div className="filter hover:bg-slate-200">Суши</div>
        <div className="filter hover:bg-slate-200">Пицца</div>
    </div>
    )
};
export default Filters;
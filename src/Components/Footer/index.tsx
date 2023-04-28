const Footer = () =>{
    return (
    <div className='flex flex-col pt-24 bg-slate-200 p-20 pb-4'>
      <p className="text-slate-700 text-xl font-semibold pb-4">В приложении еще удобнее</p>  
      <div className="flex flex-row gap-5 flex-wrap pt-4">

        <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
            <img alt="" src="./appStore.png" className="w-8 h-8"></img>
            <p>App Store</p>
        </div>

        <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
        <img alt="" src="./huawei.png" className="w-8 h-8"></img>
            <p>AppGallery</p>
        </div>

        <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
            <img alt="" src="./googlePlay.png" className="w-8 h-8"></img>
            <p>Play Store</p>
        </div>

      </div>     

      <p className="pt-10 text-center w-full">© 2018–2023 ООО «Купи.Еда»</p>
    </div>
    )
};
export default Footer;
import Code from "Components/QR";

const Footer = () =>{
    return (
      <div className="mt-auto">
        <div className="w-full bg-slate-200 flex flex-row items-center justify-center">
            <div className='flex flex-col pt-24 p-20 pt-10 pb-4 w-1/2'>
              <p className="text-slate-700 text-xl font-semibold pb-4">В приложении еще удобнее</p>  
              <div className="flex flex-row gap-5 flex-wrap pt-4">

                <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
                    <img alt="" src={require('./appStore.png')} className="w-8 h-8"></img>
                    <p>App Store</p>
                </div>

                <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
                    <img alt="" src={require('./huawei.png')} className="w-8 h-8"></img>
                    <p>AppGallery</p>
                </div>

                <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
                    <img alt="" src={require('./googlePlay.png')} className="w-8 h-8"></img>
                    <p>Play Store</p>
                </div>

              </div>     
            </div>

            <div className="flex w-1/2 justify-end pr-16 pt-10 h-full">
                <Code/>
            </div>
        </div>
        <p className="pt-10 text-center w-full bg-slate-200 pb-8">© 2018–2023 ООО «Купи.Еда»</p>
      </div>
    )
};

export default Footer;
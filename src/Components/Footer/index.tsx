import Code from 'Components/QR'

const Footer = () => {
    return (
        <div className="mt-auto">
            <div className="w-full bg-slate-200 flex md:flex-row flex-col items-center justify-center">
                <div className="flex flex-col md:pt-24 md:p-20 p-4 pt-10 pb-4 w-1/2 md:w-fit w-full">
                    <p className="text-slate-700 md:text-xl text-md font-semibold pb-4">
                        В приложении еще удобнее
                    </p>
                    <div className="flex flex-row md:gap-5 gap-3 flex-wrap pt-4">
                        <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer w-fit">
                            <img
                                alt=""
                                src={require('./appStore.png')}
                                className="md:w-8 md:h-8 w-4 h-4"
                            ></img>
                            <p className="md:text-base text-sm">App Store</p>
                        </div>

                        <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
                            <img
                                alt=""
                                src={require('./huawei.png')}
                                className="md:w-8 md:h-8 w-4 h-4"
                            ></img>
                            <p className="md:text-base text-sm">AppGallery</p>
                        </div>

                        <div className="flex flex-row gap-3 border border-gray-500 p-1 px-3 items-center rounded-xl cursor-pointer">
                            <img
                                alt=""
                                src={require('./googlePlay.png')}
                                className="md:w-8 md:h-8 w-4 h-4"
                            ></img>
                            <p className="md:text-base text-sm">Play Store</p>
                        </div>
                    </div>
                </div>

                <div className="flex w-1/2 lg:justify-end justify-center md:pr-16 pr-0 pt-10 h-full">
                    <Code />
                </div>
            </div>
            <p className="pt-10 text-center w-full bg-slate-200 pb-8">
                © 2018–2023 ООО «Купи.Еда»
            </p>
        </div>
    )
}

export default Footer

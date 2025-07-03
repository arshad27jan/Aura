import CustomButton from "../common/CustomButton";

export default function Landing() {
    return (
        <div>
            {/* navbar */}
            <div className="absolute bg-aura-secondary w-full shadow-2xl lg:h-30 z-1">
                <div className="flex justify-between items-center p-2">
                    <img src="/assets/aura.png" className="p-2 w-50 flex justify-center" />
                    <CustomButton classes="w-20">Login</CustomButton>
                </div>
            </div>

            <div className="absolute flex flex-col gap-5 justify-center bg-aura-secondary/70 items-center  flex min-w-full min-h-screen ">
                <span className="text-center text-white font-main font-bold sm:text-4xl lg:text-7xl">Unlimited movies,<br/> TV shows and more</span>
                <div>
                    <input type="text" className="text-white font-main border-white round-xl outline-2 p-4" placeholder="Please enter you email"/>
                </div>
            </div>

            <img src="/assets/landingbg.png" className="w-screen h-screen" />
        </div>
    )
}
"use client"
import Image, { StaticImageData } from "next/image"
import { use, useState } from "react"
const YemanCrisisBannerSection = () => {
    const [docs, setDocs] = useState(0)
    const oneOffBtnList = [{ title: "25", doc: "Could provide warm meals to those affected." },
    { title: "50", doc: "Could provide enough food to feed a family for an entire month or help towards building a home." },
    { title: "75", doc: "Could provide emergency essentials for communities affected or help towards building a home." },
    { title: "300", doc: "Could provide emergency shelter for communities affected or help towards building a home." },
    { title: "1000", doc: "Could provide food for an entire village or help towards building a home." },
    { title: "2000", doc: "Could provide food, water and medical aid for an entire village or help towards building a home." },
    ]
    const monthBtnList = [{ title: "25", doc: "Donate £25 a month to help save countless lives" },
    ]

    const [packeges, setPackeges] = useState(oneOffBtnList)
    const [bgColor, setBgColor] = useState(true)
    const [bgBtn, setbgBtn] = useState(0);

    return (<div className="mt-20 lg:mt-40">
        <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-8 md:grid-cols-3 px-5 md:px-10">
            <div className="flex flex-col gap-2">
                <h3 className=" text-2xl md:text-3xl text-gray-800">Yemen Crisis</h3>
                <span className="w-full h-[2px] bg-teal-500"></span>
                <div className="grid grid-cols-2">
                    <button className={bgColor ? `p-2 lg:p-3 bg-teal-500 text-white text-lg` : `bg-gray-100`} onClick={() => { setPackeges(oneOffBtnList); setDocs(0); setbgBtn(0); setBgColor(true) }}>One Off</button>
                    <button className={!bgColor ? `p-2 lg:p-3 bg-teal-500 text-white text-lg` : `bg-gray-100`} onClick={() => { setPackeges(monthBtnList); setDocs(0); setbgBtn(0); setBgColor(false) }}>Monthly</button>
                </div>
                <div className="flex flex-col shadow-2xl py-4 px-3 lg:px-5">

                    <select className="focus:outline-none border-2 border-gray-400 rounded-xl px-2 py-2">Yemen
                        <option className="text-md" value={"Palestine"}>Yemen</option>
                    </select>
                    <p className="text-base lg:text-lg py-4">{packeges[docs].doc}</p>
                    <div className="grid grid-cols-3 gap-5 md:gap-1 lg:gap-5 pr-5 md:pr-0 lg:pr-8 pb-5">
                        {packeges.map((btn, index) => <button key={index} className={index === bgBtn ? `border-2 border-gray-300  text-white bg-teal-500 p-2 rounded-xl` : `border-2 border-gray-300 hover:bg-gray-300 p-2 rounded-xl`} onClick={() => { setDocs(index); setbgBtn(index) }}>£{btn.title}</button>)}
                    </div>
                    <input type="number" placeholder="Other Amount" className="focus:outline-none border-2 border-gray-400 rounded-xl p-4 py-2 " />
                    <p className="text-base">Your donations will go to this appeals general fund, so your generosity can help where its needed most!</p>
                    <button className="bg-teal-500 hover:opacity-90 text-white font-medium p-3 rounded-lg mt-4 mb-2">Add to Basket</button>
                </div>
            </div>

            <div className="md:col-span-2">
                <Image src={"/donation/yemanCrisis/yemanbanner.jpg"} alt="" width={700} height={700} className="lg:h-[560px] w-full" />
            </div>
        </div>
    </div>)
}
export default YemanCrisisBannerSection
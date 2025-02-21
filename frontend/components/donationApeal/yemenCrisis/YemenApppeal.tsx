import Image from "next/image"
import Link from "next/link"

const YemenAppeal = () => {
    return (<div className="py-10 md:py-16 px-5 md:px-10 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl lg:text-4xl text-center">Yemen Appeal</h2>
            <p className="text-base text-center pt-8 py-3">Donate to help Yemen: we need urgent support from everyone reading this, right now.</p>
            <p className="text-base text-center py-3">Since 2014, Yemen has been in the middle of the worlds worst humanitarian crisis, battling a crippling civil war, famine and disease outbreaks. Millions of people are starving, and there is virtually no healthcare system.</p>
            <p className="text-base text-center py-3">According to some reports, Yemen only has 10 health workers per 10,000 people and nearly a quarter of districts throughout the country have no doctors.</p>
            <p className="text-base text-center py-3">The UN warns that the coronavirus pandemic could delete Yemen from maps all over the world. Due to the pandemic, the UK government has cut relief funding for Yemen by 60%. Without these funds, Yemeni lives will be lost. We cannot let that happen</p>
            <p className="text-base text-center py-3">Penny Appeal are on the ground in Yemen, delivering food, water and hygiene kits to crisis-affected areas and IDP camps, as well as PPE and Covid-19 Testing kits to hospitals.</p>
            <div className="flex justify-center items-center py-8">
                <Link href={"/"} className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg">DONATE NOW</Link>
            </div>
        </div>
        {/* Donate to Save Live in Yemen */}
        <div className="pt-8 md:pt-16 max-w-5xl mx-auto">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl lg:text-4xl text-center pb-6">Donate to Save Live in Yemen</h2>
            <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/EK8MjR8u_7w" title="Yemen Emergency - Donate Now!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>

        {/* Yemen: The Crisis Explained */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 place-items-start md:place-items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-teal-500 font-bold text-xl md:text-3xl pb-2 md:pb-4">Yemen: The Crisis Explained</h2>
                <p className="text-base py-3">80% of the Yemeni population are in urgent need of humanitarian aid.</p>
                <p className="text-base py-3">With the Yemen conflict well into its sixth year with no end in sight, the Yemeni people have been struggling to survive a terrible famine, armed conflict and outbreaks of disease like cholera for years, and now the coronavirus pandemic could decimate an already weakened population.</p>
                <p className="text-base py-3">An estimated 85,000 children under the age of 5 have died from hunger and disease in Yemen, and sadly this could have been entirely preventable. This was before the added misery of Covid-19; how many more malnourished children will lose their lives to the deadly combination of starvation, thirst and coronavirus now?</p>
                <p className="text-base py-3">Officially, Yemen has experienced over 2,000 cases of coronavirus, with hundreds of deaths, but with limited testing and a healthcare system where over 50% of hospitals are closed, the real figure is likely to be much higher. With Yemens devastated healthcare system, the ongoing famine and a lack of humanitarian support, the coronavirus pandemic is likely to push millions of Yemeni people to their breaking point.</p>
                <p className="text-base py-3">The best way to help Yemen right now is to be there for people in need by making a life-saving donation today.</p>
                <div className="flex justify-center items-center md:justify-start py-8">
                    <Link href={"/"} className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg">DONATE NOW</Link>
                </div>
            </div>
            <div className="lg:p-10 order-1 md:order-2">
                <Image src={"/donation/yemanCrisis/starving-child.jpg"} alt="" width={700} height={700} className="h-2/4 w-full" />
            </div>
        </div>

        {/* The Best Way to Help Yemen: Our Emergency Response */}
        <div className="pt-8 md:pt-16">
            <div className="order-2 md:order-1">
                <h2 className="text-teal-500 font-bold text-xl md:text-3xl pb-2 md:pb-4">The Best Way to Help Yemen: Our Emergency Response</h2>
                <p className="text-base py-2">Penny Appeal are working with our partners on the ground to reach vulnerable Yemenis with life-saving food, water, shelter and hygiene essentials and to strengthen healthcare systems by providing PPE and Testing Kits to hospitals.</p>
                <p className="text-base py-2">Currently, our work is focused in the Amran and Al-Hudaydah Governorates, where millions of internally displaced Yemeni people are struggling to survive, having fled from conflict in other parts of the country.</p>
                <p className="text-base pt-2 underline">Food and Water</p>
                <p className="text-base py-2">Recently, we have reached over 4,400 Yemeni people with Food Packs containing essentials such as rice, lentils, sugar and wheat. We have also provided 13 communities in with 3,000 litre water tanks that will be filled three times a week, providing clean water to over 13,000 people.</p>
                <p className="text-base py-2">We will now be distributing cash support vouchers to impoverished families so that they can get what they need support their own nutrition!</p>
                <p className="text-base py-2">With your support, we are also working to build a Therapeutic Feeding Centre for children with severe malnutrition. This centre will help treat children suffering from malnutrition, providing counselling, emergency food packs and meals, vaccinations and other essentials treatments.</p>
                <p className="text-base pt-2  underline">Shelter</p>
                <p className="text-base py-2">We are providing shelter for internally displaced people living in transitional refugee camps, and maintain 100 bathrooms throughout the camps.</p>
                <p className="text-base pt-2 underline">Hygiene Kits</p>
                <p className="text-base py-2">We are providing Hygiene Kits to displaced families, including soap, towels, detergent and antiseptic soap.</p>
                <p className="text-base pt-2 underline">PPE and Hospital Equipment</p>
                <p className="text-base py-2">We are distributing PPE and Coronavirus Testing Kits to multiple health facilities and Emergency Operation Centres in Yemen, to help protect lives and prevent the spread of the deadly coronavirus.</p>
                <p className="text-base py-2">With your support, we have helped over 100,000 people in Yemen over the last six years. However, in a country where 24 million people needed humanitarian aid even before the coronavirus pandemic hit, we urgently need your help to reach more extremely vulnerable Yemeni people.</p>
                <p className="text-base py-3">Donate to help Yemen today, and you could save a life.</p>

                <div className="flex justify-center items-center md:justify-start py-8">
                    <Link href={"/"} className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg">DONATE NOW</Link>
                </div>
            </div>
        </div>

        {/* One Image Child with Water */}
        <div className="lg:py-10  max-w-4xl mx-auto">
            <Image src={"/donation/yemanCrisis/yemenWater.jpg"} alt="" width={800} height={800} className="h-3/4 w-full" />
        </div>

        {/* Your Donations in Action | Shain's Story */}
        <div className="pt-14 md:pt-16 ">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl pb-2 md:pb-4">Your Donations in Action | Shains Story</h2>
            <p className="text-base py-3">Shain Mohammed is only 6-years-old, but he is now the man of his house. Shain was a new-born when the conflict first began in Yemen, so a life of hardship is unfortunately all this little boy has ever known.</p>
            <div className="flex md:justify-center">
                <Image src={"/donation/yemanCrisis/goodsToChild.png"} alt="" width={700} height={700} className="md:h-2/4 md:w-2/4" />
            </div>
            <p className="text-base py-3">We met with Shain and his mother at one of our food pack and hygiene kit distributions, where they received a food pack that would keep their family fed for an entire month and a hygiene kit filled with antibacterial liquid disinfectant, soap and hand gel to help protect them against Covid-19.</p>
            <p className="text-base py-3">Shains mother shared the story of her familys suffering, saying, My husband died during an attack two years ago in Hudeyda. When the war started, Shain was a little baby. Now he is the man of the house. When my husband died, we came here with my relatives. We try to survive with the aid you deliver. In the meantime, I was cleaning the houses and gathering some money. However now, I have no chance to do anything because of coronavirus.</p>
            <p className="text-base py-3">Shains family and others just like them make up the 3.6 million displaced Yemeni people who are fleeing from war, struggling to survive under harsh conditions daily. These displaced families, the victims of war, now find themselves in a near impossible sitution with the the threat of the coronavirus now impacting their lives.</p>
            <p className="text-base py-3">Prices of cleaning and hygiene materials have nearly doubled, Shains mother shared, How can we afford this? We were earning some money by cleaning houses to provide daily food to our home, now we cannot find anywhere to work. How can we buy cleaning materials when we cannot buy food?</p>
            <p className="text-base py-3">The UN estimates that 130 children under the age of 5 die every day from hunger and disease in Yemen and the situation is becoming more dire every day, due to Covid-19.</p>
            <p className="text-base py-3">Help us save lives by supporting children like Shain and their families to become healthy and happy.</p>
        </div>
    </div>)
}
export default YemenAppeal
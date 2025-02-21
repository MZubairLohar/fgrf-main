import Image from "next/image"
import Link from "next/link"

const FidyaDocSection = () => {
    return (<div className="py-10 md:py-16 px-5 md:px-10 max-w-2xl mx-auto">
        <div>
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center">Pay your Fidya or Kaffarah</h2>
            <p className="text-base text-center pt-8 py-3">If you miss a fast due ill health or pregnancy, which cannot be made up afterwards for legitimate reasons, you will need to pay Fidya.  If fasts are broken without allowable reasons, and the compensatory two months of fasting is not possible, then you are obliged to pay Kaffarah for breaking fast. </p>
            <p className="text-base text-center py-3">Your Fidya and Kaffarah will go directly to those who need it most.</p>
            <p className="text-base text-center py-3">Pay your Fidya or Kaffarah with Penny Appeal to feed the hungry.</p>
        </div>

        {/* What is Fidya? */}
        <div className="pt-5 md:pt-10">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center">What is Fidya?</h2>
            <p className="text-base text-center pt-5 md:pt-8 py-3">Fidya is an obligatory donation that must be made when a fast is missed through necessity, such as being ill or pregnant, and it cannot be made up after.</p>
            <p className="text-base text-center pt-8 py-3">Your Fidya donation must provide one impoverished person with two meals, for each fast that you have missed.</p>
            <p className="text-base text-center pt-8 py-3">It costs £2 per meal, so for a single missed fast the amount payable is £4.</p>
        </div>
        <div className="flex justify-center items-center py-8">
            <Link href={"/"} className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg uppercase">pay your fidya</Link>
        </div>

        {/* What is Kaffarah? */}
        <div className="pt-5 md:pt-10">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center">What is Kaffarah?</h2>
            <p className="text-base text-center pt-5 md:pt-8 py-3">Kaffarah is a payment that needs to be made when a person deliberately breaks their fast without a valid reason, and the person cannot fast at a later time for 60 continuous days. </p>
            <p className="text-base text-center pt-8 py-3">The requirement for Kaffarah is to provide one person with two meals a day, for two months. It costs £2 per meal, so the total due is £240.</p>
            <p className="text-base text-center pt-8 py-3">If you have broken your fast without good reason, please make your Kaffarah payment today to provide those in need with nutritious food to eat.</p>
        </div>
        <div className="flex justify-center items-center py-8">
            <Link href={"/"} className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg uppercase">pay your kaffarah</Link>
        </div>

        {/* Where will my Fidya and Kaffarah go? */}
        <div className="pt-10 md:pt-16">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center">Where will my Fidya and Kaffarah go?</h2>
            <p className="text-base text-center pt-5 md:pt-8 py-3">Your Fidya and Kaffarah will go directly to those who need it most, through our Feed Our World appeal. We feed the poor in 47 countries around the world. The people in these countries are victims through no fault of their own, either of war, drought, famine, displacement, natural disasters or poverty.</p>
            <p className="text-base text-center py-3">Just £1 of your Fidya or Kaffarah can provide a nutritious meal to someone who would otherwise go without.</p>
        </div>

        {/* Changing Lives */}
        <div className="pt-5 md:pt-10">
            <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center">Changing Lives</h2>
            <p className="text-base text-center pt-5 md:pt-8 py-3">Penny Appeal delivers life-saving aid to those in desperate need throughout Asia, Africa, the Middle East and right here at home in the UK. By working with experienced delivery partners and major UK Muslim charities, we deliver nutritious, life-saving meals and food packs to some of the worlds poorest and most needy people.</p>
            <p className="text-base text-center py-3">We also combat poverty in many other ways, such as by caring for orphans, building wells, helping orphans become Haﬁz of the Holy Quran, looking after the elderly and delivering emergency aid.</p>
        </div>



    </div>)
}
export default FidyaDocSection
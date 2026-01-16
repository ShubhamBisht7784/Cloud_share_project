import HeroSection from "../components/Landing/HeroSection"
import FeautresSection from "../components/Landing/FeaturesSection"
import PricingSection from "../components/Landing/PricingSection"
import TestimonialsSection from "../components/Landing/TestimonialsSection"
import CTASection from "../components/Landing/CTASection"
import Footer from "../components/Landing/Footer"
import {features, testimonials} from "../assets/data.js"
import {pricingPlans} from "../assets/data.js"
import { useClerk, useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"
import { use } from "react"
import { useEffect } from "react"


const Landing = ()=>{

    const {openSignIn , openSignUp} = useClerk();
    const {isSignedIn} = useUser()
    const navigate = useNavigate();

    useEffect(()=>{
        if(isSignedIn){
            navigate("/dashboard");
        }
    },[isSignedIn,navigate])

   
    return  <>
        <div className ="landing-page bg-linear-to-b from-gray-50 to-gray-100">
            {/*Hero Section */}
            <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>

            {/*Features Section */}

            <FeautresSection features={features}/>

            {/* Pricing Section*/}
            <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp}/>

            {/* Testimonials section*/}
            <TestimonialsSection testimonials={testimonials}/>

            {/* CTA section */}
            <CTASection openSignUp = {openSignUp}/>
            {/* Footer Section */}
            <Footer/>
        </div>
    </>
}

export default Landing
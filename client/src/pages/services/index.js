import React from 'react';
import Nav from '../Navs';
import Carousel from '../carousel';
import ServiceCard from './service-cards'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/home-kitchen.jpg)"
}
class services extends React.Component {
    state = {}

    render() {
        return (
            <main className="cont">
                <Nav />
                <Carousel />
                <section className="container ">
                    <h2 className="display-3 text-center my-4">Our Services</h2>
                    <hr />
                    <div id="services" className=" py-4">
                        <ServiceCard title="Roofing" imageName="roof-hero.jpg"
                            paragraph="The siding on your home is the first thing people look at ,it's a personal preference what skin you want to give it whether it's vinyl or steel drawing on years of experience our crew are here to help and provide you with excellent service .
                            Replacing a couple of pieces due to wear and tear or fully restoring your siding we are available all year round as long as it's not snowing we are working!" id="roofing"
                            />
                        <ServiceCard title="siding" imageName="siding-house.jpg" id="siding"
                            paragraph="The siding on your home is the first thing people look at ,it's a personal preference what skin you want to give it whether it's vinyl or steel drawing on years of experience our crew are here to help and provide you with excellent service .
                            Replacing a couple of pieces due to wear and tear or fully restoring your siding we are available all year round as long as it's not snowing we are working!
                            
                            At Chuck we have pride to say we provide great workmanship and communication with our customers keeping them up to date in every single aspect, as Our high end contractors walk you through the process of replacing your siding ensuring every home with durable and high end products."
                            />
                        <ServiceCard title="gutters" imageName="gutters-2.jpg" id="gutters"
                            paragraph="Are gutters necessary you may ask? 
                            Gutters are a vital factor in your home, a professionally installed gutter system is not only a decorative element on your home it also serves a greater purpose. All homes should have a complete gutter system installed!!
                            The purpose of the gutter is to clear any rain water out off your home's roof and away from the foundation of the structure, A home without gutters over time creates severe problems no matter how gently the rain falls onto your roof ,the water builds up and runs off and creates a powerful surge that, if not diverted, can hammer the ground next to your foundation. Powdering water along the foundation lines erodes the soil and can seep under the foundation increasing the risk of basement leaks and structure instability."
                            />
                    </div>
                </section>
                <section className="container">
                    <h2 className="display-4 text-center my-4">Roofing Services</h2>
                    <hr />
                    <div className="">
                        <p className="h4 font-weight-normal">We take our building process seriously and 
                        beilive in full transparency when it comes to the work we 
                        do for you. so we felt it imporant to list out the steps we 
                        take to ensure a high quality project</p>
                        <ol className="py-4">
                            <li className="display-5">
                                <p className="display-5">Decking</p>
                                <p className="h4 font-weight-normal">Here at Chucks Construction, we prioritize that the foundation of your roof is secure! Whether its plywood or space boards, if any repairs are needed or codes need to be brought up to date our crews will gladly take care of you.</p>
                            </li>
                            <li className="display-5">
                                <p className="display-5">drip edge installment is required by code in most cities!!</p>
                                <p className="h4 font-weight-normal">A drip edge is very useful; its purpose is to prevent any water from seeping under the edge of the roof deck. Without drip edge the edges will rot all the way into the frame studs and sheathing. Over time this will prevent many repairs, to avoid any issues it's recommended to install it beforehand.</p>
                            </li>
                            <li className="display-5">
                                <p className="display-5">starter</p>
                                <p className="h4 font-weight-normal">A starter strip is a very important factor on your roof, the purpose of it is to prevent any water to seep underneath the shingles, they also greatly improve the roof's wind resistance by sealing the finished shingles to the roof at eaves and rakes therefore its prompt to make sure your local contractor installs them along all the roof edges.</p>
                            </li>
                            <li className="display-5">
                                <p className="display-5">Ice and water shield / ice dam protection </p>
                                <p className="h4 font-weight-normal">Ice and water shield is a self-adhering waterproofing underlayment used in roofing to prevent damage caused by ice dams and wind driven rain. Every Minnesota home should acquire this in every roof eaves and rakes, valleys and all flashings and chimneys.</p>
                            </li>
                            <li className="display-5">
                                <p className="display-5">Underlayment / felt paper </p>
                                <p className="h4 font-weight-normal">The felt paper helps keep water away from the wood so it doesn't leak into your attic. Professional roofers know that by adding a layer of felt paper it does not only serve aesthetic purposes but extends the life of your roof.</p>
                            </li>
                            <li className="display-5">
                                <p className="display-5">Joints and valleys </p>
                                <p className="h4 font-weight-normal">The joints running throughout the roof are exposed to any wind driven rain as are your valleys. The roof flashing secures all the exposed areas on your roof.</p>
                                <ol type="a">
                                    <li className="h4 font-weight-normal">Kick out flashing is a flashing working as a diverter in between the wall and the roof this flashing kicks out any rain water out the wall and into your gutter avoiding any damages or leaks on your roof.</li>
                                    <li className="h4 font-weight-normal">Chimney flashing should be installed at the base of your chimney to keep water from infiltrating in between the roof and your chimney.</li>
                                    <li className="h4 font-weight-normal">Pipe jacks/turtle vents / turbines / exhaust</li>
                                </ol>
                            </li>
                            <li className="display-5">Placing shingles on the roof </li>
                            <li className="display-5">hips and ridge cap</li>
                            <li className="display-5">Clean up!</li>
                        </ol>
                    </div>
                    <div className="push"></div>
                </section>
                <footer className="footer"></footer>
            </main>
        )
    }
}
export default services;
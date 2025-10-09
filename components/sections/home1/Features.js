'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one" id="around-the-corner" style={{paddingTop: 0}}>
            <div className="container banner_container_main">
              <div>
                                    <p className="small_heading">
                                        DETAILS
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">WHY INVEST IN DUBAI?</h2>
                                </div>
                <div className="row">

                    <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaDollarSign className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Greater Rental Profits</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Gross rental yields for investors range from 5% to 9%.</a>
</h2>
                            </div>
                        </div>
                    </div>
                  <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Premium Property</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Property rates per sq. ft. remain lower than many cities.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMoneyBill className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Tax-Free Property</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Once you buy a property, you will pay no taxes ever again.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaWalking className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">High Accessibility</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">The city has direct flights from all the major cities in the world.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMap className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Touristic Appeal</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">World-class shopping malls, attractions, hotels and beautiful beaches.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaShieldAlt className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Communal Safety</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Dubai is extremely safe and ideal for families and individuals.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaChartLine className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Trade Hub & Logistics</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Dubai is a major attraction to foreign investors in different sectors.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaIdCard className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">UAE Golden Visa</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">UAE residency: Golden & Green Visas now for property investors.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaLightbulb className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Sustainable Planning</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Dubai invests heavily in tech, green energy, health & education.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaGift className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Emaar U Rewards</a></h2>

<h2 className="investment_text">
  <a href="javascript:void(0);">Invest AED 20M+ for Platinum, AED 10M+ for Gold tier.</a>
</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
       
        </>
    )
}

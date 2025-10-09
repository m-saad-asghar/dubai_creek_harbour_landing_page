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
                                        Development Excellence

                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">WHY EMAAR?</h2>
                                </div>
                                <p className="why_emaar_styling">
                                    Emaar Properties, one of the world's most valuable and admired integrated real estate development companies, is shaping lifestyles of the future. When you buy an Emaar property, you are investing in a name you can trust, as lifestyle you can enjoy, and a community you can thrive in, all within a city where dreams come true.
                                </p>
                <div className="row">

                    <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted" 
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content" style={{color: "#ffffff"}}>
<a href="javascript:void(0);" style={{color: "#ffffff"}}>116,500+</a></h2>

<h2 className="investment_text" style={{color: "#ffffff"}}>
  <a href="javascript:void(0);" style={{color: "#ffffff"}}>Delivered Units July 2024.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted" 
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaBuilding className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content" style={{color: "#ffffff"}}>
<a href="javascript:void(0);" style={{color: "#ffffff"}}>30,000+</a></h2>

<h2 className="investment_text" style={{color: "#ffffff"}}>
  <a href="javascript:void(0);" style={{color: "#ffffff"}}>Residences Under Development UAE.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted" 
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaChartLine className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content" style={{color: "#ffffff"}}>
<a href="javascript:void(0);" style={{color: "#ffffff"}}>56%</a></h2>

<h2 className="investment_text" style={{color: "#ffffff"}}>
  <a href="javascript:void(0);" style={{color: "#ffffff"}}>Increase in property sales in H1 2024.</a>
</h2>
                            </div>
                        </div>
                    </div>

                     <div className="col-xl-3 col-lg-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted" 
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaGlobe className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content" style={{color: "#ffffff"}}>
<a href="javascript:void(0);" style={{color: "#ffffff"}}>12+ Countries</a></h2>

<h2 className="investment_text" style={{color: "#ffffff"}}>
  <a href="javascript:void(0);" style={{color: "#ffffff"}}>Leading Global Market Presence.</a>
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

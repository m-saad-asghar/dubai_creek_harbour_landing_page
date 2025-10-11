"use client";
import Link from "next/link"
import Image from "next/image";
import { FaBuilding, FaCity, FaDollarSign, FaGift, FaHouseUser, FaTree } from "react-icons/fa";
export default function Future() {
    return (
        <>
            <section className="about-one future_styling" id="about-us">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except">
                    <div className="row minus_styling">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">THE FUTURE OF WATERFRONT LIVING</h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_para">
    <span className="about_para_span">Experience the perfect blend of tranquillity, wellness, and sophistication at Dubai Creek Harbour. This vibrant community combines serene waterfront living with lively retail promenades, wellness facilities, and breathtaking views of the marina and Dubai skyline. Enjoy sunrise yoga by the water, alfresco dining, or leisurely walks along the picturesque promenade. Capture stunning creek views or embark on a scenic boat tour to admire Dubai’s iconic landmarks from a new perspective.</span>
</p><br/>

<p className="about_para">
    <span className="about_para_span">Unwind by an infinity pool overlooking the Burj Khalifa, or explore the neighbourhood on a relaxing bike ride. Whether you’re looking for your dream home or a rewarding investment, Dubai Creek Harbour delivers unmatched value. Choose from elegant one- to three-bedroom apartments, spacious family residences, or luxurious penthouses — all designed with contemporary style and exceptional attention to detail.
Discover a new dimension of waterfront living at Dubai Creek Harbour.</span>
</p>
                                </div>

                                <div className="row future_row">
                                
                                                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaBuilding className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">711,399 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_para_span">Serviced Apartments.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaCity className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">7.4 million sqm</span></h3>
                            
                                <p className="investment_text">
    <span className="about_para_span">Residential Space.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                
                                                     <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaTree className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

<h3 className="investment_content">
<span className="investment_content_para">500,000 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_para_span">Parks & Open Spaces.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                
                                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="btn_style">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
</div>
                
            </section>
        </>
    )
}

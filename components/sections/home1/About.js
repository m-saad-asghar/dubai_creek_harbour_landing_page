import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="about-us">
                <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div>
                <div className="container">
                    <div className="row">

                           <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        A Name You Can Trust
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">WELCOME TO EMAAR PROPERTIES, DUBAI</h2>
                                </div>

                                <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div>

                                <div className="text-box">
<p className="about_para">
    With two iconic towers and a stunning lagoon centerpiece, this project blends nature with
modern living, marking the first landmark on Sheikh Mohamed Bin Zayed Road. Featuring
world class amenities and cutting-edge AI integration for an effortless lifestyle.
</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img">
                                <div className="inner">
                                    <Image
  src="/assets/img/about/about_us.jpg"
  alt="About Us"
  width={600} 
  height={350}
  style={{objectFit: "cover"}}
/>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
        </>
    )
}

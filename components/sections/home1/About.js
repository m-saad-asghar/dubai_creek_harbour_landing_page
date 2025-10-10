import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="about-us">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except">
                    <div className="row">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        ELEVATE YOUR LIFESTYLE
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">WELCOME TO DUBAI CREEK HARBOUR</h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_para">
    Dubai Creek Harbour is home to signature landmarks such as the Dubai Creek Marina — a paradise for yachting enthusiasts — and the Ras Al Khor Wildlife Sanctuary, celebrated for its diverse ecosystem and graceful flamingos. Its peaceful lagoons invite you to enjoy scenic nature walks and birdwatching in a truly tranquil setting.
</p><br/>

<p className="about_para">
    Perfectly connected, Dubai Creek Harbour offers effortless access to Downtown Dubai, Dubai International Airport, and the upcoming Dubai Metro expansion. With its scenic promenades, world-class dining, schools, healthcare facilities, and leisure destinations, the community stands as a premier address for both living and investment.
</p><br/>

<p className="about_para">
    Discover an array of residences, from elegant apartments and penthouses to luxury hotels such as Vida Creek Harbour, Address Harbour Point, and Palace Residences — all boasting breathtaking views of the Creek and the Dubai skyline. Residents and visitors alike can indulge in fine dining, relax at rooftop pools, and explore premium retail experiences, all within one remarkable destination.
</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img about_i">
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
                        </div> */}

                    </div>
                </div>
                
            </section>
        </>
    )
}

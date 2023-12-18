import { useEffect } from "react";
import { useLocation } from "react-router-dom"


export const Abault = () => {

    const { pathname } = useLocation;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);


    return (
        <section className="product-page">
            <article >
                <div className="abalt">
                    <div className="header-abalt header_home">IRRIGATIONSYSTEMS</div>
                    <div className="content-abalt content_home">Rain Systems offers its customers the design, consulting, supply, construction, maintenance and repair of automated irrigation systems, pumps and pumping equipment, drainage systems, cooling systems, garden lighting, fountains, water effects and plumbing services.</div>
                    <div className="image-abalt image--1"></div>
                </div>
            </article>

            <article >
                <div className="abalt">
                    <div className="header-abalt header_home">PUMPING STATIONS</div>
                    <div className="content-abalt content_home">Rain Systems Ltd. was created by a young ambitious team of specialists with over 10 years of experience in the field of building irrigation systems and pumping stations.
Rain Systems works with proven professional products from renowned global companies.
Our work principles are based on correctness, professionalism and competitive prices. The satisfaction of our customers is the most important criterion for our work!</div>
                    <div className="image-abalt image--2"></div>
                </div>
            </article>

            <article >
                <div className="abalt">
                    <div className="header-abalt header_home">Water Tank</div>
                    <div className="content-abalt content_home">With over 10 years experience in the installation and maintenance of a wide range of pumping equipment, we know which pump will be most efficient for your particular site.

The equipment we work with generally covers the following types of pumps and pumping equipment</div>
                    <div className="image-abalt image--3"></div>
                </div>
            </article>

            <article >
                <div className="abalt">
                    <div className="header-abalt header_home">DRAINAGE SYSTEMS</div>
                    <div className="content-abalt content_home">Drainage construction means removing water from the ground surface or groundwater. With the help of a system of drainage pipes, wells, channels and pumps, groundwater is collected and taken away from the green areas.</div>
                    <div className="image-abalt image--4"></div>
                </div>
            </article>
        </section>

    )
}
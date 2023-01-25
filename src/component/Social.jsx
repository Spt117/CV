import Image from "next/image.js";
import Github from "../assets/Github.png";
import Linkedin from "../assets/LinkedIn.png";
import Port from "../assets/portfolio.png";
import Cont from "../assets/contact.png";

export default function Social() {
    return (
        <footer>
            <div id="contain-social">
                <div className="icones">
                    <a
                        href="https://www.linkedin.com/in/jbfund/"
                        title="Mon Linkedin"
                    >
                        <Image
                            src={Linkedin}
                            alt="Linkedin"
                            className="social"
                        />{" "}
                    </a>
                </div>
                <div className="icones">
                    <a href="https://github.com/Spt117" title="Mon Github">
                        <Image src={Github} alt="Github" className="social" />
                    </a>
                </div>
                <div className="icones">
                    <a href="/portfolio" title="Mon Portfolio">
                        <Image src={Port} alt="Portfolio" className="social" />
                    </a>
                </div>
                <div className="icones">
                    <a href="/contact" title="Contactez-moi !">
                        <Image src={Cont} alt="Contact" className="social" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

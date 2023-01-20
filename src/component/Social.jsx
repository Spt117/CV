import Image from "next/image.js";
import Github from "../assets/Github.png";
import Linkedin from "../assets/LinkedIn.png";
import Port from "../assets/Portfolio.png";

export default function Social() {
    return (
        <footer>
            <div id="contain-social">
                <div>
                    <a href="https://www.linkedin.com/in/jbfund/">
                        <Image
                            src={Linkedin}
                            alt="Linkedin"
                            className="social"
                        />{" "}
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Spt117">
                        <Image src={Github} alt="Github" className="social" />{" "}
                    </a>
                </div>

                <div>
                    <a href="/portfolio">
                        <Image src={Port} alt="Portfolio" className="social" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

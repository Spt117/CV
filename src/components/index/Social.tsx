import Image from "next/image.js"
import Github from "../../assets/Github.png"
import Linkedin from "../../assets/LinkedIn.png"
import Port from "../../assets/portfolio.png"
import Cont from "../../assets/contact.png"
import Link from "next/link"

export default function Social(): JSX.Element {
    return (
        <footer>
            <div id="contain-social">
                <div className="icones">
                    <Link href="https://www.linkedin.com/in/jbfund/" title="Mon Linkedin">
                        <Image src={Linkedin} alt="Linkedin" className="social" />
                    </Link>
                </div>
                <div className="icones">
                    <Link href="https://github.com/Spt117" title="Mon Github">
                        <Image src={Github} alt="Github" className="social" />
                    </Link>
                </div>
                <div className="icones">
                    <Link href="/portfolio" title="Mon Portfolio">
                        <Image src={Port} alt="Portfolio" className="social" />
                    </Link>
                </div>
                <div className="icones">
                    <Link href="/contact" title="Contactez-moi !">
                        <Image src={Cont} alt="Contact" className="social" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

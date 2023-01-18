import Photo from "../assets/photo-identite.png";
import Image from "next/image.js";
import Stack from "@/component/Stack.jsx";
import Social from "@/component/Social.jsx";
import Portfolio from "@/component/Portfolio.jsx";

export default function Home() {
    return (
        <div>
            <div className="containerP">
                <div id="child1">
                    <div>
                        <div className="container" id="maFiche">
                            <div id="titres">
                                <h1>Jean-Baptiste Fund</h1>
                                <h3>Développeur Web FullStack</h3>
                            </div>
                            <div id="moncercle">
                                <Image src={Photo} id="id" alt="photo" />
                            </div>
                        </div>
                        <p id="Présentation">
                            Développeur depuis 2022, je crée des sites internet
                            depuis 2017. Le blogging et l'ecommerce ont été mes
                            premiers pas sur le web !
                            <br />
                            <br /> Je suis passionné par les nouvelles
                            technologies comme la Blockchain, et j'aime
                            découvrir de nouveaux langages et de nouveaux
                            frameworks !
                        </p>
                        <Stack />
                    </div>
                    <Social />
                </div>
                <Portfolio />
            </div>
        </div>
    );
}

import Image from "next/image.js";
import React from "react";
import Photo from "../assets/photo-identite.png";

export default function AboutMe(): JSX.Element {
    return (
        <div>
            <div className="container" id="maFiche">
                <div id="titres">
                    <h1>Jean-Baptiste Fund</h1>
                    <h2>Développeur Web FullStack</h2>
                </div>
                <div id="moncercle">
                    <Image src={Photo} id="id" alt="photo" />
                </div>
            </div>
            <p id="Présentation">
                Développeur depuis début 2022, je crée des sites internet depuis
                2017. Le blogging et l&apos;ecommerce ont été mes premiers pas
                sur le web !
                <br />
                <br /> Je suis passionné par les nouvelles technologies comme la
                Blockchain, et j&apos;aime découvrir de nouveaux langages et de
                nouveaux frameworks !<br />
            </p>
        </div>
    );
}

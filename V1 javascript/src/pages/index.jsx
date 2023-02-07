import AboutMe from "@/component/AboutMe.jsx";
import Social from "@/component/Social.jsx";
import Stack from "@/component/Stack.jsx";

export default function Home() {
    return (
        <div className="child1" id="AboutMe">
            <AboutMe />
            <Stack />
            <Social />
        </div>
    );
}

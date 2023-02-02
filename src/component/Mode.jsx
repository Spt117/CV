import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { useEffect } from "react";

export default function Mode() {
    useEffect(() => {
        if (getCookie("mode") === "mountain") {
            try {
                setMountain();
                document.querySelector("#hide-checkbox").checked = true;
            } catch {}
        }
    }, []);

    function setMountain() {
        document.querySelector("#blue").id = "mountain";
    }

    function changeMode() {
        try {
            setMountain();
            setCookie("mode", "mountain");
        } catch {
            document.querySelector("#mountain").id = "blue";
            deleteCookie("mode");
        }
    }

    return (
        <div id="container-mode">
            <li id="wrapper">
                <input
                    type="checkbox"
                    id="hide-checkbox"
                    onChange={changeMode}
                />
                <label htmlFor="hide-checkbox" className="toggle">
                    <span className="toggle-button">
                        <span className="crater crater-1"></span>
                        <span className="crater crater-2"></span>
                        <span className="crater crater-3"></span>
                        <span className="crater crater-4"></span>
                        <span className="crater crater-5"></span>
                        <span className="crater crater-6"></span>
                        <span className="crater crater-7"></span>
                    </span>
                    <span className="star star-1"></span>
                    <span className="star star-2"></span>
                    <span className="star star-3"></span>
                    <span className="star star-4"></span>
                    <span className="star star-5"></span>
                    <span className="star star-6"></span>
                    <span className="star star-7"></span>
                    <span className="star star-8"></span>
                </label>
            </li>
        </div>
    );
}

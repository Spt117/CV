export default function Mode() {
    const changeMode = () => {
        try {
            document.querySelector("#blue").id = "moutain";
        } catch {
            document.querySelector("#moutain").id = "blue";
        }
    };

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

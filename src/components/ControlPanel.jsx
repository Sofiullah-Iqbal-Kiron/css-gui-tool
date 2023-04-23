import {Slider} from "./Slider.jsx";
import {useState} from "react";

export function ControlPanel() {
    const [shadowColor, setShadowColor] = useState("#000000");
    const [isColorValid, setIsColorValid] = useState(true);

    function textChanged(e) {
        const currTextVal = e.target.value;
        setShadowColor(currTextVal);
        // bug
        setIsColorValid(currTextVal === document.querySelector("#shadow-color").value);
    }

    return (
        <div className="text-center">
            <div className="d-flex flex-column gap-3 p-2 m-1 border border-primary-subtle rounded-3">
                <div className="d-flex align-items-center gap-3">
                    <label htmlFor="shadow-color" className="form-label">Color:</label>
                    <input
                        type="color"
                        className="form-control form-control-color"
                        id="shadow-color"
                        value={shadowColor}
                        title="Choose your color"
                        onChange={(e) => setShadowColor(e.target.value)}
                    />
                    <input type="text"
                           className="form-control w-auto"
                           value={shadowColor}
                           onChange={textChanged}
                    />
                    <h5>
                        bug:
                        {
                            isColorValid ?
                                <span className="text-success fw-bold">Valid</span> :
                                <span className="text-danger fw-bold">In-Valid</span>
                        }
                    </h5>
                </div>

                <Slider init_value={1} label_text="OffSetX:"/>
                <Slider init_value={3} label_text="OffSetY:"/>
                <Slider init_value={5} label_text="Spread:"/>
                <Slider init_value={1} label_text="Blur:"/>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="insetChecker"/>
                    <label className="form-check-label" htmlFor="insetChecker">
                        Inset
                    </label>
                </div>
            </div>
            <h4>Control Panel</h4>
        </div>
    )
}
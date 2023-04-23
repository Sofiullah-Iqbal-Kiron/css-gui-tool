import {useState} from "react";

export function Slider({init_value, label_text}) {
    const [s_value, set_s_value] = useState(init_value);

    function handleChange(e) {
        set_s_value(e.target.value);
    }

    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
                <label className="form-label">{label_text}</label>
                <h5>{s_value}px</h5>
            </div>
            <input
                className="form-range"
                type="range"
                min="0"
                max="100"
                value={s_value}
                onChange={handleChange}
            />
        </div>
    );
}
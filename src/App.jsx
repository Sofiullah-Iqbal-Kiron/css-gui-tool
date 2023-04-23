import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import {Header} from "./components/Header.jsx";
import {ControlPanel} from "./components/ControlPanel.jsx";
import {PreviewPane} from "./components/PreviewPane.jsx";
import {CssCodeBox} from "./components/CssCodeBox.jsx";

// 4 main component: Header, ControlPanel, PreviewPane(square preview), CssCodeBox(also editable)

function App() {
    return (
        <div className="d-flex flex-column gap-5">
            <Header/>
            <div className="d-flex gap-2">
                <ControlPanel/>
                <PreviewPane/>
                <CssCodeBox/>
            </div>
        </div>
    );
}

export default App
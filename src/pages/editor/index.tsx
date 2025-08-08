import { Allotment } from "allotment";
import 'allotment/dist/style.css';
import { Header } from "./components/Header";
import { EditArea } from "./components/EditArea";
import { Setting } from "./components/Setting";
import { Material } from "./components/Material";

export default function ReactPlayground() {
    return <div className='h-[100vh] flex flex-col'>
        <div className='h-15 flex items-center b-b-1px b-b-#000 b-b-solid'>
            <Header />
        </div>
        <Allotment>
            <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
                <Material />
            </Allotment.Pane>
            <Allotment.Pane>
                <EditArea />
            </Allotment.Pane>
            <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
                <Setting />
            </Allotment.Pane>
        </Allotment>
    </div>
}


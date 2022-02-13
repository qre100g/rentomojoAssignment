import { useLocation } from "react-router-dom";

function Sample(props) {
    const location = useLocation();
    const data = location.state;
    return <div>
        {console.log(data)}
        <h1>Hai this is new sample page</h1>
    </div>
}
export default Sample;
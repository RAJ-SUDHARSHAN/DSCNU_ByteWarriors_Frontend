import { useLocation } from "react-router-dom";


function Child() {
    const location = useLocation()
    console.log()

    return (
        <div>
            {location.state.data}
        </div>

    )
}

export default Child;
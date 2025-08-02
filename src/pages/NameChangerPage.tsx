import NameChanger from "../components/NameChanger.tsx";
import {useEffect} from "react";

const NameChangerPage = () => {

    useEffect(() => {
        document.title = "CF Name Changer";
    },[]);
    return(
        <>
            <NameChanger/>
        </>
    )
}
export default NameChangerPage
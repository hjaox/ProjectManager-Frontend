import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Dashboard() {
    let params = useParams();
    let [projectListData, setProjectListData] = useState({});

    useEffect(() => {
        
    }, [])
    
    return <p>Dashboard</p>
}
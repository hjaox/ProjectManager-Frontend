import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectsByUserID } from "../../lib/axios/projects";

export default function Dashboard() {
    let { username, userID } = useParams();
    let [projectListData, setProjectListData] = useState({});

    useEffect(() => {
        getProjectsByUserID(userID)
        .then(data => {
            setProjectListData(projectListData => data)
        })
    }, [])
    
    
    return <p>Dashboard</p>
}
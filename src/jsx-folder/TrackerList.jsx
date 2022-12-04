/* eslint-disable */
import '../css-folder/TrackerList.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function TrackerList() {

    const location = useLocation()

    const userId = location.state.userId
    const [children, setChildren] = useState([])
    
    useEffect(() => console.log({children}), [children])
    useEffect(() => {
        const fetchChildList = async () => {
            const response = await axios.post('https://rajsudharshan.pythonanywhere.com/getchildid', {
                "parent_user_id": userId
            })

            const requiredUsers = response.data.data

            const allUsersRes = await axios.get('https://rajsudharshan.pythonanywhere.com/users')
            const allUsers = allUsersRes.data.data

            const finalUserList = []

            for (let i = 0; i < requiredUsers.length; i++){
                for(let j = 0; j < allUsers.length; j++){ 
                    if(requiredUsers[i].tracking_user_id === allUsers[j].id){
                        finalUserList.push({...requiredUsers[i], user_name: allUsers[j].user_name})
                    }
                }
            }

            setChildren(finalUserList)

       }

        fetchChildList()
    },[])
    return (
        <div>
            <div className="header">
                <h1>
                    List of users
                </h1>
            </div>
            <ul className="trackerlist">
                {children && children.map((e, idx) => <li key={idx}>
                    <Link to="/Child" state={{data: e}}>
                        <button className="child">
                            <label htmlFor='child'>{e.user_name}</label>
                        </button>
                    </Link>
                </li>)
                }
                <li>
                    <Link to='/AddChild'>
                        <button className="Add-child">
                            <label htmlFor='child'>Add Child</label>
                        </button>
                    </Link>
                </li>
            </ul >
        </div>
    )
}

export default TrackerList;
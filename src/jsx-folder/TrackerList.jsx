/* eslint-disable */
import '../css-folder/TrackerList.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function TrackerList() {

    const location = useLocation()

    const userId = location.state.userId
    const [children, setChildren] = useState([])
    useEffect(() => {
        setInterval(() => {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {

                        const lat = position.coords.latitude
                        const long = position.coords.longitude
                        axios.post('https://rajsudharshan.pythonanywhere.com/updatelocation', {
                            "user_id": userId,
                            "lat_long": `${lat}, ${long}`
                        }).then((res) => console.log({ res }))
                            .catch(e => console.error({ error: e }))
                    },
                    function (error) {
                        console.error("Error Code = " + error.code + " - " + error.message);
                    }
                );

            }
        }, 10000)


    }, [])

    useEffect(() => {
        const fetchChildList = async () => {
            const response = await axios.post('https://rajsudharshan.pythonanywhere.com/getchildid', {
                "parent_user_id": userId
            })

            const requiredUsers = response.data.data

            const allUsersRes = await axios.get('https://rajsudharshan.pythonanywhere.com/users')
            const allUsers = allUsersRes.data.data

            const finalUserList = []

            for (let i = 0; i < requiredUsers.length; i++) {
                for (let j = 0; j < allUsers.length; j++) {
                    if (requiredUsers[i].tracking_user_id === allUsers[j].id) {
                        finalUserList.push({ ...requiredUsers[i], user_name: allUsers[j].user_name })
                    }
                }
            }

            setChildren(finalUserList)

        }

        fetchChildList()
    }, [])
    return (
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-gray-50 dark:bg-gray-900">
            <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">List of users</h5>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        {children && children.map((e, idx) => <li class="py-3 sm:py-4" key={idx}>
                            <Link to="/Child" state={{ data: e }} className="flex justify-between cursor-pointer">
                                <div className="flex-1 min-w-0">
                                    <label htmlFor='child' class="text-sm font-medium text-gray-900 truncate dark:text-white cursor-pointer">{e.user_name}</label>
                                </div>
                                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </div>
                            </Link>
                        </li>)
                        }
                        <Link to={"/AddChild"} ><button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-toggle="authentication-modal">Add Child</button></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TrackerList;
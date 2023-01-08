import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const API_KEY = "AIzaSyBK-xckagY7ua5F0qsjtzDVnxL0-63BquU"
const containerStyle = {
  width: '100%',
  height: '100vh'
};

const Map = () => {
  const location = useLocation()
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  useEffect(() => {
    const fetchChildList = async () => {
      const response = await axios.post('https://rajsudharshan.pythonanywhere.com/getchildlocation', {
        "parent_user_id": location.state.data.user_id,
        "child_user_id": location.state.data.tracking_user_id
      })
      setLat(+response.data.location.split(",")[0])
      setLong(+response.data.location.split(",")[1])
    }
    fetchChildList()
  }, [])

  useEffect(() => {
    console.log(lat)
  }
    , [lat])
  useEffect(() => {
    console.log(long)
  }
    , [long])


  return (
    <div>
      {lat && long && <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle} center={{ lat: lat, lng: long }} zoom={15}>
          <MarkerF position={{ lat: lat, lng: long }}></MarkerF>
        </GoogleMap>
      </LoadScript>}
    </div>
  )
}

export default Map
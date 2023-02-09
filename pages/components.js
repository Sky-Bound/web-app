import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

import Text from '../components/AppText/Text'
import Menu from '../components/Menu/Menu'
import LeftBox from '../components/ContentBoxes/LeftBox'
import RightBox from '../components/ContentBoxes/RightBox'
import POTD from '../components/NASA-POTD-API/potd'
import WeatherHome from '../components/WeatherAPI/WeatherHome'

export default function Home() {
  //const [data, setData] = useState();
  var long = "-84.39"
  var lat = "33.77"
  var appId = "266cd79a-5a2c-40d1-b84e-5d2e4f5a09b7"
  var appSecrete = "4acc2644f102881f7cd608db9b8a689b8d3c91901fed8170725544453d6be1ad293122706e8023a109f20121eb59113dcd03aca05266699c6f6a5bc4580aa6694c9edf6d52506b3f4d313b1cfc2afaf59953887c38edd27afda5fcebad217f4b9cf747676d1b0b07f47ecf54cc016fbe"
  const url = `https://api.astronomyapi.com/api/v2/studio/moon-phase?long=${long}&lat=${lat}`

  useEffect(() => {
    const options = {
      "method": "POST",
      "hostname": "api.astronomyapi.com",
      "port": null,
      "path": "/api/v2/studio/moon-phase",
      "headers": {
        "Authorization": "Basic MjY2Y2Q3OWEtNWEyYy00MGQxLWI4NGUtNWQyZTRmNWEwOWI3OjRhY2MyNjQ0ZjEwMjg4MWY3Y2Q2MDhkYjliOGE2ODliOGQzYzkxOTAxZmVkODE3MDcyNTU0NDQ1M2Q2YmUxYWQyOTMxMjI3MDZlODAyM2ExMDlmMjAxMjFlYjU5MTEzZGNkMDNhY2EwNTI2NjY5OWM2ZjZhNWJjNDU4MGFhNjY5NGM5ZWRmNmQ1MjUwNmIzZjRkMzEzYjFjZmMyYWZhZjU5OTUzODg3YzM4ZWRkMjdhZmRhNWZjZWJhZDIxN2Y0YjljZjc0NzY3NmQxYjBiMDdmNDdlY2Y1NGNjMDE2ZmJl"
      }
    };
    
    fetch('https://api.astronomyapi.com/api/v2/studio/moon-phase', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      }).catch(err => console.log(err))

  },[])


  return (
    <div className={styles.container}>
      <Head>
        <title>Skybound</title>
      </Head>

      <main className={styles.main}>
        
        <title>Sky Bound</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/star.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      {/* </Head> */}

      <main className={styles.main}>
        <Text txt="Hi" weight="700" size="70px" color="#0F1C3F"/>
        <Menu />
        <WeatherHome />
        <LeftBox src="/star.png" />
        <RightBox src="/telescope.png"/>
        <POTD />
      </main>
      </main>
    </div>
  )
}

import { useEffect, useState } from "react";
import * as Location from 'expo-location'

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {

    try {
      const resPermission = await Location.requestForegroundPermissionsAsync();
      if (!resPermission.granted) return;
      //getLastKnownPositionAsync does not work on android 
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude })

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLocation()
  }, [])


  return location
};
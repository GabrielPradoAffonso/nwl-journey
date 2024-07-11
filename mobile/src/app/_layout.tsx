import "@/styles/global.css"
import { Slot } from 'expo-router'
import { ContainerLayout } from './styles'
import { StatusBar } from "react-native"

import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold
} from "@expo-google-fonts/inter"
import { Loading } from "@/components/Loading/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold
  })

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <ContainerLayout>
       <StatusBar 
        barStyle={"light-content"}
        backgroundColor='transparent'
        translucent
       />
      <Slot />
    </ContainerLayout>
  )
  
  
}
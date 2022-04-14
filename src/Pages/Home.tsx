import React, { ReactElement, FC, useEffect, useState } from "react";
import DetectMobile from "../Utils/DetectMobile.jsx"

interface Props {

}

const Home: FC<Props> = (): ReactElement => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  const HandleOnclick = () =>{
    if (navigator.share) {
      navigator
        .share({
          title: "Easy Share Title",
          text: `I'm on Eazy to manage mu policies, earn points and gain points. Download the app to score deals.`,
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
    }
  }

  useEffect(()=>{
    setIsMobileOrTablet(DetectMobile())
  })
  return(
    <>
      <h1>Home</h1>
      <button onClick={()=> HandleOnclick()}>Refer a friend</button>
      <a href="tel: +6309750140558">Call +63 097 5014 0558</a>
    </>
  )
}

export default Home
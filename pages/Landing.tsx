import React from 'react';
import { CustomCarousel } from '../components/Carousel';
import { AllProduct } from './product/allProduct';
import ParallaxScrollView from '../components/ParallaxScrollView';
// import MyComponent from '../components/BottemNav';

const randomImageUrls = [
  "https://evitstest.myshopify.com/cdn/shop/files/Reshma_Beauty_Banner_1.webp?v=1727673900&width=2000",
  "https://picsum.photos/300/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/500/300",
  "https://picsum.photos/600/300"
];


export function Landing() {
  return (
    <>
     <ParallaxScrollView 
      headerImage={
       <CustomCarousel CarouselData={randomImageUrls}/>
    }
    >  
        <AllProduct/>
     </ParallaxScrollView>
     {/* <MyComponent/> */}
    </>
  )
}

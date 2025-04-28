
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '@/components/ui/button';
import { MorphingText } from "@/components/magicui/morphing-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useNavigate } from 'react-router-dom'

export function AuroraTextDemo() {
  return (
    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Ship <AuroraText>beautiful</AuroraText>
    </h1>
  );
}


const texts = [
  "connect the life drops",
  "Drops of Kindness Across India",
  "Every Drop Saves a Life",
  "Be the Drop of Life.",
  " Give a Drop, Gift Life",
  "Where a Single Drop Creates an Ocean of Hope."

];




function Home () {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login')
  }

  const handleRegister = () => {
    navigate('/register')
  }
    return (
      <div className=' h-[100dvh] w-[70%] mx-auto flex flex-col items-center gap-6' >
             <DotLottieReact
               src="https://lottie.host/7b2dd9f9-933e-447a-be3b-dd26a5dde4b0/ZSSY9ngfPd.lottie"
               loop
               autoplay
               className='h-[50%] w-[70%] relative top-0'
             />
       
        <div className='flex justify-center items-center flex-col gap-6 '> 
           <h1 className="text-9xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
             <AuroraText className='text-8xl'> Life Drop </AuroraText>
            </h1>
          <MorphingText texts={texts} />;
         {/* <div className='flex'>
            <h1> Blood </h1>
            <MorphingText className="border-2 h-[200px] w-[300px]" texts={texts} />;
            </div>
            <h3 className='font-medium text-xl --font-railway'> Be the Drop of Life </h3> */}
        </div>

         <div className='mt-6 flex gap-3'> 
            <Button variant="outline" onClick={handleClick} > Log in </Button>
            <Button onClick={handleRegister}> Register </Button>
         </div>
      </div>
    );
}

export { Home }
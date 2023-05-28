"use client";
import Image from "next/image";
import { FcNext, FcPrevious } from "react-icons/fc";
import Reviews from "@/utils/Data";
import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text } = Reviews[index];

  const chackNumber = (number) =>{
    if(number > Reviews.length -1){
      return 0;
    }
    if(number < 0){
      return number - 1;
    }
    return number;
  }
  const handlePrev = () => {
   setIndex((index)=>{
    let newIndex = index-1;
    return chackNumber(newIndex);
   });
  };
  const handleNext = () => {
   setIndex((index)=>{
    let newIndex = index +1;
    return chackNumber(newIndex);
   })
  }
  const hanldeSurprise = () =>{
    setIndex((index)=>{
      let randNum = Math.floor(Math.random()*4);
      return chackNumber(randNum);
    })
  }
  return (
    <main>
      <div className="container">
        <div className="box">
          <div className="imgBody">
            <Image src={image} alt="person" width={200} height={200} />
          </div>
          <div className="content">
            <h4>{name}</h4>
            <p className="position">{job}</p>
            <p>{text}</p>
          </div>
          <div className="bottons">
            <div>
              <FcPrevious
                className="nPbotton"
                onClick={handlePrev}
              />

              <FcNext
                className="nPbotton"
                onClick={handleNext}
              />
            </div>
            <button 
            className="btn"
            onClick={hanldeSurprise}
            >surprise me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

import React from "react";
import SidePanel from "../Components/SidePanel";
import FadeText from "../Components/FadeText";
import FirstSection from "../Components/FirstSection";
import { Button, Image } from "@nextui-org/react";
import NumberCounter from "../Components/NumberCounter";
import InfinityCarousel from "../Components/InfinityCarousel";

const Dashboard = () => {
   return (
      <div className="w-screen h-screen bg-base overflow-hidden flex items-center">
         <div id="container" className="bg-base m-auto h-[90%] w-[90%] flex ">
            <div
               id="profile-panel"
               className="h-full bg-foreground rounded-l-3xl rounded-br-3xl w-1/3 bg-gradient-to-t from-foreground to-base"
            >
               <div className="h-full flex flex-col">
                  <div className="h-3/5 bg-cover object-fit overflow-hidden ">
                     <Image
                        isBlurred
                        src="/images/ava.png"
                        alt="hafidz"
                        className="w-[80%] h-[80%] m-auto"
                     />
                  </div>
                  <div className="h-2/5 w-full self-end pl-4 flex flex-col">
                     <h1 className="text-fontHeader dark:text-transparent inline-block font-header mb-2 text-xl bg-gradient-to-t from-gray-300 to-base bg-clip-text">
                        Services
                     </h1>
                     <p className="text-fontBase font-desc w-80 text-3xl text-wrap dark:text-transparent bg-gradient-to-t from-gray-300 to-base bg-clip-text inline-block">
                        Let's Program your Ideas and build quality Product with
                        my services
                     </p>
                     <Button className="rounded-md my-4 mr-8 self-start">
                        Hire Me
                     </Button>
                     <div className="flex mt-4 itmes-end">
                        <div className="flex items-center gap-6 w-full">
                           <Button
                              isIconOnly
                              variant="light"
                              className="w-16 h-16"
                              as="a"
                              href="https://linkedin.com/in/hafidznurmawan"
                              target="_blank"
                           >
                              <img
                                 src="/images/linkedin.png"
                                 alt="linkedin"
                                 className="w-10"
                              />
                           </Button>
                           <Button
                              isIconOnly
                              variant="light"
                              className="w-16 h-16"
                              as="a"
                              href="https://github.com/hafidznurmawanhakim"
                              target="_blank"
                           >
                              <img
                                 src="/images/git.png"
                                 alt="github"
                                 className="w-10"
                              />
                           </Button>
                           <Button
                              isIconOnly
                              variant="light"
                              className="w-16 h-16"
                              as="a"
                              href="https://instagram.com/hafidz_nh"
                              target="_blank"
                           >
                              <img
                                 src="/images/insta.png"
                                 alt="instagram"
                                 className="w-10"
                              />
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div
               id="card-section"
               className="inital w-full rounded-l-3xl rounded-br-3xl bg-foreground rounded-3xl bg-gradient-to-b from-foreground to-base"
            >
               <div className="grid grid-cols-3 grid-rows-4 gap-4 h-full">
                  <div className="row-span-4 col-start-3 row-start-1">
                     <NumberCounter />
                  </div>
                  <div className="col-span-2 col-start-1 row-start-1">
                     <InfinityCarousel />
                  </div>
                  <div className="col-span-2 col-start-1 row-start-4">
                     <FadeText />
                  </div>
                  <div className="col-span-2 row-span-2 col-start-1 row-start-2">
                     9
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;

import { Button } from "@nextui-org/react";
import React from "react";
import { useAppController } from "../modules/main/AppController";

const Home = () => {
   const { themeToggle, isDarkTheme } = useAppController();

   return (
      <div className="bg-background h-screen">
         <div className="p-4 bg-foreground">
            <Button onClick={themeToggle}>t</Button>
         </div>
      </div>
   );
};

export default Home;

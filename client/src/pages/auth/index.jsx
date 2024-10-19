import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"; // Import from Radix UI (or shadcn if styled)
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function index() {
  const [activeTab, setActiveTab] = useState("signIn");

  function handleTabChange(value) {
    setActiveTab(value);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-2 flex items-center border-bottom">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 m-4" />
          <span className="text-xl font-extrabold">StudyBuddy</span>
        </Link>
      </header>

      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signIn"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signIn">Sign In</TabsContent>
          <TabsContent value="signUp">Sign Up</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default index;

import React from "react";
import Footer from "components/Footer";
import LessonSection from "components/LessonSection";
import StatsHeader from "components/StatsHeader";
import { Container } from "@chakra-ui/react";

const home = (props) => {
  return (
    <div>
      <StatsHeader />
      <LessonSection></LessonSection>
    </div>
  );
};

export default home;

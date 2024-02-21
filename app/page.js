'use client'

import { useEffect } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import ChakraNavBar from './components/ChakraNavBar.js';
import IntroSection from './intro/page.js'
import MilestonesSection from './milestones/page.js'
import AboutSection from './about/page.js'
import ProjectsSection from './projects/page.js';

export default function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = (section, offset = 0) => {
    let target = document.getElementById(`${section}-section`);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <ChakraProvider>
        <div id='home-section'>
          <ChakraNavBar scrollToSection={scrollToSection}/>
          <IntroSection />
          <MilestonesSection />
          <AboutSection />
          <ProjectsSection />
        </div>
    </ChakraProvider>
  )
}
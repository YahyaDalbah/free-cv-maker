import React from 'react'
import Header from './Header';
import MainSection from './MainSection';
import MainSectionChild from './MainSectionChild';
import Side from './Side';
import Main from './Main';
import SideDetails from './SideDetails';
import SideSection from './SideSection';
import SideSectionChild from './SideSectionChild';

export default function CV() {
  
  return (
    <div
      id="cv"
      className=" px-10 py-6 rounded bg-white h-pdf scale-90 md:transform-none"
    >
      <Header />
      <div className="grid grid-cols-3 gap-x-12">
        <Main className=" col-span-2">
          <MainSection title="employment history">
            <MainSectionChild
              workDone={"frontend"}
              place={"foothill"}
              city={"tulkarm"}
              startDate={"08/2000"}
              endDate={"12/2000"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci voluptatum dolores voluptates optio. Minus dignissimos exercitationem et ipsam vero!"
              }
            />
            <MainSectionChild
              workDone={"frontend"}
              place={"foothill"}
              city={"tulkarm"}
              startDate={"08/2000"}
              endDate={"12/2000"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci voluptatum dolores voluptates optio. Minus dignissimos exercitationem et ipsam vero!"
              }
            />
          </MainSection>
          <MainSection title="employment history">
            <MainSectionChild
              workDone={"frontend"}
              place={"foothill"}
              city={"tulkarm"}
              startDate={"08/2000"}
              endDate={"12/2000"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci voluptatum dolores voluptates optio. Minus dignissimos exercitationem et ipsam vero!"
              }
            />
            <MainSectionChild
              workDone={"frontend"}
              place={"foothill"}
              city={"tulkarm"}
              startDate={"08/2000"}
              endDate={"12/2000"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci voluptatum dolores voluptates optio. Minus dignissimos exercitationem et ipsam vero!"
              }
            />
          </MainSection>
          <MainSection />
          <MainSection />
        </Main>

        <Side>
          <SideDetails />
          <SideSection title={"Skills"}>
            <SideSectionChild skill={"git"} proficiency={"experienced"} />
            <SideSectionChild skill={"git"} proficiency={"experienced"} />
          </SideSection>
        </Side>
      </div>
    </div>
  );
}
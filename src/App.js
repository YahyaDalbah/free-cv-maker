import React, { useState, useEffect } from "react";
import PersonalDetails from "./DetailsSections/PersonalDetails";
import Summary from "./DetailsSections/ProfileSummary";
import EmploymentHistory from "./DetailsSections/EmploymentHistory";
import Education from "./DetailsSections/Education";
import Skills from "./DetailsSections/Skills";
import CVPage from "./Pages/CVPage";
import DetailsPage from "./Pages/DetailsPage";
import CV from "./CVSections/CV";
import { jsPDF } from "jspdf";

export default function App() {
  const [showPdf, setShowPdf] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <DetailsPage
          className={`mx-4 my-8 sm:mx-16 overflow-auto ${
            showPdf && windowWidth < 1280 ? "hidden" : ""
          }`}
        >
          <PersonalDetails />
          <Summary />
          <EmploymentHistory />
          <Education />
          <Skills />
        </DetailsPage>

        <CVPage
          className={`${!showPdf && windowWidth < 1280 ? "hidden" : ""} ${
            windowWidth < 1280 && showPdf ? "w-screen h-screen" : ""
          } bg-gray-bg flex justify-center`}
        >
          <div className="w-pdf mt-4 xl:fixed">
            <div className="flex justify-between text-white md:mb-3">
              <button className="hover:bg-gray-600 cv-page-button">
                Select template
              </button>
              <button
                onClick={() => {
                  const doc = new jsPDF({
                    unit: "pt",
                  });
                  const elementToConvert = document.querySelector("#cv");
                  doc.html(elementToConvert, {
                    callback: (doc) => {
                      doc.save();
                    },
                  });
                }}
                className=" bg-blue hover:bg-hover-blue cv-page-button font-semibold"
              >
                Download PDF
              </button>
            </div>
            <div className="bg-gray-bg ">
              <CV />
            </div>
          </div>
        </CVPage>
      </div>

      <button
        onClick={() => setShowPdf((prev) => !prev)}
        className=" fixed bottom-6 right-3 bg-blue hover:bg-hover-blue text-white  w-14 h-14 rounded-full xl:hidden"
      >
        <i className="fa-solid fa-file-pdf"></i>
      </button>
    </>
  );
}

import React, { useState, useEffect } from "react";
import PersonalDetails from "./DetailsSections/PersonalDetails";
import Summary from "./DetailsSections/ProfileSummary";
import EmploymentHistory from "./DetailsSections/EmploymentHistory";
import Education from "./DetailsSections/Education";
import Skills from "./DetailsSections/Skills";
import CV from "./CVSections/CV";
import { jsPDF } from "jspdf";
import Projects from "./DetailsSections/Projects";
import Languages from "./DetailsSections/Languages";
import Courses from "./DetailsSections/Courses";
import References from "./DetailsSections/References";
import UserLogIn from "./components/UserLogIn";
import AuthPage from "./Pages/AuthPage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { addStateSectionObj, setStateElement } from "./functions";
import Cookies from "universal-cookie";
import CV2 from "./CV2/CV2";
import SelectTemplatePage from "./Pages/SelectingTemplatePage";
const cookies = new Cookies();
const CVs = [<CV2 />, <CV />];
export default function App() {
  const [showPdf, setShowPdf] = useState(false);
  const [showAuthPage, setShowAuthPage] = useState(false);
  const [isUserLoggingIn, setIsUserLoggingIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cvIndex, setCVIndex] = useState(0);
  const [selectingTemplate, setSelectingTemplate] = useState(false);
  const dispatch = useDispatch();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (cookies.get("auth-token")) {
      getDoc(doc(db, `users/${cookies.get("auth-token")}`))
        .then((snapshot) => {
          const data = snapshot.data();
          for (let [section, sectionState] of Object.entries(data)) {
            if (!Array.isArray(sectionState)) {
              for (let [keyField, value] of Object.entries(sectionState)) {
                setStateElement(section, dispatch, keyField, value);
              }
            } else {
              for (let i = 0; i < sectionState.length; i++) {
                addStateSectionObj(section, dispatch, sectionState[i]);
              }
            }
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    } else {
      setLoading(false);
    }
  }, []);

  function selectTemplate(i){
    setCVIndex(i)
    setSelectingTemplate(false)
  }
  if (!loading) {
    if (showAuthPage) {
      return (
        <AuthPage
          isUserLoggingIn={isUserLoggingIn}
          setIsUserLoggingIn={setIsUserLoggingIn}
          setShowAuthPage={setShowAuthPage}
        />
      );
    }
    if(selectingTemplate){
      return <SelectTemplatePage selectTemplate={selectTemplate} cvIndex={cvIndex} />
    }
    return (
      <div style={{ overflow: showAuthPage ? "hidden" : "" }}>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div
            className={`mx-4 my-8 sm:mx-16 overflow-auto ${
              showPdf && windowWidth < 1280 ? "hidden" : ""
            }`}
          >
            <PersonalDetails />
            <Summary />
            <EmploymentHistory />
            <Education />
            <Skills />
            <Projects />
            <Languages />
            <Courses />
            <References />
          </div>

          <div
            className={`${!showPdf && windowWidth < 1280 ? "hidden" : ""} ${
              windowWidth < 1280 && showPdf ? "w-screen h-screen" : ""
            } bg-gray-bg flex justify-center`}
          >
            <div className="w-pdf mt-4 xl:fixed">
              <div className="flex sm:justify-between text-white mb-3">
                <button
                  onClick={() => {
                    console.log("te");
                    setSelectingTemplate(true);
                  }}
                  className="hover:bg-gray-600 cv-page-button"
                >
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
                      autoPaging: "text",
                      margin: [0, 0, 0, 0],
                    });
                  }}
                  className=" bg-blue hover:bg-hover-blue cv-page-button font-semibold"
                >
                  Download PDF
                </button>
              </div>
              <div className="bg-gray-bg ">{CVs[cvIndex]}</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowPdf((prev) => !prev)}
          className=" fixed bottom-6 right-3 bg-blue hover:bg-hover-blue text-white  w-14 h-14 rounded-full xl:hidden"
        >
          <i className="fa-solid fa-file-pdf"></i>
        </button>

        <UserLogIn
          setIsUserLoggingIn={setIsUserLoggingIn}
          setShowAuthPage={setShowAuthPage}
        />

        
      </div>
    );
  } else
    return (
      <div className="w-screen h-screen flex justify-center items-center text-6xl font-semibold">
        Loading...
      </div>
    );
}

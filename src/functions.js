import { setPersonalDetails } from "./Features/personalDetails";
import { setProfileSummary } from "./Features/profileSummary";
import {
  addEmploymentFromDB,
  setEmployment,
} from "./Features/employmentHistory";
import { addEducationFromDB, setEducation } from "./Features/educations";
import { addSkillFromDB, setSkill } from "./Features/skills";
import { addProjectFromDB, setProject } from "./Features/projects";
import { addLanguageFromDB, setLanguage } from "./Features/languages";
import { addCourseFromDB, setCourse } from "./Features/courses";
import { addReferenceFromDB, setReference } from "./Features/references";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import Cookies from "universal-cookie";
import debounce from "lodash.debounce";
import { store } from "./store";
const cookies = new Cookies();

export function getElement(array, id) {
  for (const element of array) {
    if (element.id === id) {
      return element;
    }
  }
}
export function updateState(array, action) {
  const element = getElement(array, action.payload.id);

  element[action.payload.changedField[0]] = action.payload.changedField[1];
}
export function deleteStateElement(array, action) {
  const elementToDeleteIndex = array.findIndex(
    (element) => element.id === action.payload
  );
  array.splice(elementToDeleteIndex, 1);
}

export function AddDropDownField(dispatch, addFunction) {
  dispatch(addFunction());
}

export const selectFieldData = (state, section, keyField, idInArray) => {
  if (section.includes("personalDetails")) {
    return state.personalDetails[keyField];
  } else if (section.includes("profileSummary")) {
    return state.profileSummary.summary;
  } else if (section.includes("employmentHistory")) {
    const employment = getElement(state.employmentHistory, idInArray);
    return employment[keyField];
  } else if (section.includes("education")) {
    const obj = getElement(state.education, idInArray);
    return obj[keyField];
  } else if (section.includes("skills")) {
    const obj = getElement(state.skills, idInArray);
    return obj[keyField];
  } else if (section.includes("projects")) {
    const obj = getElement(state.projects, idInArray);
    return obj[keyField];
  } else if (section.includes("languages")) {
    const obj = getElement(state.languages, idInArray);
    return obj[keyField];
  } else if (section.includes("courses")) {
    const obj = getElement(state.courses, idInArray);
    return obj[keyField];
  } else if (section.includes("references")) {
    const obj = getElement(state.references, idInArray);
    return obj[keyField];
  } else {
    console.error("wrong section name");
  }
};

export const selectStateSection = (state, section) => {
  if (section.includes("personalDetails")) {
    return state.personalDetails;
  } else if (section.includes("profileSummary")) {
    return state.profileSummary;
  } else if (section.includes("employmentHistory")) {
    return state.employmentHistory;
  } else if (section.includes("education")) {
    return state.education;
  } else if (section.includes("skills")) {
    return state.skills;
  } else if (section.includes("projects")) {
    return state.projects;
  } else if (section.includes("languages")) {
    return state.languages;
  } else if (section.includes("courses")) {
    return state.courses;
  } else if (section.includes("references")) {
    return state.references;
  } else {
    console.error("wrong section name");
  }
};

export const setStateElement = (
  section,
  dispatch,
  keyField,
  value,
  idInArray
) => {
  if (section.includes("personalDetails")) {
    dispatch(setPersonalDetails([keyField, value]));
  } else if (section.includes("profileSummary")) {
    dispatch(setProfileSummary(value));
  } else if (section.includes("employmentHistory")) {
    dispatch(
      setEmployment({
        id: idInArray,
        changedField: [keyField, value],
      })
    );
  } else if (section.includes("education")) {
    dispatch(
      setEducation({
        id: idInArray,
        changedField: [keyField, value],
      })
    );
  } else if (section.includes("skills")) {
    dispatch(
      setSkill({
        id: idInArray,
        changedField: [keyField, value],
      })
    );
  } else if (section.includes("projects")) {
    dispatch(setProject({ id: idInArray, changedField: [keyField, value] }));
  } else if (section.includes("languages")) {
    dispatch(
      setLanguage({
        id: idInArray,
        changedField: [keyField, value],
      })
    );
  } else if (section.includes("courses")) {
    dispatch(
      setCourse({
        id: idInArray,
        changedField: [keyField, value],
      })
    );
  } else if (section.includes("references")) {
    dispatch(
      setReference({
        id: idInArray,
        changedField: [keyField, value],
      })
    );
  } else {
    console.error("wrong section name");
  }
};

export const addDocToDB = async (id) => {
  await setDoc(doc(db, `users`, `${id}`), store.getState());
};

export const updateDB = debounce(() => {
  if (cookies.get("auth-token")) {
    setDoc(doc(db, `users`, `${cookies.get("auth-token")}`), store.getState());
  }
}, 2000);

export const addStateSectionObj = (section, dispatch, obj) => {
  if (section.includes("employmentHistory")) {
    dispatch(addEmploymentFromDB(obj));
  } else if (section.includes("education")) {
    dispatch(addEducationFromDB(obj));
  } else if (section.includes("skills")) {
    dispatch(addSkillFromDB(obj));
  } else if (section.includes("projects")) {
    dispatch(addProjectFromDB(obj));
  } else if (section.includes("languages")) {
    dispatch(addLanguageFromDB(obj));
  } else if (section.includes("courses")) {
    dispatch(addCourseFromDB(obj));
  } else if (section.includes("references")) {
    dispatch(addReferenceFromDB(obj));
  } else {
    console.error("wrong section name");
  }
};

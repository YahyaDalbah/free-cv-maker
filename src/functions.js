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

export function AddDropDownField(dispatch, addFunction){
  dispatch(addFunction())
}

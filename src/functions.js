export function getEmployment(employmentHistory, id) {
  for (const employment of employmentHistory) {
    if (employment.id === id) {
      return employment;
    }
  }
}
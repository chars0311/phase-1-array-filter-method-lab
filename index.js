// Code your solution here
// Function to find drivers with an exact name match
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers with names that start with a given string
  function fuzzyMatch(drivers, partialName) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(partialName.toLowerCase()));
  }
  
  // Function to match drivers based on their name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
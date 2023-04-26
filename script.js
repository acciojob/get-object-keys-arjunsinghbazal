// Create the student object with a name property
const student = {
  name: "John Doe"
};

// Add the getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Call the getKeys() method on the student object
const keys = student.getKeys();

// Log the keys array to the console
console.log(keys); // Output: ["name"]

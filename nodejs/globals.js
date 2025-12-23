// __dirname - The directory name of the current module
console.log(__dirname);

// __filename - The file name of the current module
console.log(__filename);

// process - Provides information about, and control over, the current Node.js process
console.log(process.platform);

// require - Function to include modules that exist in separate files
const fs = require('fs');
console.log(typeof require);

// module - Represents the current module, and has information about it
console.log(module.id);

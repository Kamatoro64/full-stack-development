const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info (returns an array)
console.log(os.cpus());

// Number of cores
console.log(os.cpus().length);

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime (seconds)
console.log(os.uptime());
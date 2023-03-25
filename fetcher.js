// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// ✅Install and use the request library to make the HTTP request 
// ✅(We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

const url = process.argv[2]
const localPath = process.argv[3]

const request = require('request');
const fs = require('fs');

const fetcher = (url, localPath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Error")
      return
    }
  fs.writeFile(localPath, body, (err) => {
    if (err) {
      console.error(err); 
      return
    }
    else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
    }
    // file written successfully
  });
});

}


fetcher(url, localPath)



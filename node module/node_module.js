// 1. In this coding challenge, your task is to create a package&json file for your project using the npm init
// command& The package&json file is essential for managing dependencies, scripts, and other project"related
// // details& Below is the expected folder structure.

// 2. In the same project directory created in the above assignment, your task is to create a new file index&js and
// using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below
// are the expected files in the project folder.
const fs = require ("fs");
const data =  "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

fs.writeFileSync("nodejs_architecture.txt" , data ,function (err){
    if (err){
        console.log(error in writing);
    }else{
        console.log("success in writing");
    }
});

//

//
// 3) Continuing assignment 2& Here, let’s create a new file named index&js and use the fs module to read the
// content of nodejs_architecture&txt and print the content to the console.

const readData = fs.readFileSync("nodejs_architecture.txt");

console.log(readData.toString());
//
// 4. In this coding challenge, you will continue working with the file created in the previous assignments& Here
// your task is to access the existing nodejs_architecture&txt file and use the fs module to append additional
// data to it& Specifically, add some advantages of Node&js to the file and print the file content to the console.

const newData =
  "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

fs.appendFileSync("nodejs_architecture.txt", newData);

const newdata = fs.readFileSync("nodejs_architecture.txt");

console.log(newdata.toString());
//
// 5. To wind up the fs module walk"through challenges, let’s delete the nodejs_architecture&txt file& On deletion
// print "File Deleted SuccessFully" to the console.

fs.unlink("./nodejs_architecture.txt", () =>
  console.log("File Deleted SuccessFully")
);
//
// 6. Assume a situation where our server restricts access to its configuration via the user interface& The only way
// to obtain the OS and release information is through a programmatic approach& In this challenge, you are
// expected to use the os module and print the os name and the os"release version to the console.
console.log("Operating system name: " + os.type());

console.log("OS release : " + os.release());
//
// 7. In this challenge, you are required to use Node1js and the built-in HTTP module to create a server that
// displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen1
// The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and
// send the message as a response to the client's request, allowing it to display on the browser.
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
    );
  }
  res.end();
});

server.listen(5001);
console.log(`The HTTP Server is running on port 5001`);

//
// 8)Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
// event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
// that the user has subscribed.

const SubsEvent = require ("events");

const subsevent = new SubsEvent();

const subscribemassage = (channelname) => {
    console.log(`thanks for subscribing to
    ${channelName}`);
}

    subsevent.addListener("Subscribe",subscribemassage);

    subsevent.emit("Subscribe", "Themployedexplorer");
//
// 9)While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered1 However, what happens if we remove an event and then
// try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
// handler and observe what happens when we call it.
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

// 10. In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
// allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
// number of event listeners associated with an event and then set the maximum number of event listeners to
// 51 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners
// to 5.

console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
  
  eventEmitter.setMaxListeners(5);
  
  console.log(
    `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );

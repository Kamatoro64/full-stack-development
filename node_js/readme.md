### What is node.js
JavaScript Runtime built on the V8 JavaScript engine that allows us to run JavaScript code on the server.

### Why node.js
* Fast, efficient and highly scalable
* Event driven, non-blocking I/O model
* Popular in the industry
* Same language on the front and back end (JavaScript)

### Non-blocking I/O
* Works on a single thread using non-blocking I/O calls (using the libuv C++ library)
* Supports large number of concurrent connections
* Optimises throughput and scalability in apps with many I/O operations


### Best types of projects for node
I/O operations such as sending and receiving data to and from a server are asynchronous and handled by the libuv library, which makes them non-blocking. However, Node is not great for applications that are CPU intensive.
* REST API & Microservices
* Real Time Services (Chat, Live Updates)
* CRUD Apps - Blogs, Shopping Carts, Social Networks
* Tools and Utilities
  

### NPM Node Package Manager
* NPM comes with the Node.js installation and is used to download third party packages (frameworks, libraries, tools, etc)
* Packages get stored in the "node_modules" folder
* All dependencies are listed in a "package.json" file
* NPM scripts can be created to run certain tasks such as run a server

```
Sample usage:

npm init               // Generates a package.json file
 
npm install express    // Installs a package locally

npm install -g nodemon // Installs a package globally

```

### Node Modules
* Node Core Modules (path, fs, http, etc)
* 3rd party modules/packages installed via NPM
* Custom modules (files)

```
const path = require('path');
const myFile = require('./myFile')
```

### Creating a Node app:
```
mkdir NODE_CRASH_COURSE

cd NODE_CRASH_COURSE/

npm init

# Install uuid as a dependency, this will install uuid in node_modules and add it to package.json as a dependency

npm install uuid

# Install nodemon as a dev dependency --save-dev / -D 

npm install -D nodemon

# To move the app to a different location you don't have to package up the node_modules, simply run npm install

```

### Exporting modules
person.js
```
const person = {
        name: 'John Doe',
        age: 30
}

module.exports = person;
```

index.js

```
const person = require('./person');

console.log(person);
```


### Understanding the event loop

* The V8 JavasScript reads JavaScript code and makes it execute on the machine
* Web browsers contain a JavaScript engine and so does Node.js
* A JavaScript engine is not enough for a complete runtime environment (a browser/Node.js). 
* Slow operations, such as a disk access or network request, that are implemented asynchronously are not executed by the JavaScript engine itself, but they are handed over for execution to a specialised asynchronous I/O library. The library used by Node.js is called libuv.
* libuv maintains a pool of worker threads on which I/O tasks received from the JavaScript engine are executed. The default size of the thread pool is 4, the maximum size is 128, and it can be changed at startup time of Node.js by setting the UV_THREADPOOL_SIZE environment variable
* Node.js is actually very similar to the JavaScript runtime of a web browser. The biggest difference is probably that Node.js uses libuv, whereas web browser runtimes use browser-provided APIs for the asynchronous I/O tasks. The event loop works pretty much the same in Node.js and in web browser JavaScript runtimes.
* Note that the threads in the thread pool may block (for example, waiting for a disk access), but this doesn’t block the JavaScript engine which runs in its own thread. If all the threads in the thread pool are busy and new tasks from the JavaScript engine arrive, then these new tasks are simply queued up by libuv and they will be processed as soon as a worker thread becomes free.
* When the JavaScript engine passes an I/O task to libuv, it also registers the callback that is associated with this task with the runtime. This callback will then be executed when the task completes (we will see in a moment how this happens in detail). That means, each task passed to libuv must have a callback associated with it. This callback is the callback function that you pass as an argument to asynchronous functions.
* The event loop works in tandem with the event queue. The event queue is simply a queue of JavaScript functions. For clarity, let’s call the functions in the event queue events. When libuv completes a task, then the runtime puts the associated callback in the event queue.
* Now to the event loop: the event loop sits between the event queue and the JavaScript engine. Simply said, the job of the event loop is to “shovel” events from the event queue into the JavaScript engine for execution.
* If the JavaScript engine is currently already executing an event, then the event loop waits until the JavaScript engine completes the execution of this event.
* As soon as the JavaScript engine is idle, the event loop passes the event at the head of the event queue to the JavaScript engine. If the event queue is currently empty but there are still pending asynchronous tasks, then the event loop just waits until a new event is put into the event queue.

### References

[JavaScript Promises with Node.js](https://itnext.io/javascript-promises-with-node-js-e8ca827e0ea3)

[Understanding Asynchronous JavaScript](
https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)

### Videos

[Understanding the Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[How a JavaScript engine works](https://www.youtube.com/watch?v=p-iiEDtpy6I)
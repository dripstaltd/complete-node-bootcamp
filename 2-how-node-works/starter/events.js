const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Observers
myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Ben");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items in stock`);
});

// Emitters
myEmitter.emit("newSale", 9);

/// / / / / / / / / / / / / / / / / /

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);

  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😂");
});

server.on("close", () => {
  console.log("Server closed 🔒");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests....");
});

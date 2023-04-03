// asyncrnoize code;

const fetchData = () => {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!!');
        },1500);
    });
    return promise;
}

setTimeout(()=>{
    console.log('Timer is done!');
    fetchData()
        .then(text =>{
        console.log(text);
        return fetchData();
        })
        .then(text2=>{
        console.log(text2);
        });
},2000);

console.log('Hello!');
console.log('Hi!');

// ---------------- //

// requesting messages once a second from the server
const requestMessages = (person, callback) => {
    // request logic goes here
    let data = new Request("https://server.com", {
        method: "GET",
        body: person,
      });
    callback(data);
}

const createMessageTile = (name, message) => {
    // update the UI here
}

// ---------------------------------- //

// sending message to person
const sendMessage = (name, message, callback, callback2) => {
    callback(name, message);
    let data = new Request("https://server.com", {
        method: "POST",
        body: {
            name,
            message, 
        }
      });
      callback2(data.status);
}

const displayMessageSent = (status) => {
    if (status === 200) {
        console.log('Message has been sent');
    } else {
        console.log('Message failed to send. Try again?')
    }
}

const requestNewMessages = (name) => {
    requestMessages(name, createMessageTile);
}

const sendAMessage = (person, message) => {
    sendMessage("Harry", "What teams are playing today?", createMessageTile, displayMessageSent)

}

// ------------------- //
// app.js 
// requestNewMessages("Harry");
// sendAMessage("Harry", "What teams are playing today?");

 // ------------------ //
 // Promises //

 const requestUpdates = async (param1, param2) => {
    return new Promise((resolve, reject) => {
        let data = { status: 200 }
        if (data.status === 200) {
            resolve(param1)
        } else {
            reject(new Error(param2));
        }
    } );
 };

let updates = requestUpdates('foo', 'bar');
console.log(updates); // Promise <pending>

const asyncWrapper = async (param1, param2) => {
    console.log('Promise resolved to: ', await requestUpdates(param1, param2));
}
asyncWrapper('foo', 'bar'); // foo

 
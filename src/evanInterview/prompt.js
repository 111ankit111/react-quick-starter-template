//Implement a function that when a message is received, waits 5 seconds to see if any more messages from the same sender come in before sending the stack of messages to the client

// receiver("message1", "senderA");
// receiver("message2", "senderA");
// receiver("message3", "senderA");
// setTimeout(() => {
// 	receiver("message4", "senderA");
// }, 2000);
// setTimeout(() => {
// 	receiver("message5", "senderA");
// }, 5000);

const senderMap = new Map();
const TIMEOUT_DURATION = 5000;

function receiver(message, sender) {
  if (senderMap.has(sender)) {
    senderMap.set(sender, senderMap.get(senderMap).push(message));
  } else {
    senderMap.set(sender, [message]);
    const timeoutId = setTimeout(() => {
      sendToClient(sender, senderMap.get(senderMap));
      senderMap.delete(sender);
    }, TIMEOUT_DURATION);
  }
}

import EventEmitter from "node:events";

// Створюємо екземпляр EventEmitter
const chatEmitter = new EventEmitter();

const sendMessage = (username, message, emitter) => {
  emitter.emit('message', username, message);
};

// Реєструємо обробник для події 'message'
chatEmitter.on('message', (username, message) => {
  console.log(`${username}: ${message}`);
});

console.log('Чат розпочато. Очікування повідомлень...');

// Викликаємо функцію sendMessage кілька разів
sendMessage('Alice', 'Привіт усім!', chatEmitter);
sendMessage('Bob', 'Привіт, Alice!', chatEmitter);
sendMessage('Charlie', 'Всім привіт!', chatEmitter);
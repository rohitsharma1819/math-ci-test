function Chat() {
    this.chatCollection = new Set();
    this.chatCount = 0;
}

Chat.prototype.save = function (chatItem) {
    let item = { id: ++this.chatCount, msg: chatItem };
    this.chatCollection.add(item);
    return true;
}

Chat.prototype.get = function (id) {
    if (this.chatCollection.size <= 0) {
        return false;
    }

    return this.chatCollection.filter(item => item.id === id);
}

Chat.prototype.getAll = function () {
    return this.chatCollection;
}

Chat.prototype.getId = function () {
    return this.chatCount;
}

module.exports = new Chat();


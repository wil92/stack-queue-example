/**
 * @class queue
 * @description A simple queue class
 */
const queue = function () {
    this.headNode = null;
    this.tailNode = null;
};

/**
 * @method queue.prototype.add
 * @param value {*} value to be added to the queue
 */
queue.prototype.add = function (value) {
    if (this.headNode === null) {
        this.headNode = { value, previous: null };
        this.tailNode = this.headNode;
    } else {
        this.tailNode.previous = { value, previous: null };
        this.tailNode = this.tailNode.previous;
    }
}

/**
 * @method queue.prototype.remove
 * @returns {*} value of the removed node
 */
queue.prototype.remove = function () {
if (this.headNode === null) {
        return null;
    }
    const value = this.headNode.value;
    this.headNode = this.headNode.previous;
    return value;
}

/**
 * @method queue.prototype.peek
 * @returns {*} value of the head node
 */
queue.prototype.peek = function () {
    return this.headNode === null ? null : this.headNode.value;
}

module.exports = queue;

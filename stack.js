/**
 * @class stack
 * @description A simple stack class
 */
const stack = function () {
    this.headNode = null;
};

/**
 * @method stack.prototype.push
 * @param value {*} value to be added to the stack
 */
stack.prototype.push = function (value) {
    if (this.headNode === null) {
        this.headNode = { value, previous: null };
    } else {
        this.headNode = { value, previous: this.headNode };
    }
}

/**
 * @method stack.prototype.pop
 * @returns {*} value of the removed node
 */
stack.prototype.pop = function () {
    if (this.headNode === null) {
        return null;
    }
    const value = this.headNode.value;
    this.headNode = this.headNode.previous;
    return value;
}

/**
 * @method stack.prototype.peek
 * @returns {*} value of the head node
 */
stack.prototype.peek = function () {
    return this.headNode === null ? null : this.headNode.value;
}

module.exports = stack;

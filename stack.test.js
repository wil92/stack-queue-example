const stack = require('./stack');

describe('stack', () => {
    let s;

    beforeEach(() => {
        s = new stack();
    });

    it('should be empty when created', () => {
        expect(s.peek()).toBe(null);
    });

    it('should add an element to the stack', () => {
        s.push(1);
        expect(s.peek()).toBe(1);
    });

    it('should remove an element from the stack', () => {
        s.push(1);
        s.pop();
        expect(s.peek()).toBe(null);
    });

    it('should remove elements in the reverse order they were added', () => {
        s.push(1);
        s.push(2);
        s.push(3);
        expect(s.pop()).toBe(3);
        expect(s.pop()).toBe(2);
        expect(s.pop()).toBe(1);
    });

    it('should return null when removing from an empty stack', () => {
        expect(s.pop()).toBe(null);
    });

    it('should return null when peeking at an empty stack', () => {
        expect(s.peek()).toBe(null);
    });

    it('should return the head value without removing it', () => {
        s.push(1);
        s.push(2);
        expect(s.peek()).toBe(2);
        expect(s.peek()).toBe(2);
    });
});

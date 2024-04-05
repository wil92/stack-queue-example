const queue = require('./queue');

describe('queue', () => {
    let q;

    beforeEach(() => {
        q = new queue();
    });

    it('should be empty when created', () => {
        expect(q.peek()).toBe(null);
    });

    it('should add an element to the queue', () => {
        q.add(1);
        expect(q.peek()).toBe(1);
    });

    it('should remove an element from the queue', () => {
        q.add(1);
        q.remove();
        expect(q.peek()).toBe(null);
    });

    it('should remove elements in the order they were added', () => {
        q.add(1);
        q.add(2);
        q.add(3);
        expect(q.remove()).toBe(1);
        expect(q.remove()).toBe(2);
        expect(q.remove()).toBe(3);
    });

    it('should return null when removing from an empty queue', () => {
        expect(q.remove()).toBe(null);
    });

    it('should return null when peeking at an empty queue', () => {
        expect(q.peek()).toBe(null);
    });

    it('should return the head value without removing it', () => {
        q.add(1);
        q.add(2);
        expect(q.peek()).toBe(1);
        expect(q.peek()).toBe(1);
    });
});

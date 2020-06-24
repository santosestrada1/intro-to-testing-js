// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function(){
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function

describe( 'sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it ('should return the string "Hello, Pat!" when executed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it ('should return the string "Hello, World!" if input === True', function (){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it ('should return the string "Hello, World!" if input === False', function(){
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

// Unit Tests for isFive function

describe('isFive', function(){
    it ('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it ('should return true if the number 5 is passed as input', function(){
        expect(isFive(5)).toBe(true)
    });
    it ('should return true if the string "5" is passed as input', function(){
        expect(isFive("5")).toBe(true)
    });
    it ('should return false if input === false', function(){
        expect(isFive(false)).toBe(false)
    });
    it ('should return true if input === true', function(){
        expect(isFive(true)).toBe(false)
    });
})

// Unit Tests for isEven function
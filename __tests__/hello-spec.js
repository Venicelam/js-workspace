const hello = require('../hello');

it ('should returns hello', () => {
    expect(hello()).toBe("Hello");
});
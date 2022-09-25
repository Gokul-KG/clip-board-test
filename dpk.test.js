const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns always string type", () => {
    let trivialKey = deterministicPartitionKey();
    expect(typeof trivialKey).toBe('string')
    
    trivialKey = deterministicPartitionKey(1234);
    expect(typeof trivialKey).toBe('string')

    trivialKey = deterministicPartitionKey({});
    expect(typeof trivialKey).toBe('string')

    trivialKey = deterministicPartitionKey(new Date());
    expect(typeof trivialKey).toBe('string')
    trivialKey = deterministicPartitionKey(undefined);
    expect(typeof trivialKey).toBe('string')
  });

  it("Returns always string with leenth 128 exept no input given", () => {
    let trivialKey = deterministicPartitionKey();
    expect(trivialKey.length).toBe(1);
    
    trivialKey = deterministicPartitionKey(1234);
    expect(trivialKey.length).toBe(128);
    

    trivialKey = deterministicPartitionKey({});
    expect(trivialKey.length).toBe(128)
    

    trivialKey = deterministicPartitionKey(new Date());
    expect(trivialKey.length).toBe(128)
    
  });

  it("It should return same key for same input", () => {
    const val = 'abc'
    const trivialKey = deterministicPartitionKey(val);
    const newTrivialKey = deterministicPartitionKey(val);
    expect(trivialKey).toMatch(newTrivialKey);
  });



});

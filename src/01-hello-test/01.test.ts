import { mult, splitIntoWords, sum } from "./01";

let a: number;
let b: number;
let c: number;
let sentence: string;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3
    sentence = "Hello my friends";
})

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
})

test('multiply should be correct', () => {
    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into words should be correct', () => {

    //action
    const result = splitIntoWords(sentence);

    //expect result
    expect(result.length).toBe(3);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('my');
    expect(result[2]).toBe('friends');
})
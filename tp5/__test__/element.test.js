const arrayM=require("../element");

describe("Calculator tests", () => {
test("First element",()=>{
    expect(arrayM.first([3,3,4,5,2,1],2)).toStrictEqual([3,3]);
});
test("Last element",()=>{
    expect(arrayM.last([3,3,4,5,2,1],2)).toStrictEqual([2,1]);
});
describe("Tp3",()=>{
    test("echo n fois",()=>{
        expect(arrayM.echo_n_fois('hou',1)).toBe('hou');
    });
    test("echo n fois",()=>{
        expect(arrayM.echo_n_fois('hou',2)).toBe('houhou');
    });


})
});
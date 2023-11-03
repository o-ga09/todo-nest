describe("sample test", () => {
    test("add test", () => {
        expect(add(1,1)).toBe(2);
    });
});

function add(arg0: number, arg1: number): number {
    return arg0 + arg1;
}

import test from "./test.mjs";

/*
    Challenge: Implement the `sequence` function.

    The function calculates the Fibonacci sequence.
    - `sequence(n)` follows the rule: F(n) = F(n-1) + F(n-2)
    - Handles invalid inputs gracefully.
*/

//#region function -----------------------------------------------------------------
export function sequence(n) {
    if (typeof n !== "number" || !Number.isInteger(n) || n < 0) return null;

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Fibonacci Sequence function");

tests.isEqual(sequence(0), 0, "sequence(0) should return 0");
tests.isEqual(sequence(1), 1, "sequence(1) should return 1");
tests.isEqual(sequence(2), 1, "sequence(2) should return 1");
tests.isEqual(sequence(3), 2, "sequence(3) should return 2");
tests.isEqual(sequence(5), 5, "sequence(5) should return 5");
tests.isEqual(sequence(10), 55, "sequence(10) should return 55");
tests.isEqual(sequence(20), 6765, "sequence(20) should return 6765");
tests.isNotANumber(sequence(-1), "Negative input should return null");
tests.isNotANumber(sequence(1.5), "Non-integer input should return null");
tests.isNotANumber(sequence("5"), "String input should return null");

//#endregion

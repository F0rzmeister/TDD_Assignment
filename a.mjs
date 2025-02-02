import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinite number of parameters.
    It should return the product of the numbers, with the following constraints:

    1. If one or more parameters are not valid numbers, return NaN.
    2. Convert numeric strings to numbers before multiplying.
    3. If a parameter is Infinity or -Infinity, return the correct result.
    4. Handle edge cases like multiplying by 0 and NaN correctly.
*/

//#region function -----------------------------------------------------------------
export function multiply(...numbers) {
    if (numbers.length === 0) return 1;

    let product = 1;

    for (let num of numbers) {
        if (typeof num === "string" && !isNaN(num.trim())) {
            num = Number(num);
        }

        if (typeof num !== "number" || isNaN(num)) return NaN;

        if (!isFinite(num)) {
            if (product === 0) return NaN;
            return num > 0 ? Infinity : -Infinity;
        }

        product *= num;
    }

    return product;
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Multiply function");

tests.isEqual(multiply(2, 3, 4), 24, "2 * 3 * 4 should be 24");
tests.isEqual(multiply(2, "3", 4), 24, '2 * "3" * 4 should be 24');
tests.isNotANumber(multiply(2, "x", 4), 'Multiplying with "x" should return NaN');
tests.isEqual(multiply(Infinity, 2, -1), -Infinity, "Infinity * 2 * -1 should be -Infinity");
tests.isEqual(multiply(0, 3, 5), 0, "0 * 3 * 5 should be 0");
tests.isNotANumber(multiply(NaN, 2, 3), "Multiplying with NaN should return NaN");
tests.isEqual(multiply(), 1, "Multiplying no numbers should return 1");
tests.isEqual(multiply(5), 5, "Multiplying a single number should return itself");

//#endregion

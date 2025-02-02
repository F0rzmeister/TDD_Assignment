import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    - Returns "Too low" if guess < target.
    - Returns "Too high" if guess > target.
    - Returns "Correct!" if guess === target.
    - Returns null if either input is not a valid integer.
*/

//#region function -----------------------------------------------------------------
export function guessNumber(target, guess) {
    if (typeof target !== "number" || typeof guess !== "number" || !Number.isInteger(target) || !Number.isInteger(guess)) {
        return null;
    }

    if (guess < target) return "Too low";
    if (guess > target) return "Too high";
    return "Correct!";
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Guess Number function");

tests.isEqual(guessNumber(10, 5), "Too low", "guessNumber(10, 5) should return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "guessNumber(10, 15) should return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "guessNumber(10, 10) should return 'Correct!'");
tests.isNotANumber(guessNumber(10, "5"), "String input should return null");
tests.isNotANumber(guessNumber(null, 5), "Null input should return null");

//#endregion

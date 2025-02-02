import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single string parameter and:
    1. Returns null if the input is not a string.
    2. Trims whitespace.
    3. Capitalizes the first letter of each word.
    4. Returns an empty string if input is empty after trimming.
    5. Returns null if input contains special characters.
*/

//#region function -----------------------------------------------------------------
export function formatName(name) {
    if (typeof name !== "string") return null;
    name = name.trim();

    if (name.length === 0) return "";

    if (/[^a-zA-Z\s]/.test(name)) return null;

    return name
        .split(" ")
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Format Name function");

tests.isEqual(formatName("john doe"), "John Doe", '"john doe" should become "John Doe"');
tests.isEqual(formatName("  alice   "), "Alice", '"  alice   " should become "Alice"');
tests.isEqual(formatName("BOB smith"), "Bob Smith", '"BOB smith" should become "Bob Smith"');
tests.isEqual(formatName(""), "", 'An empty string should return ""');
tests.isEqual(formatName("   "), "", 'Whitespace-only input should return ""');
tests.isNotANumber(formatName(123), "Non-string input should return null");
tests.isNotANumber(formatName("john@doe"), 'String with "@" should return null');

//#endregion

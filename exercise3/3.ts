/**
 * Modify the regular expressions to match the sentence/comment.
 */

if (
    "This sentense does not start with a digit like 1,2,3,4".match(
        new RegExp("^[a-zA-Z0|5-9 ][A-Za-z0-9 ,_]*$")
    )
) {
    throw new Error("1");
}

if (
    "This sentense does end with a digit like 1,2,3,4".match(new RegExp("^[a-zA-Z0-9 ][A-Za-z1-4 ,_]*$"))
) {
    throw new Error("2");
}

//Match every m that is NOT followed by a letter from j to z
var rex = new RegExp("^m[a-g]");
if ("ma".match(rex)[1] != "m" || "mz".match(rex) != null) {
    throw new Error("3");
}

var isSubsequence = function (s, t) {
    let x = 0;
    let y = 0;
    for (y = 0; y < t.length && x < s.length; y++)
        if (t[y] === s[x]) {
            x++
        }
    return (s.length === x)
};


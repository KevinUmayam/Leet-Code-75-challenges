var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        let currentSChar = s[i];
        let currentTChar = t[i];

        if (!sMap[currentSChar]) {
            sMap[currentSChar] = currentTChar
        }
        if (!tMap[currentTChar]) {
            tMap[currentTChar] = currentSChar
        }
        if (sMap[currentSChar] != currentTChar || tMap[currentTChar] != currentSChar) {
            return false
        }
    }
    return true
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    dict = {}

    for (const ch of s) {
        if (dict[ch] === undefined) {
            dict[ch] = 1
        } else {
            dict[ch] += 1
        }
    }

    for (const ch of t) {
        if(dict[ch] === undefined) {
            return false
        } else {
            dict[ch] -= 1
            if (dict[ch] < 0) {
                return false
            }
        }
    }

    for (const key in dict) {
        if (dict[key] !== 0) return false
    }

    return true
};

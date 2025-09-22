/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   if (strs.lenght === 0) return [[""]]

   const map = new Map();

    for (const str of strs) {
        const key = str.split("").sort().join("")
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str) 
    }

    return Array.from(map.values())
};

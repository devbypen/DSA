class SimpleHashSet {
    constructor(size = 16) {
        this.buckets = new Array(size);
        this.size = size;
    }

    _hash(value) {
        const valueArray = value.toString().split("");
        let hash = 0;
        for (const v of valueArray) {
            hash = (hash * 31 + v.charCodeAt(0)) % this.size;
        };
        return hash;
    }

    add(value) {
        const index = this._hash(value);

        if (!this.buckets[index]){
            this.buckets[index] = [];
        }

        if (!this.buckets[index].includes(value)) {
            this.buckets[index].push(value);
        }
    }

    contains(value) {
        const index = this._hash(value);

        if (!this.buckets[index]) {
            return false;
        }

        const bucket = this.buckets[index];

        for (const i of bucket) {
            if (i === value) {
                return true;
            }
        }

        return false;
    }

    remove(value) {
        const index = this._hash(value);

        if (!this.buckets[index]) {
            return "No value match to remove"
        }

        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] === value) {
                const removedElement= bucket.splice(i, 1)
                this.size--
                return removedElement
            }
        }

        return "No value match to remove"
    }

    print() {
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    process.stdout.write(this.buckets[i][j] + '-');
                }
            }
        }

        console.log("null")
    }
}

const set = new SimpleHashSet();

set.add("apple");
set.add("banana");
set.add("cherry");
set.add("apple"); // duplicate ignored

set.print(); // HashSet: apple, banana, cherry

console.log("Contains apple:", set.contains("apple"));  // true
console.log("Contains orange:", set.contains("orange")); // false

console.log("Removed data:", set.remove("banana"));
set.print(); // HashSet: apple, cherry


class SimpleHashMap {
    constructor(size = 16) {
        this.buckets = new Array(size);
        this.size = size;
    }

    _hash(key) {
        const keyArray = key.toString().split("");
        let hash = 0;
        for (const v of keyArray) {
            hash = (hash * 31 + v.charCodeAt(0)) % this.size;
        };
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);

        if (!this.buckets[index]){
            this.buckets[index] = [];
        }

        const bucket = this.buckets[index]
        
        for (const pair of bucket) {
            if (pair.key ===key) {
                pair.value = value;
                return;
            }
        }

        bucket.push({ key, value});
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        if (!bucket) {
            return undefined;
        }

        for (const pair of bucket) {
            if(pair.key === key) {
                return pair.value
            }
        }
        return undefined;
    }

    has(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        if (!bucket) {
            return false;
        }

        for(const pair of bucket) {
            if (pair.key === key) {
                return true 
            }
        }

        return false
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        if (!bucket) {
            return "No value match to remove"
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key){
                return bucket.splice(i, 1)
            }
        }
        return "No value match to remove"
    }

    print() {
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];

            if (bucket && bucket.length > 0) {
                const pairs = bucket.map(pair => `${pair.key}: ${pair.value}`)
                    .join(", ");
                console.log(`[${i}] -> ${pairs}`);
            }
        }

        console.log("null")
    }
}
const map = new SimpleHashMap();

map.set("apple", 10);
map.set("banana", 20);
map.set("cherry", 30);
map.set("banana", 25); // cập nhật giá trị

map.print();

console.log("Get apple:", map.get("apple"));  // 10
console.log("Has cherry:", map.has("cherry")); // true
console.log("Has orange:", map.has("orange")); // false

map.remove("banana");
map.print();


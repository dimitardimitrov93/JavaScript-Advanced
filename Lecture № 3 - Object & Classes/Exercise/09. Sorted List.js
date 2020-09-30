function classList() {

    class List {
        constructor(collection = []) {
            this.collection = collection.sort((a, b) => a - b);
            this.size = this.collection.length;
        }
    
        add(element) {
            this.collection.push(element);
            const tempCollection = this.collection.sort((a, b) => a - b);
            this.collection = tempCollection;
            this.size++;
            return this.collection;
        }
    
        remove(index) {
            if (index >= 0 && index <= this.collection.length - 1) {
                this.collection.splice(index, 1);
                const tempCollection = this.collection.sort((a, b) => a - b);
                this.collection = tempCollection;
                this.size--;
                return this.collection;
            } else {
                throw new Error('Invalid index!');
            }
        }
    
        get(index) {
            if (this.collection.length > 0 && index >= 0 && index <= (this.collection.length - 1)) {
                return this.collection[index];
            } else {
                throw new Error('Invalid index!');
            }
        }
    }
    
    // Test functionality of the class:

    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.size);
    console.log(list.get(1)); 
    list.remove(1);
    console.log(list.get(-1));
}

classList();
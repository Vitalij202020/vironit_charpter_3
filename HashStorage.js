class HashStorage {
    constructor(cocktails) {
        this.cocktails = cocktails
    }

    addValue(key, value) {
        this.cocktails = {...this.cocktails, [key]: value}
    }
    
    getValue(key) {
        return this.cocktails[key]
    }
    
    deleteValue(key) {
        delete this.cocktails[key]
    }
    
    getKeys() {
        return Object.keys(this.cocktails)
    }
}


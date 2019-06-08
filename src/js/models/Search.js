import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch(error) {
            alert(error);
        }
        
    };

}

// Suryansh.builder - 3f16d274aeed31f61d37926ad8f2dc07
// patelsuryansh - f6288db0b7498508926b90bda4d07c37
// disposable #1 - c49a6fd94d270758380e991d262a24c4
// disposable #2 - 1fe49c28fee72abac2e2d2a032e47215
// disposable #3 - ff3b0ffa61a4b532d486c04d37927200 
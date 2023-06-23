import data from './data.json';

function SortAZPrice() {
    
    data.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
    });
}

export default SortAZPrice
import data from './data.json';

function SortAZCategory() {
    
    data.sort((a, b) => {
        if (a.category < b.category) {
            return 1;
        }
        if (a.category > b.category) {
            return -1;
        }
    });
}

export default SortAZCategory
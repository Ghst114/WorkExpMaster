import data from './data.json'

function SortZA() {
    data.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return -1;
        }
    });
}

export default SortZA
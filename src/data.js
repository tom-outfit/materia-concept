import axios from 'axios';

async function loadData(url) {
    try {
        let response = await axios.get(url);
        return response
    } catch (error) {
    }
}

export default loadData;
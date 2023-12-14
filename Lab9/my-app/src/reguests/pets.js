import axios from 'axios';
export async function getAllPets(limit) {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/general?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
export async function getPetDetails(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/pets/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

export async function getAllColors(limit) {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/pets/color`);
        return response.data;
    } catch (error) {
        console.error('Error fetching colors:', error);
        throw error;
    }
}

export async function getAllAges(limit) {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/pets/age`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sizes:', error);
        throw error;
    }
}

export async function getFilteredProducts(color, size) {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/pets/general?color=${color}&size=${size}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching pets:', error);
        throw error;
    }
}
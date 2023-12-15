import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/pets';

export const getAllPets = () => {
    return axios.get(`${BASE_URL}`);
};

export const getPetDetails = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

const pets = getAllPets()

// const getAllColors = pets.filter(pet => targetColors.some(color => pet.color.includes(color)));
//
//
// const getAllAges = pets.filter(pet => pet.age === targetAge);
function getAllPetsByAge(pets, targetAge) {
    return pets.filter(pet => pet.age === targetAge);
}

function getAllPetsByColors(pets, targetColors) {
    return pets.filter(pet => targetColors.some(color => pet.color.includes(color)));
}

export const updateStone = (id, data) => {
    return axios.put(`${BASE_URL}/${id}, data`);
};

export const deleteStone = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

function getFilteredProducts(targetColors, targetAge) {
    // const getAllAges = getAllPetsByAge(targetAge);
    // const getAllColors = getAllPetsByColors(color);

    return pets.filter(pet => {
        const hasMatchingColor = targetColors.some(color => pet.color.includes(color));
        const hasMatchingAge = pet.age === targetAge;

        return hasMatchingColor && hasMatchingAge;
    });
}
// import axios from 'axios';
// export async function getAllProducts(limit) {
//     try {
//         const response = await axios.get(`http://127.0.0.1:8000/product/general`, { params: { limit: limit } });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         throw error;
//     }
// }
// export async function getProductDetails(id) {
//     try {
//         const response = await axios.get(`http://127.0.0.1:8000/product/${id}/`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching product:', error);
//         throw error;
//     }
// }
//
// export async function getAllColors(limit) {
//     try {
//         const response = await axios.get(`http://127.0.0.1:8000/product/color`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching colors:', error);
//         throw error;
//     }
// }
//
// export async function getAllSizes(limit) {
//     try {
//         const response = await axios.get(`http://127.0.0.1:8000/product/size`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching sizes:', error);
//         throw error;
//     }
// }
//
// export async function getFilteredProducts(color, size) {
//     try {
//         const response = await axios.get(`http://127.0.0.1:8000/product/general`, { params: { color: color, size: size } });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         throw error;
//     }
// }
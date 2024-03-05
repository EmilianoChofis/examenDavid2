import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getBooks = async () => {
    try {
        const response = await axios.get(API_URL+'/books');
        console.log(response.data.result)
        return response.data.result;
    }catch (error){
        console.error(error);
    }
}

export const saveBook = async (book) => {
    try {
        const response = await axios.post(API_URL+'/books', book);
        console.log(response.data)
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export const deleteBook = async (id) => {
    try {
        const response = await axios.put(API_URL+'/books/status');
        console.log(response.data)
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export const orderByAuthor = async () => {
    try {
        const response = await axios.get(API_URL+'/books/order/author');
        console.log(response.data)
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export const orderByName = async () => {
    try {
        const response = await axios.get(API_URL+'/books/order/publicationDate');
        console.log(response.data)
        return response.data;
    }catch (error){
        console.error(error);
    }
}

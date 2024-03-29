import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getBooks = async () => {
    try {
        const response = await axios.get(API_URL+'/books');
        return response.data.result;
    }catch (error){
        console.error(error);
    }
}

export const saveBook = async (book) => {
    book.publicationDate = changeDateFormat(book.publicationDate);
    try {
        const response = await axios.post(API_URL+'/books', book);
        console.log(response.data)
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export const deleteBook = async (id) => {
    console.log(id )
    id = {id: id}
    try {
        const response = await axios.put(API_URL+'/books/status', id);
        console.log(response.data)
        return response.data;
    }catch (error){
        console.error(error);
    }
}

export const orderByAuthor = async () => {
    try {
        const response = await axios.get(API_URL+'/books/order/author');
        console.log(response.data.result)
        return response.data.result;
    }catch (error){
        console.error(error);
    }
}

export const orderByPublication = async () => {
    try {
        const response = await axios.get(API_URL+'/books/order/publicationDate');
        return response.data.result;
    }catch (error){
        console.error(error);
    }
}

export const orderByImage = async () => {
    try {
        const response = await axios.get(API_URL+'/books/filter/image');
        return response.data.result;
    }catch (error){
        console.error(error);
    }

}

const changeDateFormat =(fecha)=>{
    //reemplaza - por / para que la fecha sea reconocida por el navegador
    fecha = fecha.replace(/-/g, '/');
    return fecha;
}
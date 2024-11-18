
import { Brand } from "@/interfaces/brand";
//import { Brand } from '../interfaces/brand';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://signa-backend.onrender.com/brands';

export const fetchBrands = async (): Promise<Brand[]> => {
    try {
        const response = await axios.get<Brand[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al encontrar marcas:", error);
        throw error;
    }
};

export const fetchBrand = async (id: number): Promise<Brand> => {
    try {
        const response = await axios.get<Brand>(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al encontrar la marca con id ${id}:`, error);
        throw error;
    }
};

export const createBrand = async (brand: Brand): Promise<Brand> => {
    try {
        const response = await axios.post<Brand>(API_URL, brand);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log('holaa')
        console.error("Error al crear la marca:", error);
        throw error;
    }
};

export const updateBrand = async (id: number, brand: Omit<Brand, 'id'>): Promise<Brand> => {
    try {
        const response = await axios.put<Brand>(`${API_URL}/${id}`, brand);
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar la marca con id ${id}:`, error);
        throw error;
    }
};

export const deleteBrand = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Error eliminando la marca con id ${id}:`, error);
        throw error;
    }
};
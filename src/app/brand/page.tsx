'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchBrands, deleteBrand } from '../../services/brand-service';
import BrandList from '../../components/brand-list';
import { Brand } from '../../interfaces/brand';

const HomePage = () => {
    const [brands, setBrands] = useState<Brand[]>([]);

    useEffect(() => {
        loadBrands();
    }, []);

    const loadBrands = async () => {
        const data = await fetchBrands();
        console.log(data, 'data---')
        setBrands(data);
    };

    const handleDelete = async (id: number) => {
        await deleteBrand(id);
        loadBrands();
    };

    const handleUpdate = (updatedBrand: Brand) => {
        setBrands(brands.map(brand => brand.id === updatedBrand.id ? updatedBrand : brand));
    };

    return (
        <div style={{ display: "grid"}}>
            <h1 className='title'>Registro de marca</h1>
            <Link className="button-create" href="/brand/create"> + Nuevo registro</Link>
            <BrandList brands={brands} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );
};

export default HomePage;

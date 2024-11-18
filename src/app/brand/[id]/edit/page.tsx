'use client';
import { useState, useEffect } from 'react';
import { Brand } from '@/interfaces/brand';
import { fetchBrand, updateBrand } from '../../../../services/brand-service';
import BrandForm from '../../../../components/brand-form';
import { useParams, useRouter } from 'next/navigation';

const EditBrand: React.FC = () => {
    //Inicializaciones, manejo de estados y obtencion de parametros de url
    const [brand, setBrand] = useState<Brand | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const router = useRouter();

    const brandId = typeof params.id === 'string' ? params.id : undefined;

    // se ejecuta cuando cambia el id en la url
    useEffect(() => {
        const fetchData = async () => {
            if (brandId) {
                try {
                    setLoading(true);
                    const fetchedBrand = await fetchBrand(parseInt(brandId));
                    setBrand(fetchedBrand);
                } catch (error) {
                    setError('Error fetching brand data');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [brandId]);

    const handleSubmit = async (updatedBrand: Brand) => {
        try {
            await updateBrand(updatedBrand.id, updatedBrand);
            router.push(`/brand/${updatedBrand.id}`);
        } catch (error) {
            console.error('Error updating brand:', error);
        }
    };

    if (loading) {
        return <div>Cargando información...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!brand) {
        return <div>No se encontro la marca, informa a equipo de tecnología</div>;
    }

    return (
        <div>
            <h1>Editar Marca</h1>
            <BrandForm onSubmit={handleSubmit} initialData={brand} />
        </div>
    );
};

export default EditBrand;
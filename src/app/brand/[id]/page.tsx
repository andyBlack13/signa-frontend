'use client';
import { useState, useEffect } from 'react';
import { Brand } from '@/interfaces/brand';
import { fetchBrand } from '../../../services/brand-service';
import styles from './styles.module.css';
import { useParams, useRouter } from 'next/navigation';

const BrandDetail: React.FC = () => {
    const [brand, setBrand] = useState<Brand | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const router = useRouter();

    const brandId = typeof params.id === 'string' ? params.id : undefined;

    useEffect(() => {
        const fetchData = async () => {
            if (brandId) {
                try {
                    setLoading(true);
                    const fetchedBrand = await fetchBrand(parseInt(brandId, 10));
                    setBrand(fetchedBrand);
                } catch (error) {
                    setError('Error al obtener la marca, intenta con un ID que si exista o informa a tecnología');  // Manejo de error
                } finally {
                    setLoading(false);
                }
            }
        };

        if (brandId) {
            fetchData();
        }
    }, [brandId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!brand) {
        return <div>Marca no encontrada</div>;
    }

    const goToEdit = () => {
        router.push(`/brand/${brand.id}/edit`);
    };   

    const goToList= () => {
        router.push(`/brand`);
    };    

    return (
        <div className={styles.detailsContainer}>
            <h1>Detalle de la Marca</h1>
            <div className={styles.infoContainer}>
                <p><strong>Marca:</strong> <span>{brand.brand}</span></p>
                <p><strong>Titular:</strong> <span>{brand.owner}</span></p>
                <p><strong>Estado:</strong> <span className={brand.status === 'active' ? styles.active : styles.inactive}>{brand.status === 'active' ? 'Activo' : 'Inactivo'}</span></p>
                <p><strong>Creado el:</strong> <span>{new Date(brand.created_at).toLocaleDateString()}</span></p>
                <p><strong>Última actualización:</strong> <span>{new Date(brand.updated_at).toLocaleDateString()}</span></p>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonBack} onClick={goToList}>Atrás</button>
                <button className={styles.buttonEdit} onClick={goToEdit}>Editar</button>
            </div>
        </div>
    );
};

export default BrandDetail;
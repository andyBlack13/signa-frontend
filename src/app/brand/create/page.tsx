'use client'
import { useRouter } from 'next/navigation';
import BrandForm from '../../../components/brand-form';
import { createBrand } from '../../../services/brand-service';
import { Brand } from '@/interfaces/brand';
import styles from "../../page.module.css";

const CreateBrandPage = () => {
    const router = useRouter();

    const handleCreate = async (data: Brand) => {
        await createBrand(data);
        router.push('/brand');
    };

    return (
        <div className={styles.divForm}>
            <h1>Registrar Marca</h1>
            <BrandForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreateBrandPage;

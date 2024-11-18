import { useState, useEffect } from 'react';
import { Brand } from '../interfaces/brand';
import styles from './styles.module.css';

type BrandFormProps = {
    onSubmit: (data: Brand) => void;
    initialData?: Brand;
};

const BrandForm: React.FC<BrandFormProps> = ({ onSubmit, initialData }) => {
    const [step, setStep] = useState(1);
    const [id, setId] = useState(initialData?.id || 0);
    const [brand, setBrand] = useState(initialData?.brand || '');
    const [owner, setOwner] = useState(initialData?.owner || '');
    const [status, setStatus] = useState(initialData?.status || 'active');

    useEffect(() => {
        if (initialData) {
            setId(initialData.id);
            setBrand(initialData.brand);
            setOwner(initialData.owner);
            setStatus(initialData.status || 'active');
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const createdAt = initialData ? initialData.created_at : new Date().toISOString();
        const updatedAt = new Date().toISOString();
        onSubmit({ id, brand, owner, status, created_at: createdAt, updated_at: updatedAt });
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
    const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <form className={`${styles.form} ${styles.div}`} onSubmit={handleSubmit}>
            <div>
                <div className={styles.containerSteps}>
                    <div className={step >= 1 ? styles.circleActive : styles.circle}>
                        <h2>1</h2>
                    </div>
                    <div className={styles.line}></div>
                    <div className={step >= 2 ? styles.circleActive : styles.circle}>
                        <h2>2</h2>
                    </div>
                    <div className={styles.line}></div>
                    <div className={step === 3 ? styles.circleActive : styles.circle}>
                        <h2>3</h2>
                    </div>
                </div>

                {/* Paso 1 */}
                {step === 1 && (
                    <div className={styles.containerSteps}>
                        <label>Marca a registrar</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </div>
                )}

                {/* Paso 2 */}
                {step === 2 && (
                    <div className={styles.containerSteps}>
                        <div className={styles.inputsLeft}>
                            <label>Titular de la marca</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={owner}
                                onChange={(e) => setOwner(e.target.value)}
                                required
                            />
                            <div>
                                <label>Estado</label>
                                <select className={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="active">Activo</option>
                                    <option value="inactive">Inactivo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Paso 3 */}
                {step === 3 && (
                    <div className={`${styles.containerSteps} ${styles.gridJustify}`}>
                        <h3>Resumen</h3>
                        <label>Marca: 
                            <input
                                className={styles.input}
                                type="text"
                                value={brand}
                                disabled
                                style={{color: 'grey'}}
                            />
                        </label>

                        <label>Titular: 
                            <input
                                className={styles.input}
                                type="text"
                                value={owner}
                                disabled
                                style={{color: 'grey'}}
                            />
                        </label>

                        <label>Estado: 
                            <input
                                className={styles.input}
                                type="text"
                                value={status === 'active' ? 'Activo' : 'Inactivo'}
                                disabled
                                style={{color: 'grey'}}
                            />
                        </label>

                        {/* <p><strong>Marca:</strong> {brand}</p>
                        <p><strong>Titular:</strong> {owner}</p>
                        <p><strong>Estado:</strong> {status === 'active' ? 'Activo' : 'Inactivo'}</p> */}
                        <br />
                        <p>¿Deseas confirmar esta información?</p>
                    </div>
                )}

                {/* botones de pasos*/}
                <div className={styles.containerSteps} style={{ marginTop: '20px' }}>
                    {step > 1 && (
                        <button className={styles.buttonSave} type="button" onClick={handleBack}>
                            ⇦ Atrás
                        </button>
                    )}
                    {step < 3 && (
                        <button className={styles.buttonSave} type="button" onClick={handleNext}>
                            Siguiente ⇨
                        </button>
                    )}
                    {step === 3 && (
                        <button className={styles.buttonSave} type="submit">
                            {initialData ? 'Actualizar' : 'Crear'}
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
};

export default BrandForm;
import { useState } from "react";
import { Brand } from "../interfaces/brand";
import styles from "./styles.module.css";
import Modal from "./modal";
import { useRouter } from "next/navigation";

interface BrandListProps {
    brands: Brand[];
    onDelete: (id: number) => void;
    onUpdate: (updatedBrand: Brand) => void;
}

const BrandList: React.FC<BrandListProps> = ({ brands, onDelete, onUpdate }) => {
    const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
    const [updatedBrandData, setUpdatedBrandData] = useState<Brand | null>(null);
    const [status, setStatus] = useState('active');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const handleEdit = (brand: Brand) => {
        setEditingBrand(brand);
        setUpdatedBrandData({ ...brand });
        setIsModalOpen(true);
    };

    const handleDetail = (brand: Brand) => {
        router.push(`/brand/${brand.id}`);
    };

    const handleUpdate = () => {
        if (updatedBrandData) {
            onUpdate(updatedBrandData);
            setEditingBrand(null);
            setIsModalOpen(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Brand) => {
        if (updatedBrandData) {
        setUpdatedBrandData({
            ...updatedBrandData,
            [field]: e.target.value,
        });
        }
    };

    return (
        <div style={{ overflowX: "auto" }} className={styles.div}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Propietario</th>
                        <th>Estado</th>
                        <th>Fecha de Creación</th>
                        <th>Fecha de Actualización</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand, i) => (
                        <tr key={i}>
                            <td>{brand.id}</td>
                            <td>{brand.brand}</td>
                            <td>{brand.owner}</td>
                            <td>{brand.status}</td>
                            <td>{new Date(brand.created_at).toLocaleString()}</td>
                            <td>{new Date(brand.updated_at).toLocaleString()}</td>
                            <td>
                                <button className={styles.buttonDelete} onClick={() => onDelete(brand.id)}>Eliminar</button>
                                <button className={styles.button} onClick={() => handleEdit(brand)}>Actualizar</button>
                                <button className={styles.buttonDetail} onClick={() => handleDetail(brand)}>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3 className={styles.h3}>Editar Marca</h3>
                <div className={styles.containerModalForm}>
                    <div>
                        <label>
                            Marca:
                            <input
                            className={styles.input}
                            type="text"
                            value={updatedBrandData?.brand || ""}
                            onChange={(e) => handleInputChange(e, "brand")}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Propietario:
                            <input
                            className={styles.input}
                            type="text"
                            value={updatedBrandData?.owner || ""}
                            onChange={(e) => handleInputChange(e, "owner")}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Estado:
                            <select
                            className={styles.select}
                            value={updatedBrandData?.status || status}
                            onChange={(e) => setStatus(e.target.value)}
                            >
                            <option value="active">Activo</option>
                            <option value="inactive">Inactivo</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <button className={styles.buttonCancel} onClick={() => setIsModalOpen(false)}>
                        Cancelar
                    </button>
                    <button className={styles.buttonSave} onClick={handleUpdate}>
                        Guardar
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default BrandList;

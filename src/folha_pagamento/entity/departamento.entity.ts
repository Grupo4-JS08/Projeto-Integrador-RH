import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne } from "typeorm"; // Importação Typerom 
import { tb_Funcionario } from "../../funcionario/entity/funcionario.entity";  // Importação tb_Funcionario

@Entity()
export class tb_Departamento {
    @PrimaryColumn()
    id: number; // ID: 1

    @Column() 
    nome_departamento: string; // TI

    @Column()
    descricao: string; // uso de sistemas computacionais para processar, armazenar, recuperar e transmitir informações

    @ ManyToOne(() => tb_Funcionario, funcionario => funcionario.Departamento, {onDelete: 'CASCADE'})
    funcionario: tb_Funcionario;
}
/* eslint-disable */
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm'; // Importação Typerom
import { tb_Funcionario } from '../../funcionario/entity/funcionario.entity'; // Importação tb_Funcionario
@Entity({ name: 'tb_departamento' })
export class Departamento {
  @PrimaryColumn()
    id: number; // ID: 1

    @Column()
    nome_departamento: string;

    @Column()
    descricao: string; 

    @OneToMany(() => tb_Funcionario, (funcionario)=> funcionario.departamento)  // Representa um relacionamento de Muitos para um.
    funcionario: tb_Funcionario[];
    

}

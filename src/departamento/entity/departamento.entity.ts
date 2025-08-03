/* eslint-disable */
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'; // Importação Typerom
import { Funcionarios } from '../../funcionario/entity/funcionario.entity'; // Importação tb_Funcionario
@Entity({ name: 'tb_departamento' })

export class Departamento {
  @PrimaryGeneratedColumn()
    id: number; // ID: 1

    @Column()
    nome_departamento: string;

    @Column()
    descricao: string;

    @OneToMany(() => Funcionarios, (funcionarios)=> funcionarios.departamento)  // Representa um relacionamento de Muitos para um.
    funcionarios: Funcionarios[];

}

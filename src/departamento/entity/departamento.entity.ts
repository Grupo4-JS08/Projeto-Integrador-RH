/* eslint-disable */
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm'; // Importação Typerom
import { tb_Funcionario } from '../../funcionario/entity/funcionario.entity'; // Importação tb_Funcionario
@Entity({ name: 'tb_departamento' })
export class Departamento {
  @PrimaryColumn()
    id: number; // ID: 1

    @Column()
    horas_trabalhadas: number; // 8,48 horas

    @Column('decimal')
    descontos: number; // 500

    @Column('decimal')
    salarioLiquido: number; // 2.000

    @Column('decimal')
    salario_bruto // 2.500

    @OneToMany(() => tb_Funcionario, (funcionario)=> funcionario.departamento)onDelete: 'CASCADE'  // Representa um relacionamento de Muitos para um.
    departamento: Departamento[];
    funcionario: any;

}

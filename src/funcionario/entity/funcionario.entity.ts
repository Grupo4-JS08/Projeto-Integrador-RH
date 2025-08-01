import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"; // Importação Typerom 
import { FuncionarioModule } from "../module/funcionario.module";
import { tb_Departamento } from "src/folha_pagamento/entity/departamento.entity";
@Entity()
export class tb_Funcionario {
    @PrimaryGeneratedColumn()
    id: number; // ID: 1

    @Column()
    nome_completo: string; // Raul

    @Column()
    hora_trabalhadas: number; // 10 horas

    @Column()
    bonus: number; // 5 Horas de bonus

    @Column()
    descontos: number; // R$500 de descontos

    @Column()
    salario_bruto: number; // R$2500

    @Column()
    salario_liquido: number; // R$:2000

    @OneToMany(() => tb_Departamento, departamento => departamento.funcionario, { cascade: true})
    Departamento: tb_Departamento[];
}

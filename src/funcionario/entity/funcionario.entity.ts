/* eslint-disable */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"; // Importação Typerom

import { Departamento } from '../../departamento/entity/departamento.entity';

@Entity({ name: 'tb_funcionarios' })
export class Funcionarios {
    @PrimaryGeneratedColumn()
    id: number; // ID: 1

    @Column()
    nome_completo: string; // Raul

    @Column()
    horas_trabalhadas: number; // 10 horas

    @Column()
    bonus: number; // 1000 reais de bônus

    @Column()
    descontos: number; // R$500 de descontos

    @Column()
    salario_bruto: number; // R$2500

    @Column()
    salario_liquido: number; // R$:2000

    @ManyToOne(() => Departamento, (departamento) => departamento.funcionarios, {
        onDelete: "CASCADE",
    }
)

    @JoinColumn({name: 'departamento'})
    departamento: Departamento;
    salario_base: any;
    
}

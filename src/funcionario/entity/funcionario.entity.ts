import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"; // Importação Typerom 
import { tb_FolhaPagamento } from "src/folha_pagamento/entity/folha_pagamento.entity";
import { funcionarioModule } from "../module/funcionario.module";
@Entity()
export class tb_Funcionario {
    @PrimaryGeneratedColumn()
    id: number; // ID: 1

    @Column()
    nomeCompleto: string; // Raul

    @Column('decimal')
    cpf: number // 513.157.478-76

    @Column()
    cargo: string; // Dev

    @Column('decimal')
    salario: number; // 1.500

    @Column()
    departamento: string; // TI

    @ManyToOne(() => tb_Funcionario, funcionario => funcionario.folhasPagamento, {onDelete: 'CASCADE'} ) // Representa um relacionamento de Muitos para um.
    folhasPagamento: any;
    funcionario: tb_Funcionario[];

}

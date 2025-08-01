import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne } from "typeorm"; // Importação Typerom 
import { tb_Funcionario } from "../../funcionario/entity/funcionario.entity";  // Importação tb_Funcionario

@Entity()
export class tb_FolhaPagamento {
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

    @ManyToOne(() => tb_Funcionario, funcionario => funcionario.folhasPagamento, {onDelete: 'CASCADE'} ) // Representa um relacionamento de Muitos para um.
    folhasPagamento: any;
    funcionario: tb_Funcionario;
}
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { tb_Funcionario } from "../entity/funcionario.entity";
@Injectable()
export class FuncionarioService{
    constructor(
        @InjectRepository(tb_Funcionario) // Conecta Tabela ao banco via Typeorm
        private funcionarioRepository: Repository<tb_Funcionario>
    ) {}

    // Criar um novo Funcionário
    async create(funcionario: tb_Funcionario): Promise<tb_Funcionario> {
        return this.funcionarioRepository.save(funcionario);
    }

    // Listar todos os Funcionários
    async findAll(): Promise<tb_Funcionario[]> {
        return this.funcionarioRepository.find({relations: ['folhasPagamento']});
    }

    // Listar Funcionário por (ID)
    async findById(id: number): Promise<tb_Funcionario>{
        const funcionario = await this.funcionarioRepository.findOne({
            where: { id },
            relations: ['folhasPagamento'],
        });

        if (!funcionario) {
            throw new NotFoundException(`Funcionário com ID: ${id} não encontrado.`);
        }

        return funcionario;

    }

    // Atualizar Funcionário
    async update(id: number, funcionario: tb_Funcionario): Promise<tb_Funcionario>{
        await this.funcionarioRepository.update(id, funcionario);
        return this.findById(id);
    }

    // Deletar um Funcionário
    async delete(id: number): Promise<void> {
        await this.funcionarioRepository.delete(id);
    }
}
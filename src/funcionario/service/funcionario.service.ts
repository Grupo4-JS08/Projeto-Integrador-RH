/* eslint-disable */
import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Funcionarios } from "../entity/funcionario.entity";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { DepartamentoService } from "../../departamento/service/departamento.service";

@Injectable()
export class FuncionariosService {
    
    constructor(
        @InjectRepository(Funcionarios) // Conecta Tabela ao banco via Typeorm
        private funcionariosRepository: Repository<Funcionarios>,
        private departamentoService: DepartamentoService
    ) { }

    // Criar um novo Funcionário
    async create(funcionarios: Funcionarios): Promise<Funcionarios> {
        return this.funcionariosRepository.save(funcionarios);
    }

    // Listar todos os Funcionários
    async findAll(): Promise<Funcionarios[]> {
        return await this.funcionariosRepository.find({ relations: ['departamento'] });
    }

    // Listar Funcionário por (ID)
    async findById(id: number): Promise<Funcionarios> {

        const funcionarios = await this.funcionariosRepository.findOne({
            where: { id },
            relations: ['departamento'] 
        });

        if (!funcionarios) {
            throw new HttpException('Funcionário não encontrado.', HttpStatus.NOT_FOUND);
        }

        return funcionarios;

    }

    // Atualizar Funcionário
    async update(id: number, funcionarios: Funcionarios): Promise<Funcionarios> {
        await this.funcionariosRepository.update(id, funcionarios);
        return this.findById(id);
    }

    // Deletar um Funcionário
    async delete(id: number): Promise<void> {
        await this.funcionariosRepository.delete(id);
    }

    calcularSalarioLiquido(id: number): any {
        throw new Error('Method not implemented.');
    }
}

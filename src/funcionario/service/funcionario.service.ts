/* eslint-disable */
import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Funcionarios } from "../entity/funcionario.entity";
import { DepartamentoService } from "../../departamento/service/departamento.service";

@Injectable()
export class FuncionariosService {
    constructor(
        @InjectRepository(Funcionarios)
        private funcionariosRepository: Repository<Funcionarios>,
        private departamentoService: DepartamentoService
    ) {}

    // Criar um novo Funcionário
    async create(funcionarios: Funcionarios): Promise<Funcionarios> {
        const funcionarioCriado = await this.funcionariosRepository.save(funcionarios);

        // Calcula o salário líquido automaticamente após criação
        await this.calcularSalarioLiquido(funcionarioCriado.id, {});

        // Retorna com os valores atualizados
        return this.findById(funcionarioCriado.id);
    }

    // Calcular salário líquido
    async calcularSalarioLiquido(
        id: number,
        dadosCalculo: {
            salarioBase?: number | string;
            horas_trabalhadas?: number | string;
            bonus?: number | string;
            descontos?: number | string;
        }
    ): Promise<{ mensagem: string; valor: number }> {
        const funcionario = await this.funcionariosRepository.findOne({
            where: { id },
            relations: ['departamento']
        });

        if (!funcionario) {
            throw new NotFoundException('Funcionário não encontrado');
        }

        // Pega os dados do banco
        const salarioBase = funcionario.salario_bruto || 0;
        const bonus = funcionario.bonus || 0;
        const descontos = funcionario.descontos || 0;
        const horas = funcionario.horas_trabalhadas || 160;

        // Calcula valor da hora e salário bruto
        const valor_hora = salarioBase / 160;
        const salario_bruto = valor_hora * horas;

        // Calcula salário líquido
        const salario_liquido = salario_bruto + bonus - descontos;

        // Atualiza o funcionário com os valores calculados
        Object.assign(funcionario, {
            salario_bruto: salario_bruto,
            salario_liquido: salario_liquido
        });

        // Salva no banco
        await this.funcionariosRepository.save(funcionario);

        return {
            mensagem: 'Salário líquido calculado com sucesso',
            valor: salario_liquido
        };
    }

    // Listar todos os Funcionários
    async findAll(): Promise<Funcionarios[]> {
        return await this.funcionariosRepository.find({
            relations: ['departamento']
        });
    }

    // Listar Funcionário por ID
    async findById(id: number): Promise<Funcionarios> {
        const funcionario = await this.funcionariosRepository.findOne({
            where: { id },
            relations: ['departamento']
        });

        if (!funcionario) {
            throw new HttpException('Funcionário não encontrado.', HttpStatus.NOT_FOUND);
        }

        return funcionario;
    }

    // Atualizar Funcionário
    async update(id: number, funcionarios: Funcionarios): Promise<Funcionarios> {
        await this.funcionariosRepository.update(id, funcionarios);

        // Recalcula salário líquido após atualização
        await this.calcularSalarioLiquido(id, {});

        return this.findById(id);
    }

    // Deletar um Funcionário
    async delete(id: number): Promise<void> {
        await this.funcionariosRepository.delete(id);
    }
}

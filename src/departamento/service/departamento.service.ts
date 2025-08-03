/* eslint-disable */
import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionarios } from '../../funcionario/entity/funcionario.entity';
import { Departamento } from '../entity/departamento.entity';
import { truncate } from 'node:fs';
@Injectable()
export class DepartamentoService {
  funcionariosRepository: any;
  departamentoRepository: any;
  constructor(

  ) {}

    // Método para calcular o salário líquido
  private calcularSalarioLiquido(
    salarioBruto: number,
    bonus: number,
    descontos: number,
  ): number {
    return salarioBruto + bonus - descontos;
  }
// Criar um novo Funcionário
  async create(funcionarios: Funcionarios): Promise<Funcionarios> {
    funcionarios.salario_liquido = this.calcularSalarioLiquido(
      funcionarios.salario_bruto,
      funcionarios.bonus,
      funcionarios.descontos,
    );
    return this.funcionariosRepository.save(funcionarios);
  }

  // Listar todos os Funcionários
  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find({ relations: {funcionarios: true} });
  }

  // Atualizar Funcionário
  async update(
    id: number,
    funcionarios: Funcionarios,
  ): Promise<Funcionarios> {
    funcionarios.salario_liquido = this.calcularSalarioLiquido(
      funcionarios.salario_bruto,
      funcionarios.bonus,
      funcionarios.descontos,
    );
    await this.funcionariosRepository.update(id, funcionarios);
    return this.findById(id);
  }
  // Listar Funcionário por (ID)
  async findById(id: number): Promise<Funcionarios> {
    const funcionarios = await this.funcionariosRepository.findOne({
      where: { id },
      relations: {departamento: true}
    });

    if (!funcionarios) {
      throw new HttpException('Funcionário não encontrado.',HttpStatus.NOT_FOUND);
    }

    return funcionarios;
  }
  // Deletar um Funcionário
  async delete(id: number): Promise<void> {
    await this.funcionariosRepository.delete(id);
  }
}
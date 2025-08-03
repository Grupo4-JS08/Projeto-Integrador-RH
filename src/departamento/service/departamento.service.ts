/* eslint-disable */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from '../entity/departamento.entity';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ) {}

  // Criar Departamento
  async create(departamento: Departamento): Promise<Departamento> {
    return await this.departamentoRepository.save(departamento);
  }

  // Listar todos os Departamentos
  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find({
      relations: ['funcionarios']
    });
  }

  // Buscar Departamento por ID
  async findById(id: number): Promise<Departamento> {
    const departamento = await this.departamentoRepository.findOne({
      where: { id },
      relations: ['funcionarios']
    });

    if (!departamento) {
      throw new HttpException('Departamento não encontrado!', HttpStatus.NOT_FOUND);
    }

    return departamento;
  }

  // Atualizar Departamento
  async update(id: number, departamento: Departamento): Promise<Departamento> {
    await this.departamentoRepository.update(id, departamento);
    return this.findById(id);
  }

  // Deletar Departamento
  async delete(id: number): Promise<void> {
    await this.departamentoRepository.delete(id);
  }
}

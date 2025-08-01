/* eslint-disable */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Departamento } from './../entity/departamento.entity';

@Injectable()
export class departamentoService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ) {}

  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find({
      relations: {
        funcionario: true,
      },
    });
  }

  async findById(id: number): Promise<Departamento> {
    const departamento = await this.departamentoRepository.findOne({
      where: {
        id,
      },
      relations: {
        funcionario: true,
      },
    });

    if (!departamento)
      throw new HttpException('Despartamento não encontrado!', HttpStatus.NOT_FOUND);

    return departamento;
  }


  async create(departamento: Departamento): Promise<Departamento> {
    return await this.departamentoRepository.save(departamento);
  }

  async update(departamento: Departamento): Promise<Departamento> {
    await this.findById(departamento.id);
    return await this.departamentoRepository.save(departamento);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.departamentoRepository.delete(id);
  }
}

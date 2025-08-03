/* eslint-disable*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoService } from '../service/departamento.service';
import { DepartamentoController } from '../controller/departamento.controller';
import { Departamento } from './../entity/departamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento])],
  providers: [DepartamentoService],
  controllers: [DepartamentoController],
  exports: [TypeOrmModule],
})
export class DepartamentoModule {}

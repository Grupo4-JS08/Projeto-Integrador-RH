/* eslint-disable*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoService } from '../service/departamento.service';
import { departamentoController } from '../controller/departamento.controller';
import { Departamento } from './../entity/departamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento])],
  providers: [DepartamentoService],
  controllers: [departamentoController],
  exports: [TypeOrmModule],
})
export class departamentoModule {}

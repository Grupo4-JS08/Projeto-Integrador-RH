/* eslint-disable*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { departamentoService } from '../service/departamento.service';
import { departamentoController } from '../controller/departamento.controller';
import { Departamento } from './../entity/departamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento])],
  providers: [departamentoService],
  controllers: [departamentoController],
  exports: [TypeOrmModule],
})
export class departamentoModule {}

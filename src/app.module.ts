/* eslint-disable */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from './departamento/entity/departamento.entity';
import { FuncionariosModule } from './funcionario/module/funcionario.module';
import { Funcionarios } from './funcionario/entity/funcionario.entity';
import { DepartamentoModule } from './departamento/module/departamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '250319',
      database: 'db_rh',
      entities: [Departamento, Funcionarios],
      synchronize: true,
    }),
    FuncionariosModule,
    DepartamentoModule
  ],
})
export class AppModule {}

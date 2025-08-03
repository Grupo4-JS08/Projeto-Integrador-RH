/* eslint-disable */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from './departamento/entity/departamento.entity';
import { funcionarioModule } from './funcionario/module/funcionario.module';
import { tb_Funcionario } from './funcionario/entity/funcionario.entity';
import { departamentoModule } from './departamento/module/departamento.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2479',
      database: 'db_rh',
      entities: [Departamento, tb_Funcionario],
      synchronize: true,
    }),
    funcionarioModule,
    departamentoModule
  ],
})
export class AppModule {}

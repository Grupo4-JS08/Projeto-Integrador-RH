import { Module  } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tb_Departamento } from "./folha_pagamento/entity/departamento.entity";
import { FuncionarioModule } from "./funcionario/module/funcionario.module";
import { tb_Funcionario } from "./funcionario/entity/funcionario.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh',
      entities: [tb_Departamento, tb_Funcionario],
      synchronize: true,
    }),
    // DepartamentoModule,
    FuncionarioModule
  ],
  
})

export class AppModule {}
import { Module  } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tb_FolhaPagamento } from "./folha_pagamento/folha_pagamento.entity";
import { tb_Funcionario } from "./funcionario/funcionario.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh',
      entities: [tb_FolhaPagamento, tb_Funcionario],
      synchronize: true,
    }),
  ],
})

export class AppModule {}
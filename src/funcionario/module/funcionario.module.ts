import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tb_Funcionario } from "../entity/funcionario.entity";
import { FuncionarioService } from "../service/funcionario.service";
import { FuncionarioController } from "../controller/funcionario.controller";

@Module({
    imports: [TypeOrmModule.forFeature([tb_Funcionario])],
    providers: [FuncionarioService],
    controllers: [FuncionarioController],
    exports: [TypeOrmModule],
})
export class FuncionarioModule {}
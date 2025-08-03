/* eslint-disable */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Funcionarios } from "../entity/funcionario.entity";
import { FuncionariosService } from "../service/funcionario.service";
import { FuncionariosController } from "../controller/funcionario.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Funcionarios])],
    providers: [FuncionariosService],
    controllers: [FuncionariosController],
    exports: [FuncionariosService],
})
export class FuncionariosModule {}

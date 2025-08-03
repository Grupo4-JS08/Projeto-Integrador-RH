/* eslint-disable */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Funcionarios } from "../entity/funcionario.entity";
import { FuncionariosService } from "../service/funcionario.service";
import { FuncionariosController } from "../controller/funcionario.controller";
import { DepartamentoModule } from "../../departamento/module/departamento.module";

@Module({
    imports: [TypeOrmModule.forFeature([Funcionarios]), DepartamentoModule],
    providers: [FuncionariosService],
    controllers: [FuncionariosController],
    exports: [FuncionariosService],
})
export class FuncionariosModule {}

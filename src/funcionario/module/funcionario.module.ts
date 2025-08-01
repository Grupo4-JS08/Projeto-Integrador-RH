import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { tb_Funcionario } from "../entity/funcionario.entity";


@Module({
    imports: [TypeOrmModule.forFeature([tb_Funcionario])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule],
})
export class funcionarioModule {}
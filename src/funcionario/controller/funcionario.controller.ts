/* eslint-disable */
import{
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { tb_Funcionario } from '../entity/funcionario.entity';
import { FuncionarioService } from '../service/funcionario.service';

@Controller('/funcionario')
export class FuncionarioController{
    constructor(private readonly FuncionarioService: FuncionarioService){}

@Post() // Criar Funcionario
@HttpCode(HttpStatus.CREATED)
create(@Body() funcionario: tb_Funcionario): Promise<tb_Funcionario>{
    return this.FuncionarioService.create(funcionario);
}

@Get() //Pesquisar Tabela Funcionario
@HttpCode(HttpStatus.OK)
findAll(): Promise<tb_Funcionario[]>{
    return this.FuncionarioService.findAll();
}

@Get('/:id') // Pesquisa por Id
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<tb_Funcionario>{
    return this.FuncionarioService.findById(id);
}

@Put('/:id')
@HttpCode(HttpStatus.OK)
Update(@Param('id',ParseIntPipe) id: number,@Body()funcionario:tb_Funcionario,):
Promise<tb_Funcionario>{
    return this.FuncionarioService.update(id,funcionario);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
Delete(@Param('id',ParseIntPipe) id: number): Promise<void>{
    return this.FuncionarioService.delete(id);
}

}

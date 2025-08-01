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
    constructor(private readonly funcionarioService: FuncionarioService){}

@Post() // Criar Funcionario
@HttpCode(HttpStatus.CREATED)
create(@Body() funcionario: tb_Funcionario): Promise<tb_Funcionario>{
    return this.funcionarioService.create(funcionario); 
}

@Get() //Pesquisar Tabela Funcionario
@HttpCode(HttpStatus.OK)
findAll(): Promise<tb_Funcionario[]>{
    return this.funcionarioService.findAll();
}

@Get('/:id') // Pesquisa por ID
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<tb_Funcionario>{
    return this.funcionarioService.findById(id);
}

@Put('/:id') // Atualizar por ID
@HttpCode(HttpStatus.OK)
Update(@Param('id',ParseIntPipe) id: number,@Body()funcionario:tb_Funcionario,):
Promise<tb_Funcionario>{
    return this.funcionarioService.update(id,funcionario);
}

@Delete('/:id') // Deletar por ID
@HttpCode(HttpStatus.NO_CONTENT)
Delete(@Param('id',ParseIntPipe) id: number): Promise<void>{
    return this.funcionarioService.delete(id);
}

}
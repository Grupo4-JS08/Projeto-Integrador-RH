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
import { Funcionarios } from '../entity/funcionario.entity';
import { FuncionariosService } from '../service/funcionario.service';

@Controller('/funcionarios')
export class FuncionariosController{
    constructor(private readonly FuncionariosService: FuncionariosService){}

@Post() // Criar Funcionario
@HttpCode(HttpStatus.CREATED)
create(@Body() funcionarios: Funcionarios): Promise<Funcionarios>{
    return this.FuncionariosService.create(funcionarios);
}

@Get() //Pesquisar Tabela Funcionario
@HttpCode(HttpStatus.OK)
findAll(): Promise<Funcionarios[]>{
    return this.FuncionariosService.findAll();
    
/*}
@Get(':id/salario-liquido' //  Busca salario liquido
findByid(@Param('id') id: number): Promise<any> {
  return this.FuncionarioService.findById(id);*/
  
}
@Get('/:id') // Pesquisa por Id
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionarios>{
    return this.FuncionariosService.findById(id);
}

@Put('/:id')
@HttpCode(HttpStatus.OK)
Update(@Param('id',ParseIntPipe) id: number,@Body()funcionarios:Funcionarios,):
Promise<Funcionarios>{
    return this.FuncionariosService.update(id,funcionarios);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
Delete(@Param('id',ParseIntPipe) id: number): Promise<void>{
    return this.FuncionariosService.delete(id);
}

}

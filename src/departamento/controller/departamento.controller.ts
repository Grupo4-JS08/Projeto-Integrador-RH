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
import { Departamento } from '../entity/departamento.entity';
import {DepartamentoService} from '../service/departamento.service';

@Controller ('/departamento')
export class DepartamentoController {
    constructor ( private readonly DepartamentoService: DepartamentoService) {}

@Post () // criar departamento
@HttpCode (HttpStatus.CREATED)
create(@Body () departamento: Departamento): Promise <Departamento>{
    return this.DepartamentoService.create(departamento);
}

@Get () // Pesquisar funcionário
@HttpCode(HttpStatus.OK)
findAll(): Promise<Departamento[]>{
    return this.DepartamentoService.findAll();
}

@Get('/:id') // Pesquisar por id
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<Departamento>{
    return this.DepartamentoService.findById(id);
}

@Put()
@HttpCode(HttpStatus.OK)
update(@Body() departamento: Departamento): Promise<Departamento> {
    return this.DepartamentoService.update(departamento);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number){
    return this.DepartamentoService.delete(id);
}
}


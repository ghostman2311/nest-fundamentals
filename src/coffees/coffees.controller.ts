import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
    return 'This is coffee endpoint';
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `This action will fetch this id ${id}`
    }

    @Post()
    create(@Body('Name') body){
        return body;
    }


}

import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response){
     //response.status(200).send('This is coffee endpoint');
     return 'This is Coffee endpoint'
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `This action will fetch this id ${id}`
    }

    @Post()
    //@HttpCode(HttpStatus.GONE)
    create(@Body('Name') body){
        return body;
    }


}

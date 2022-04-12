import { Body, Controller, Delete, Get, Param, Patch, Post,Query,Res  } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() sadasdsad){
        const {limit, offset} = sadasdsad
     return `This is Coffee endpoint. Limit: ${limit}, Offset: ${offset}`
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `This action will fetch this id ${id}`
    }

    @Post()
    create(@Body('Name') body){
        return body;
    }

    @Patch(":id")
    update(@Param('id') id:string, @Body() body )
    {
        return `This method updates the #${id}`
    }

    @Delete(":id")
    remove(@Param('id') id:string){
        return `This method removes the #${id}`
    }


}

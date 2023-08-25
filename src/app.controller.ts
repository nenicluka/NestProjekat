import { Controller, Get, Post, Put,Delete,Param,Body, ParseUUIDPipe, ParseEnumPipe} from '@nestjs/common';
import { Console } from 'console';
import{PrevoznoSredstvoTip, TipPutovanja, data}from 'src/data'
import{v4 as uuid }from"uuid"
import { AppService } from './app.service';
import { createPutovanjeDto, updatePutovanjeDto } from './dtos/report.dto';

@Controller('putovanje/:type')
export class AppController
{
  constructor(    
    private readonly appService:AppService    )
  {}

  @Get()
  getPutovanja(@Param('type', new ParseEnumPipe(TipPutovanja))type:string)
  {
    console.log(type);
    const putovanjeTip=type==="Rekreacija"?TipPutovanja.REKREACIJA:TipPutovanja.POSLOVNO
    return this.appService.getPutovanja(putovanjeTip);   
  }

  @Get(':mesto')
  getPutovanjaPoMestu(@Param('type', new ParseEnumPipe(TipPutovanja))type:TipPutovanja,
                      @Param('mesto')mesto:string )
  {
    const putovanjeTip=type==="Rekreacija"?TipPutovanja.REKREACIJA:TipPutovanja.POSLOVNO
    return this.appService.getPutovanjaPoMestu(mesto,type);
   }
   
  @Post()
  createPutovanje( @Body(){type,mesto,brojDana,cena,
    prevoznoSredstvo}:createPutovanjeDto)
    {
      return this.appService.createPutovanje({type,mesto,brojDana,cena,
        prevoznoSredstvo});
    
  }

  @Put(':id')
  updatePutovanje(@Param('id',ParseUUIDPipe)id:string,
  @Body()body:updatePutovanjeDto)
  {
   return this.appService.updatePutovanje(id,body);
  }

  @Delete(':id')
  deletePutovanje(@Param('id',ParseUUIDPipe) id:string)
  {
      return this.appService.deletePutovanje(id);
  }

}
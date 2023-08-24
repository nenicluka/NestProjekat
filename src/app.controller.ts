import { Controller, Get, Post, Put,Delete,Param,Body} from '@nestjs/common';
import { AppService } from './app.service';
import { Console } from 'console';
import{PrevoznoSredstvoTip, TipPutovanja, data}from 'src/data'
import{v4 as uuid }from"uuid"

@Controller('putovanje/:type')
export class AppController
{
  @Get()
  getPutovanja(@Param('type')type:string)
  {
    console.log(type);
    const putovanjeTip=type==="Rekreacija"?TipPutovanja.REKREACIJA:TipPutovanja.POSLOVNO
    return data.putovanje.filter((putovanje)=>putovanje.type===putovanjeTip)
  }

  @Get(':mesto')
  getPutovanjaPoMestu(@Param('type')type:string,
                      @Param('mesto')mesto:string )
  {
    const putovanjeTip=type==="Rekreacija"?TipPutovanja.REKREACIJA:TipPutovanja.POSLOVNO
    return data.putovanje.filter((putovanje)=>putovanje.type===putovanjeTip) 
    .find((putovanje)=>putovanje.mesto===mesto);
   }
   
  @Post()
  createPutovanje( @Body(){type,mesto,brojDana,cena,
    prevoznoSredstvo}:{ 

    type:string;
    mesto:string;
    brojDana:number;
    cena:number;
    prevoznoSredstvo:PrevoznoSredstvoTip})
  {
    const novoPutovanje={
      id:uuid(),
      type:type==='Rekreacija'?TipPutovanja.REKREACIJA:TipPutovanja.POSLOVNO,
      mesto,
      brojDana,
      cena,
      datumPolaska:new Date(),
      datumPovratka:new Date(),
      prevoznoSredstvo
    }
    data.putovanje.push(novoPutovanje);
    
    return novoPutovanje;
  }

  @Put(':id')
  updatePutovanje(@Param('id')id:string,
  @Body()body:{ 
    type:TipPutovanja;
    mesto:string;
    brojDana:number;
    cena:number;
    prevoznoSredstvo:PrevoznoSredstvoTip})
  {
    const putovanjeZaUpdate = data.putovanje.find((putovanje)=>putovanje.id===id);
    if(!putovanjeZaUpdate)
      return "Putovanje sa datim ID ne postoji!";
    const putovanjeIndex = data.putovanje.findIndex((putovanje)=>putovanje.id===putovanjeZaUpdate.id);
    data.putovanje[putovanjeIndex]=
    {
      ...data.putovanje[putovanjeIndex],
      ...body
    }

    return data.putovanje[putovanjeIndex];
  }

  @Delete(':id')
  deletePutovanje(@Param('id') id:string)
  {
    const indexBrisanja = data.putovanje.findIndex((putovanje)=>putovanje.id===id);
    if(indexBrisanja===-1)
       return "Putovanje sa zadatim indexom nije pronadjeno";
    data.putovanje.splice(indexBrisanja,1);  
    return "Brisanje je uspesno!";
  }

}
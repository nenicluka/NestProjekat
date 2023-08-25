import { Injectable } from "@nestjs/common/decorators";
import { TipPutovanja, data } from "./data";
import { PrevoznoSredstvoTip } from "./data";
import{v4 as uuid }from"uuid"

interface Telo{
  type:TipPutovanja;
  mesto:string;
  brojDana:number;
  cena:number;
  prevoznoSredstvo:PrevoznoSredstvoTip
}

interface UpdateTelo{
  type?:TipPutovanja;
  mesto?:string;
  brojDana?:number;
  cena?:number;
  prevoznoSredstvo?:PrevoznoSredstvoTip
}


@Injectable()
export class AppService{
  getPutovanja(type:TipPutovanja)
  {
    return data.putovanje.filter((putovanje)=>putovanje.type===type)
  }

  getPutovanjaPoMestu(mesto:string, type:TipPutovanja)
  {
    return data.putovanje.filter((putovanje)=>putovanje.type===type) 
    .find((putovanje)=>putovanje.mesto===mesto);
  }

  createPutovanje({type,mesto,brojDana,cena,prevoznoSredstvo}:Telo)
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

  updatePutovanje(id:string,body:UpdateTelo)
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

  deletePutovanje(id:string)
  {
    const indexBrisanja = data.putovanje.findIndex((putovanje)=>putovanje.id===id);
    if(indexBrisanja===-1)
       return "Putovanje sa zadatim indexom nije pronadjeno";
    data.putovanje.splice(indexBrisanja,1);  
    return "Brisanje je uspesno!";
  }
}

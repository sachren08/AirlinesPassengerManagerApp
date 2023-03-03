import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class DataService {
   
    dataEmitter = new Subject<any>();

    raiseDataEmitterEvent(data: any) {
        this.dataEmitter.next(data);
    }

   
}
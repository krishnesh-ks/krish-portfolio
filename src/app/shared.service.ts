import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSource = new BehaviorSubject<string>("");
  data$ = this.dataSource.asObservable();
  private dataSource2 = new BehaviorSubject<boolean>(false);
  data2$ = this.dataSource2.asObservable();
  private dataSource3 = new BehaviorSubject<string>("");
  data3$ = this.dataSource3.asObservable();
  constructor() { }

  updateData(newData: string) {
    this.dataSource.next(newData);
  }
  updateTheme(newData: boolean) {
    this.dataSource2.next(newData);
  }
  updatePass(newData: string) {
    this.dataSource3.next(newData);
  }
}

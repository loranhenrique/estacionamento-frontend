import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingBehavior: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public pegarLoadingStatus(): Observable<boolean> {
    return this.loadingBehavior.asObservable();
  }

  public ligar(): void {
    this.loadingBehavior.next(true);
  }

  public desligar(): void {
    this.loadingBehavior.next(false);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'bra-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() loading: boolean;
}

/*
 * В Angular своя система определения изменений.
 * Из-за того, что по умолчанию стоит не самая эффективная модель,
 * необходимо в Angular установить ChangeDetection: OnPush — то есть компоненты будут
 * обновляться при изменении @Input() а также изменения могут быть вызваны явно, с помощью сервиса ChangeDetectionRef.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent  {
  constructor() {}
  public showThis = false;
  public status = true;
  username = 'username'
  state = false
}



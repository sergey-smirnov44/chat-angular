import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';

import * as fromStore from '../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  @Input() message: Message[]
  mess: Subscription
  fieldSearch: any;
  keyUp$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

  ngOnInit(): void {

    this.keyUp$.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    )
      .subscribe((data) => {

        if (data.toString().length  > 2 )
         {this.store.dispatch(FromEntityChannel.getValueSearch({ searchValue: data }))}
        else {
          this.store.dispatch(FromEntityChannel.getValueSearch({ searchValue: '' }))
        }
      });
  };
}



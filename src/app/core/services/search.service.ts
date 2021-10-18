import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  searchFieldChanged(value: string) {
    console.log(value)
  }
}

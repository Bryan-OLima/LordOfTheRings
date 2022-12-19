import { Component, EventEmitter, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Character } from '../DTOs/lordoftherings.type';
import { LordOfTheRingsService } from '../services/lord-of-the-rings.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  dataSource: Character[] = [];
  dataSearch: Character[] = [];
  @Output() data = new EventEmitter().emit(this.dataSource);

  displayedColumns: string[] = [
    'name', 
    'gender', 
    'race', 
    'wikiUrl'
  ]

  constructor(
    public service: LordOfTheRingsService
  ){
  }

  ngOnInit(){
    this.getCharacter();
  }
  
  getCharacter(){
    this.service.getCharacters()
      .subscribe({
        next: (result:any) => {
          this.dataSource = result.docs;
        },
        error: () => {
          console.log('não foi possível pegar os dados');
        }
      });
  }

  searchCharacter(event: Event): void{
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.dataSearch = this.dataSource;

    this.dataSource = this.dataSearch.filter((d:any) => {
      return d.name.toLowerCase().includes(value)
    });
  }

  cleanSearch(){
    return this.dataSearch = [];
  }
}

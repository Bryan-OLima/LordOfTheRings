import { Component, OnInit } from '@angular/core';
import { LordOfTheRingsService } from '../services/lord-of-the-rings.service';
import { Character } from '../DTOs/lordoftherings.type';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // searchCharacter = ''
  dataSource!: any;
  dataSearch!: any;
  ngOnInit(): void {
  }

  searchCharacter(event: Event): void{
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.dataSearch = this.dataSource.filteR((d:any) => {
      return d.name.toLowerCase().includes(value)
    })
  }

  receiveData(event: Event){
    console.log(event);
    this.dataSource = event;
  }
}

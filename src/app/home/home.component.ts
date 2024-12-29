import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface TickerInterface {
  symbol: string;
  price_24h: number;
  volume_24h: number;
  last_trade_price: number;
}

let TICKER_DATA = [];

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatTableModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private dataService: DataService) {}
  displayedColumns: string[] = [
    'symbol',
    'price_24h',
    'volume_24h',
    'last_trade_price',
  ];
  dataSource = [];
  loading = false;

  fetchData() {
    this.loading = true;
    console.log('clicked');

    this.dataService.getTickers().subscribe((data: []) => {
      TICKER_DATA = data;
      this.dataSource = TICKER_DATA;
      console.log(this.dataSource);
      this.loading = false;
    });
  }
}

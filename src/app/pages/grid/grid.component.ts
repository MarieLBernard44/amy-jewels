import { Component, OnInit } from '@angular/core';
import { HEXAPATTERN } from '../../patterns/perles-mock';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  plume = HEXAPATTERN;
  rows: any[];
  perles: any[];
  lignesperles: any[];
  i: number;
  color: string;

  constructor() {
  }

  ngOnInit() {
    this.generate(this.i);
  }

  generate(i: number) {
    this.rows = this.plume.row;
  }

  setColor(event) {
    this.color = event.target.style.background;
    console.log(this.color);
  }

  colorize(event) {
    event.target.style.background = this.color;
  }

}

  /*generate(rows, cells) {
      const container = document.createElement('div');
      container.className = 'container';
      for (const r = 0; r < rows; r++) {
        const row = container.appendChild(document.createElement('div'));
        row.className = 'row';
        if (r % 2 !== 0) {
          row.style.margin = '0 0 0 5px';
        }
        for (const c = 0; c < cells; c++) {
          const cell = row.appendChild(document.createElement('div'));
          cell.className = 'cell';
          // cell.addEventListener('click', colorize, false);
        }
      }
      document.getElementById('grid').innerHTML = '';
      document.getElementById('grid').appendChild(container);
    }

    /*function setColor(event) {
      color = event.target.style.backgroundColor;
    }
    
    function draw() {
      var x = parseInt(document.getElementById('absciss').value);
      var y = parseInt(document.getElementById('ordinate').value);
      generate(y, x);
    }
    function colorize(event) {
      event.target.style.backgroundColor = color;
    }
    draw();*/


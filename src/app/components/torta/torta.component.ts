import { Component } from '@angular/core';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styles: []
})
export class TortaComponent {

    // Pie
    public pieChartLabels: string[] = ['Asado', 'Canelones', 'Paella', 'Pollo a la Aceituna', 'Caquita'];
    public pieChartData: number[] = [300, 500, 100, 80, 12];
    public pieChartType: string = 'pie';
   
    // events
    public chartClicked(e: any): void {
      console.log(e);
    }
   
    public chartHovered(e: any): void {
      console.log(e);
    }

}

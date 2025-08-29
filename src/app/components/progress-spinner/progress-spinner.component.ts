import {Component, HostListener} from '@angular/core';



@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  diameter: number = 100;

  ngOnInit(): void {
    this.updateDiameter();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDiameter();
  }

  updateDiameter() {
    const width = window.innerWidth;

    if (width >= 1200) {
      this.diameter = 600;
    } else if (width >= 768) {
      this.diameter = 200;
    } else {
      this.diameter = 100;
    }
  }
}

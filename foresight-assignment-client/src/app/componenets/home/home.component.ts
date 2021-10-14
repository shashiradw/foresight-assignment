import { Component, HostListener, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef;

  //Add point clicked
  addPointClicked : boolean=false;
  private ctx!: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.canvas.nativeElement.width=window.innerWidth;
    this.canvas.nativeElement.height=window.innerHeight;
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  
  onMouseClick(event: any){

    if(this.addPointClicked){
      console.log("Clicked canvas", this.canvas);
    //this.ctx.fillRect(event.x, event.y, 100, 100);

    this.ctx.fillStyle = 'red';
    // const square = new Square(this.ctx);
    this.ctx.strokeRect(event.x, event.y, 145, 145);
    this.addPointClicked=false;
    }
  }

  addPoint(event: any){
    this.addPointClicked=true;
  }

}

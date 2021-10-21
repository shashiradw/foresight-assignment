import { Component, HostListener, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Triangle } from 'src/app/models/triangle/triangle.model';
import { Circle } from 'src/app/models/circle/circle.model';
import { PolygonService } from 'src/app/services/polygon/polygon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private polygonService: PolygonService) { }

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

    console.log("Clicked canvas", event.x,event.y);

    if(this.addPointClicked){
      console.log("Clicked canvas", event.x,event.y);

      let point: [number,number] =[event.x,event.y];


      this.polygonService.drawPolygon(point).subscribe(
        (polygon)=>{
          console.log(polygon['polygon']['coordinates'][0]['x']);

          this.ctx.beginPath();
          this.ctx.moveTo(polygon['polygon']['coordinates'][1]['x'], polygon['polygon']['coordinates'][1]['y']);
          this.ctx.lineTo(polygon['polygon']['coordinates'][0]['x'], polygon['polygon']['coordinates'][0]['y']);
          this.ctx.lineTo(polygon['polygon']['coordinates'][3]['x'], polygon['polygon']['coordinates'][3]['y']);
          this.ctx.lineTo(polygon['polygon']['coordinates'][2]['x'], polygon['polygon']['coordinates'][2]['y']);
          //this.ctx.lineTo(event.x+100, event.y-100);
          this.ctx.closePath();
          this.ctx.stroke();

        }
      );

  
      

  
    //this.ctx.fillRect(event.x, event.y, 100, 100);

    // this.ctx.fillStyle = 'red';
    // // const square = new Square(this.ctx);
    // // this.ctx.beginPath();
    // // this.ctx.moveTo(event.x, event.y);
    // // this.ctx.lineTo(event.x+100, event.y+100);
    // // this.ctx.lineTo(event.x+100, event.y-100);
    // // this.ctx.closePath();
    // // this.ctx.stroke();
    // // this.ctx.fill();
    // // this.ctx.strokeRect(event.x, event.y, 145, 145);
    // this.addPointClicked=false;
    }
  }

  addPoint(event: any){
    this.addPointClicked=true;
  }

}

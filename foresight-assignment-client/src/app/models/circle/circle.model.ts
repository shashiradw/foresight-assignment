export class Circle {
    a: [number, number];
    r: number;

    constructor(a:[number, number],r: number){
        this.a=a;
        this.r=r;
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.arc(this.a[0], this.a[1], this.r,0, 2 * Math.PI);
        ctx.stroke();
    }
}

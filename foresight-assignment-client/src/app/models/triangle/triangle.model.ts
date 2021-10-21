export class Triangle {
    a: [number, number];
    b: [number, number];
    c: [number, number];

    constructor(a:[number, number],b:[number, number],c:[number, number]){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.moveTo(this.a[0], this.a[1]);
        ctx.lineTo(this.b[0], this.b[1]);
        ctx.lineTo(this.c[0], this.c[1]);
        ctx.closePath();
        ctx.stroke();
    }





}

export class Rectangle {
    a: [number, number];
    b: [number, number];
    c: [number, number];
    d: [number, number];

    constructor(a:[number, number],b:[number, number],c:[number, number],d:[number, number]){
        this.a=a;
        this.b=b;
        this.c=c;
        this.d=d;
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.moveTo(this.a[0], this.a[1]);
        ctx.lineTo(this.b[0], this.b[1]);
        ctx.lineTo(this.c[0], this.c[1]);
        ctx.lineTo(this.d[0], this.d[1]);
        ctx.closePath();
        ctx.stroke();
    }

}

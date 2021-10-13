class Pedra{
	constructor(x,y,r)
	{
	// assign options to the pedra ball
	var options={
		restitution:0.8,
		friction:0.9,
		density:12,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pedrapos=this.body.position;		
			push()
			translate(pedrapos.x, pedrapos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the pedra ball

			pop()
	}

}
class Ferro{
	constructor(x,y,r)
	{
	// assign options to the ferro ball
	var options={
		restitution:0.8,
		friction:3,
		density:30,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ferropos=this.body.position;		
			push()
			translate(ferropos.x, ferropos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the ferro ball
		ellipse(0,0,this.r, this.r);
			pop()
	}

}
class Bubble{
	constructor(_x, _y, _r){
		this.x = _x;
		this.y = _y;
		this.r = _r;
		this.incrX = random([random(1,2), random(-2,-1)]);
		this.incrY = random([random(1,2), random(-2,-1)]);
		this.color = color(random(255), random(255), random(255));
		this.bright = 255;
	}

	contains(px, py){
		let d = dist(px, py, this.x, this.y)
		return (d < this.r)
	}

	changeColor(bright){
		this.bright = bright;
	}


	move(){
		this.x = this.x + this.incrX;
		this.y = this.y + this.incrY;
		if (this.x >= width | this.x <= 0){
			this.incrX = -this.incrX;
		}
		if (this.y >= height | this.y <= 0){
			this.incrY = -this.incrY;
		}
	}

	display(){
		stroke(this.color);
		fill(this.bright);
		ellipse(this.x,this.y,2*this.r);
	}
}

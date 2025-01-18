function Obstacle() {
  this.x = random(150, 330);
  this.y = 0;
  this.width = 10;
  this.height = 20;

  this.show = function () {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  };

  this.update = function () {
    this.y++;
  };

  this.hits = function (Car) {
    if (
      ((Car.x - this.x > 0 && Car.x - this.x < this.width) ||
        (Car.x - this.x < 0 && this.x - Car.x < Car.width)) &&
      Math.abs(Car.y - this.y) < this.height
    ) {
      return true;
    } else return false;
  };
}

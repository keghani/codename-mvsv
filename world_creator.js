function WorldCreator() {
  this.tiles = [];
}

WorldCreator.prototype.draw = function(container) { 
 for (i = 0; i < this.tiles.length ; ++i) {
   this.tiles[i].draw(container, 0, 0);
 }
}


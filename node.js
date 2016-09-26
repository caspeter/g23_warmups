function Node(name,edge){
  this.name= name;
  this.edge= edge || null;
};

function Graph(){
  this.nodes = [];
  var that = this;

  this.add = function(node){
    that.nodes.push(node);
  }
  // given a node name, return the number of things that it is connected to
  this.connections = function(nodeName){
    for (var i = 0; i < that.nodes.length; i++) {
      if(that.nodes[i].name === nodeName){
        if(that.nodes[i].edge === null){
          return 0;
        }else{
          return 1;
        }
      }
    }
  }

  this.pointsTo = function(nodeName){
    var total = 0;
    for (var i = 0; i < that.nodes.length; i++) {
      if(that.nodes[i].edge === nodeName){
        total++;
      }
    }
    return total;
  }

  this.pathsFrom = function(nodeName,path){
    //if this is a node I have visited before then stop
    if (path && path[0]===nodeName) {
      return path;
    }
    var path = path || [nodeName];
    for (var i = 0; i < that.nodes.length; i++) {
      if(that.nodes[i].name === nodeName){
        path.push(that.nodes[i].edge);
        if (path.length > that.nodes.length) {
          return path;
        }
        this.pathsFrom(path[path.length-1],path);
      }
    }
    return path;
  }
  //what are the paths to get to the given nodeName
  // this.pathsTo = function(nodeName,subpath){
  //   var subpath = subpath || [];
  //
  //   for (var i = 0; i < that.nodes.length; i++) {
  //     if(that.nodes[i].edge === nodeName){
  //       subpath.push(that.nodes[i].name);
  //       // subpath.push(nodeName);
  //
  //       console.log("my node",that.nodes[i].name);
  //       this.pathsTo(that.nodes[i].name, subpath);
  //     }
  //   }
  //   return subpath;
  // };
}

//create a graph and an object

var graph = new Graph();
var node1 = new Node("a","g");
var node2 = new Node("b","a");
var node3 = new Node("c","a");
var node4 = new Node("d","a");
var node5 = new Node("f","c");
var node6 = new Node("g","f");
var node7 = new Node("e","g");

graph.add(node1);
graph.add(node2);
graph.add(node3);
graph.add(node4);
graph.add(node5);
graph.add(node6);
graph.add(node7);
// console.log(graph.connections("a")); //expect 0
// console.log(graph.connections("b")); //expect 1
// console.log(graph.pathsTo("a")); //
// console.log(graph.pointsTo("a")); //expect 3
console.log(graph.pathsFrom("a")); //
console.log(graph.pathsFrom("c")); //
console.log(graph.pathsFrom("d")); //
console.log(graph.pathsFrom("e")); //
// console.log(graph.pointsTo("g")); //expect 1
// console.log(graph);

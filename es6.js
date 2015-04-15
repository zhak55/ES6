// ES6: create $Event class for
// Main syntax class { methods in Proto && constructor }
class $Event {
   constructor() {
     this.stack = {};
  }
  on( type, fn ) {
   !this.stack[type] && ( this.stack[type] = [] );
    this.stack[type].push(fn);
   return this;
  }
  //ES6: Define default parameters
  //ES6: Using rest params like '...args' 
  trigger( type, context = this, ...args) {
   // ES6: 'let' - block scope used
   let $ev = this.stack[type];
    if( $ev ) {
     // ES6: is used interators for ... of
     for( let fn of $ev ) fn.apply( context,  args ); 
    }
   return this; }
}
 // ES6: inherite some methods 
 // and internal props for Model Class
 class Model extends $Event {
  constructor( fields ) {
    super.constructor.call(this);
    this.data = fields || [];
  }
  // ES6: sread operator '...param'
  set( key, value ) {
   this.data[key] = value;
   let $ev = 'change:' + key;
    if( this.stack[ $ev ] ) {
      let param = [ $ev, null, value ]
      this.trigger( ...param ); }
    return this;
   }
   // ES6: template string
   render( template, to ) {
    var tmpl = document.createTextNode( eval(template) );
     if( to && to.nodeName ) to.appendChild( tmpl );
    }
  }

    let Person = new Model({name: 'Roman'})
    // ES6: Arrow functions with param 
    Person.on('change:name', name => console.log(name));

    //ES6: Deferred Object
    let defer = function() {
      return new Promise(function(res, rej) {
        window.setTimeout(res, 3000)  
      })
    }
    defer().then(() => {
      Person.set('name', 'Roman Zhak')
       // Render with ES6 template string
     .render('`I am ${this.data.name}`')
    });
 
  // ES6 also includes:
  // --- 1: Destructured Assignment
  let [one, two] = [1, 2];
  let {three, four} = {three: 3, four:  4};
  // --- 2: Generators
  function* range(start, end, step) {
   while (start < end) {
    yield start;
   start += step;
  }
}

   var value = range(0, 10, 2);

   console.log(value.next()); //{value: 0, done: false}
   console.log(value.next()); //{value: 2, done: false}
   console.log(value.next()); //{value: 4, done: false} 

   // ES6: MAP/SET

   let x = new Set([1, 2, 3, 4, 4, 4, 5]);

   console.log('The set contains', x.size, 'elements.'); // 5
        

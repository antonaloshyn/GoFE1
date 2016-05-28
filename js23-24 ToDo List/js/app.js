require(
  ['lib/jquery-1.12.3.js','model','view','controller'],
  function(){
    $(function(){
      var list = ['learn JS','learn HTML','make coffee'];
      var model = new Model(list);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);

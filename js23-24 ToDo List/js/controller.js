function Controller(model, view) {
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.input.keypress(function (e) {
    if(e.which == 13){
      addItem();
    }
  })
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  
  function addItem(){
    var newItem = view.elements.input.val();
    if(newItem.length === 0){
      return
    }else{

      model.addItem(newItem);
      view.renderList(model.data);
      view.elements.input.val('');
    }
  }
  function removeItem() {
    var item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }
 
}

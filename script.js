let makeBoxes = '';
let array = [];
let i = 0;
for (;i < 16; array.push(i),i++){
    makeBoxes += ('<div id="'+i+'" class="darkBox"></div>');
};
$('#board').append(makeBoxes);

$.each(array, function (index, value){
    let id = ('#'+ value)
    $(`${id}`).click(function(){
        $(`${id}`).toggleClass('lightBox');
  });
});
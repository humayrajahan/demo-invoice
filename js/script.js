var products = [
    {id: 1, name:'Processor', price:15000},
    {id: 2, name:'Motherboard', price:5000},
    {id: 3, name:'RAM', price:3000},
    {id: 4, name:'HDD', price:3500},
    {id: 5, name:'SSD', price:3500},
    {id: 6, name:'Keyboard', price:500},
    {id: 7, name:'Mouse', price:300},
    {id: 8, name:'Speaker', price:600},
    {id: 9, name:'Headphone', price:1000},
];

/*  -------------1st tr----------  */
var select='';
select+= '<select index="1" onchange="setProductPriceAndQuantity(this.value, this)">';
select+= '<option disable selected> --- Select Product ---</option>';
$.each(products, function(key,value){
    select += '<option value="'+value.id+'">'+ value.name+'</option>';
});
select+='</select>';
$('#td1').append(select);


/*  -------------2nd tr----------  */

var customIndex = 2;
$('#addBtn').click(function(){
    var tr = '';
    tr+='<tr>';
    tr+='<td id="slNo'+customIndex+' "></td>';

    tr+='<td>';
        tr+= '<select index="'+customIndex+'" onchange="setProductPriceAndQuantity(this.value, this)">';
        tr+= '<option disable selected> --- Select Product ---</option>';
        $.each(products, function(key,value){
            tr += '<option value="'+value.id+'">'+ value.name+'</option>';
        });       
        tr += '</select>';
    tr +='</td>';

    tr +='<td><input type="text" id="description"></td>';    

    tr +='<td><input type="number" index="'+customIndex+'" onkeyup="addjustTotalPrice(this)" id="price'+customIndex+'"></td>';
    tr +='<td><input type="number" index="'+customIndex+'" onkeyup="setTotalPrice(this)" id="qty'+customIndex+'"></td>';
    tr +='<td><input type="text" readonly id="total'+customIndex+'" class="item-total-price"></td>';
    tr +='<td><button type="button" class="remove-btn"> - </button></td>';
    tr +='</td>';
    $('#res').append(tr);
    customIndex++;
});

$(document).on('click','.remove-btn', function(){
    $(this).closest('tr').remove();
    setGrandTotalPrice();
});

function setProductPriceAndQuantity(id, select)
{
    var product = products.find(product => {return product.id == id});
    var indexMain = $(select).attr('index');
    $('#price'+indexMain).val(product.price);
    $('#qty'+indexMain).val(1);
    $('#total'+indexMain).val(product.price * 1);
    setGrandTotalPrice();
}

function setTotalPrice(input)
{
    var indexMain = $(input).attr('index');
    var qty = $(input).val();
    var price = $('#price'+indexMain).val();
    var total = price * qty;
    $('#total'+indexMain).val(total); 
    setGrandTotalPrice();
}

function addjustTotalPrice(input)
{
    var indexMain = $(input).attr('index');
    var price = $(input).val();
    var qty = $('#qty'+indexMain).val();
    var total = price * qty;
    $('#total'+indexMain).val(total); 
    setGrandTotalPrice();
}

function setGrandTotalPrice()
{
    var sum = 0;
    $('.item-total-price').each(function(indexMain)
    {
        sum = sum + Number($(this).val());
    });
    $('#grandTotal').text(sum);
}



function myWatch()
{
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var result = hour + " : " + minutes + " : " + seconds;
    document.getElementById('setTime').innerHTML = result;
} $(myWatch);

function myDate()
{
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    document.getElementById('setDate').innerHTML = date;
} $(myDate);

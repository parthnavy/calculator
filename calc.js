
function insert(num)
{
	$("#ip1").val =$("ip1").val + num ;
}

$("#but1").click(function(){
	insert(1);
});


$("#but2").click(function(){
	insert(2);
});

$("#but3").click(function(){
	insert(3);
});
$("#but4").click(function(){
	insert(4);
});
$("#but5").click(function(){
	insert(5);
});
$("#but6").click(function(){
	insert(6);
});
$("#but7").click(function(){
	insert(7);
});
$("#but8").click(function(){
	insert(8);
});
$("#but9").click(function(){
	insert(9);
});
$("#but0").click(function(){
	insert(0);
});
$("#but+").click(function(){
	insert("+");
});
$("#but-").click(function(){
	insert("-");
});
$("#but/").click(function(){
	insert("/");
});
$("#but*").click(function(){
	insert("*");
});
$("#but2").click(function(){
	insert(2);
});
$("but=").click(function(){
	
	if($("#ip1").val)
	{
		$("#ip1").val=eval(exp);

	}
	else
	{
		alert("Invalid expression");
	}
});
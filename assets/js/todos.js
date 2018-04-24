//check off specific Todos By clicking
//LONGER Version...
/*$("li").click (function(){
	//if li is gray
	if($(this).css("color") === "rgb(128,128,128)"){
		//turn is black
		$(this).css({
			color:"black";
			textDecoration: "none"
		});
	}
	//else
	else{
		//turn it gray
		$(this).css({
			color:"gray";
			textDecoration: "line-through"
		});
	}
});  */


				//SHorter Version

//$("li").click (function(){
//	$(this).toggleClass("completed");	
//});

//Events listeners are for example, a "click", "on-click"...
	//if we want that new todo change, we must add 'on()'...
//we can only add a listener using jQuery on elements 
//that exist when this code is run the first time...
	//NEXT line does when an li is click inside an ul, run
//next .toggleClass line... 
//2nd argument 'li' specifies'li's' that may or may not have 
//been on the page when it loaded, inside of the 'ul', that 
//was on the page when the page is loaded...
	//SO, we are adding Eventlisteners to the elements that 
//exist when page loads so, that we can account for elements 
//that are Not there yet...
	//DIFF betw click() and on()...:
//click() only adds listeners for existing elements...
//on () will add listeners for all potential future elements
$("ul").on("click","li", function() {
	$(this).toggleClass("completed");	
});

//click on X to delete Todo
//$("span").click(function(event){

//we are going to listen on an event that exists when
//the page loads with on, and then click but we only 
//want this code to run when a span is clicked inside of
//a  'ul'
$("ul").on("click","span", function (event){
	//Below 'this' refers to 'span' tag...
	//we use parent() to retrieve the 'li' tag...
//A CALLBACK funct, also known as a higher-order function,
	//is a function that is passed to another function 
	//(let's call this other function “otherFunction”) as a 
	//parameter, and the callback function is called (or executed)
	// inside the otherFunction.
//We use a callback function() we can pass into fadeout
	//that will run afterwards. So, to use .remove to
	//remove 'todo sentence', and allow the fade out to 
	//disappear, and give .5s time to fade out...
	$(this).parent().fadeOut(500,function(){
		//Below 'this' refers to 'li' tag (todo sentence)
		$(this).remove();
	});
	//method stopPropagation, stop propagation to parents tags
	//(such, from: Span, li, div, body...) after X span
	//was Clicked...
	event.stopPropagation();
});

//So, we need to work with the 'event' object, and can be
//called anything we want...
//An EVENT OBJECT is a synchronization object whose 
	//state can be explicitly set to signaled by use 
	//of the SetEvent function.
//HTML DOM Events allow JavaScript to register different 
	//event handlers on elements in an HTML document.
	//Events are normally used in combination with functions, 
	//and the function will not be executed before the event 
	//occurs (such as when a user clicks a button).

$("input[type='text']").keypress(function(event){
	//we are going to check, if the caracter is 13,
	//13 is the code for 'enter' key...
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and to ul
		$("ul").append ("<li><span><i class='fa fa-trash'></i></span>" + todoText +"</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});
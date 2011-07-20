jquery.draggableList
======================
jQuery plugin. Point at an unordered list (or other element) specify a containment size and the list will become draggable. Drag the list up and down to scroll its contents.

Demo
------
Check out a very basic demo: http://jquery-draggable-list.github.com/

Example Usage
----
	<html>
  		<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
		<script type="text/javascript" src="jquery.draggableList.js"></script>

  		<script type="text/javascript">
      		$(document).ready(function() {
          		$('.myList').draggableList({height:150, listPosition:0});
      		});
  		</script>
  	
  		<style>
  			.draggableList {border:solid 1px black;}
  			.myList li { height:30px; }
  		</style>
  	
  	</head>
 	<body>    
   		<ul class="myList">
     		<li>1</li>
     		<li>2</li>
     		<li>3</li>
     		<li>4</li>
     		<li>5</li>
     		<li>6</li>
     		<li>7</li>
     		<li>8</li>
     		<li>9</li>
   		</ul>
  	</body>
	</html>
   

Options
----------
The plugin has a bunch of options with default values as follows:

        cursor: 'n-resize',
        height: '150',
        width: '100',
        listPosition: '0',
        panelCssClass:'draggableList'

**cursor**
CSS cursor style on hovering over the list

**height**
Numeric-value - pixels The height of the element which will hold the list (it's overflow will be set to hidden)

**width**
Numeric-value - pixels The width of the element which will hold the list

**listPosition**
Value between 0 and 100 : Where abouts the list will be positioned relative to it's container. When 0, the list will appear scrolled right to the top, so the first element will be at the top of the container. When set to 100 the list will be scrolled right to the bottom

**panelCssClass**
Name of the css class that is added to the container item. Used to style the container.

**Dependancies**
Has dependancies on:

jQuery
ui.core
ui.draggable
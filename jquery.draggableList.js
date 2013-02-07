
$.fn.draggableList = function(options) {
	var opts = $.extend({}, $.fn.draggableList.defaults, options);
	this.each(function() {
		var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
		CreateContainerDiv($(this), o);
	});
}

$.fn.draggableList.defaults = {
	cursor: 'n-resize',
	height: '150',
	width: '100',
	listPosition: '0',
	panelCssClass:'draggableList'};

function CreateContainerDiv(dragTarget, options) {

	// add the panel to constrain the draggable section
	var newPanelHeight = dragTarget.height() * 2;
	newPanelHeight = newPanelHeight - options.height;
	dragTarget.wrap(document.createElement("div"));

	// set its height and put it in the right place
	dragTarget.parent().css("height", newPanelHeight + "px");
	dragTarget.parent().css("position", "relative");
	var newPanelPosition = (dragTarget.height() - options.height) * -1
	dragTarget.parent().css("top", newPanelPosition);

	// add the container panel
	dragTarget.parent().wrap(document.createElement("div"));
	dragTarget.parent().parent().css("cursor", options.cursor);
	dragTarget.parent().parent().css("height", options.height + "px");
	dragTarget.parent().parent().css("width", options.width + "px");
	dragTarget.parent().parent().css("overflow", "hidden");
	dragTarget.parent().parent().addClass(options.panelCssClass);

	// setup 'dragging' on the target...
	dragTarget.draggable({ axis: 'y', containment: 'parent' });
	
	// finally set the position of the list
	listPositionExplicit = newPanelPosition * ((100 - options.listPosition)/100)*-1
	dragTarget.css("top", listPositionExplicit + "px")

}
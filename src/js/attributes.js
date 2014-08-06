/**
 * HTML5 Form* Attributes for Legacy Browsers, v1.0
 *
 * @copyright Copyright (c) 2014 XHTMLized, <a href="http://xhtmlized.com/">XHTMLized</a>
 * @author Stephen Reay
 * @version 1.0
 */

if (!Function.prototype.bind) {
	/**
	 * Bind a function to an object and return it as a callback
	 * @param {Object} context the object to bind the function to
	 * @param {arguments} [1..n] arguments to be passed to the function in the callback
	 * @returns {Function} a callback to the function bound to the object
	 * @requires Object#toArray
	 * @example
	 * var myInstance = new MyClass();
	 * var callback = myInstance.myMethod.bind(myInstance); //context-safe callback
	 */
	Function.prototype.bind = function bind(context) {
		var callback = this;
		var args =  Array.prototype.slice.call(arguments, 0);
		var object = args.shift();
		return function () {
			return callback.apply(object, args.concat(Array.prototype.slice.call(arguments, 0)));
		};
	};
}

if (!Function.prototype.bindAsEventListener) {
	/**
	 * Bind a function to an object and return it as a callback that recieves the active Event as its first argument
	 * @param {Object} context the object to bind the function to
	 * @param {arguments} [1..n] arguments to be passed to the function in the callback
	 * @returns {Function} a callback to the function bound to the object
	 * @see Function#bind
	 * @example
	 * var myInstance = new MyClass();
	 * var callback = myInstance.myMethod.bind(myInstance); //context-safe callback
	 */
	Function.prototype.bindAsEventListener = function bindAsEventListener(context) {
		var callback = this;
		var args =  Array.prototype.slice.call(arguments, 0);
		var object = args.shift();
		return function (event) {
			var localArgs = Array.prototype.slice.call(arguments, 0);
			localArgs.shift();
			return callback.apply(object, [event || window.event].concat(args, localArgs));
		};
	};
}

if (typeof JSized === 'undefined') {
	/**
	 * JSized Namespace
	 * @namespace
	 */
	var JSized = {};
}
if (typeof JSized.Ui === 'undefined') {
	/**
	 * JSized User Interface Namespace
	 * @namespace
	 */
	JSized.Ui = {};
}
if (typeof JSized.Ui.Form === 'undefined') {
	/**
	 * JSized Form Namespace
	 * @namespace
	 */
	JSized.Ui.Form = {};
}
/**
 * jQuery Plugin for JSized HTML5 Placeholder for Legacy Browsers
 */
jQuery.fn.JSizedFormAttributes = function () {

	return this.each(function () {
		new JSized.Ui.Form.Attributes(this);
	});
};

jQuery.fn.JSizedFormAttributes.selector = 'input[form],select[form],textarea[form],button[form],input[formaction],button[formaction],input[formenctype],button[formenctype],input[formmethod],button[formmethod],input[formtarget],button[formtarget]';


/**
 * @class HTML5 Form* Attributes for Legacy Browsers
 * @param {HTMLElement} element element ID or element reference to initialise Form Attributes on
 */
JSized.Ui.Form.Attributes = function (element) {
	this.element = jQuery(element);
	this.form = this.element.closest('form');

	var formAtts = [
		'formaction',
		'formenctype',
		'formmethod',
		'formtarget'
	];

	this.usedAtts = [];

	for (var i = 0; i < formAtts.length; i++) {
		if (typeof this.element.attr(formAtts[i]) !== 'undefined' && !this.nativeSupport(formAtts[i])) {
			this.usedAtts.push(formAtts[i]);
		}
	}
	if (this.usedAtts.length > 0) {
		this.element.click(this.addAttributeHandler.bind(this));
	}

	if (this.element[0].getAttribute('form') !== null) {
		this.addFormHandler();
	}
};

JSized.Ui.Form.Attributes.prototype.nativeSupport = function (attribute) {

	var type = this.element.get(0).nodeName.toLowerCase(),
		e = document.createElement(type);

	return attribute in e;
};

JSized.Ui.Form.Attributes.prototype.addAttributeHandler = function () {
	for (var i = 0; i < this.usedAtts.length; i++) {
		this.form.attr(this.usedAtts[i].replace(/^form/,''), this.element.attr(this.usedAtts[i]));
	}
};

JSized.Ui.Form.Attributes.prototype.addFormHandler = function () {

	this.form = jQuery('#' + this.element[0].getAttribute('form'));

	this.form.submit(this.submitHandler.bind(this));
};

JSized.Ui.Form.Attributes.prototype.submitHandler = function () {

	this.element.clone().hide().appendTo(this.form);

};

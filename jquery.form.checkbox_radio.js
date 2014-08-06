/**
 * Custom form elements - Checkbox/Radio Button, v1.0.1
 *
 * @copyright Copyright (c) 2014 XHTMLized, <a href="http://xhtmlized.com/">XHTMLized</a>
 * @author Stephen Reay
 * @version 1.0.2
 */

if (!Array.prototype.indexOf) {
	/**
	 * Returns the first index at which a given element can be found in the array, or -1 if it is not present
	 * @param searchElement Element to locate in the array
	 * @param {Number} [from=0] the index at which to begin the search. If negative, it is taken as the offset from the end of the array
	 * @returns {Number} the index the element was found at, or -1 if not found
	 * @author <a href="http://developer.mozilla.org">Mozilla</a>
	 * @see <a href="http://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf">http://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf</a>
	 */
	Array.prototype.indexOf = function indexOf(searchElement, from) {
		var len = this.length;

		from = Number(from) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0) {
			from += len;
		}

		for (; from < len; from++) {
			if (from in this && this[from] === searchElement) {
				return from;
			}
		}
		return -1;
	};
}
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

if (!Function.prototype.inherits) {
	/**
	 * Makes a Class constructor Function inherit from another Class
	 * @param {Class} parentClass the Class to inherit from
	 * @author Based on an idea by <a href="http://www.coolpage.com/developer/javascript/Correct%20OOP%20for%20Javascript.html">Shelby H. Moore III</a>
	 * @example
	 * function ClassA(arg) {
	 *     this.prop = arg || false;
	 * }
	 *
	 * ClassB.inherits(ClassA);
	 * function ClassB(arg) {
	 *     this.inherits(ClassA);
	 *     this.prop2 = arg || 'default';
	 * }
	 */
	Function.prototype.inherits = function inherits(ParentClass) {
	 	// When it's run initially
	 	if (typeof this === 'function') {
			if (this === ParentClass) {
		 		throw new ReferenceError("A Class can't inherit from itself");
		 	}

			this.prototype = new ParentClass();

			this.prototype.inherits = Function.prototype.inherits;

			this.prototype.constructor = this;

			this.prototype.parent = ParentClass.prototype;
		}

		else if (typeof this === 'object') {
			if (this.constructor === ParentClass) {
		 		throw new ReferenceError("A Class can't inherit from itself");
		 	}
			if (arguments.length > 1) {
				ParentClass.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			else {
				ParentClass.call(this);
			}
		}
	};
}
if (typeof JSized === 'undefined') {
	/**
	 * JSized Namespace
	 * @namespace
	 */
	var JSized = {};
}
if (typeof JSized.Util === 'undefined') {
	/**
	 * JSized Utility Namespace
	 * @namespace
	 */
	JSized.Util = {};
}
if (typeof JSized.Util.Event === 'undefined') {
	/**
	 * JSized Event Namespace
	 * @namespace
	 */
	JSized.Util.Event = {};
}

/**
 * Get the keycode for an event
 * @param {Event} e the event object
 * @returns {Number} the keycode for the event
 */
JSized.Util.Event.getKeyCode = function (e) {
    var code = e.keyCode ? e.keyCode : e.which ? e.which : false;

    return code;
};

JSized.Util.Event.keyCodes = {
	KEY_CANCEL : 3,
	KEY_HELP : 6,
	KEY_BACK_SPACE : 8,
	KEY_TAB : 9,
	KEY_CLEAR : 12,
	KEY_RETURN : 13,
	KEY_ENTER : 14,
	KEY_SHIFT : 16,
	KEY_CONTROL : 17,
	KEY_ALT : 18,
	KEY_PAUSE : 19,
	KEY_CAPS_LOCK : 20,
	KEY_ESCAPE : 27,
	KEY_SPACE : 32,
	KEY_PAGE_UP : 33,
	KEY_PAGE_DOWN : 34,
	KEY_END : 35,
	KEY_HOME : 36,
	KEY_LEFT : 37,
	KEY_UP : 38,
	KEY_RIGHT : 39,
	KEY_DOWN : 40,
	KEY_PRINTSCREEN : 44,
	KEY_INSERT : 45,
	KEY_DELETE : 46,
	KEY_0 : 48,
	KEY_1 : 49,
	KEY_2 : 50,
	KEY_3 : 51,
	KEY_4 : 52,
	KEY_5 : 53,
	KEY_6 : 54,
	KEY_7 : 55,
	KEY_8 : 56,
	KEY_9 : 57,
	KEY_SEMICOLON : 59,
	KEY_EQUALS : 61,
	KEY_A : 65,
	KEY_B : 66,
	KEY_C : 67,
	KEY_D : 68,
	KEY_E : 69,
	KEY_F : 70,
	KEY_G : 71,
	KEY_H : 72,
	KEY_I : 73,
	KEY_J : 74,
	KEY_K : 75,
	KEY_L : 76,
	KEY_M : 77,
	KEY_N : 78,
	KEY_O : 79,
	KEY_P : 80,
	KEY_Q : 81,
	KEY_R : 82,
	KEY_S : 83,
	KEY_T : 84,
	KEY_U : 85,
	KEY_V : 86,
	KEY_W : 87,
	KEY_X : 88,
	KEY_Y : 89,
	KEY_Z : 90,
	KEY_CONTEXT_MENU : 93,
	KEY_NUMPAD0 : 96,
	KEY_NUMPAD1 : 97,
	KEY_NUMPAD2 : 98,
	KEY_NUMPAD3 : 99,
	KEY_NUMPAD4 : 100,
	KEY_NUMPAD5 : 101,
	KEY_NUMPAD6 : 102,
	KEY_NUMPAD7 : 103,
	KEY_NUMPAD8 : 104,
	KEY_NUMPAD9 : 105,
	KEY_MULTIPLY : 106,
	KEY_ADD : 107,
	KEY_SEPARATOR : 108,
	KEY_SUBTRACT : 109,
	KEY_DECIMAL : 110,
	KEY_DIVIDE : 111,
	KEY_F1 : 112,
	KEY_F2 : 113,
	KEY_F3 : 114,
	KEY_F4 : 115,
	KEY_F5 : 116,
	KEY_F6 : 117,
	KEY_F7 : 118,
	KEY_F8 : 119,
	KEY_F9 : 120,
	KEY_F10 : 121,
	KEY_F11 : 122,
	KEY_F12 : 123,
	KEY_F13 : 124,
	KEY_F14 : 125,
	KEY_F15 : 126,
	KEY_F16 : 127,
	KEY_F17 : 128,
	KEY_F18 : 129,
	KEY_F19 : 130,
	KEY_F20 : 131,
	KEY_F21 : 132,
	KEY_F22 : 133,
	KEY_F23 : 134,
	KEY_F24 : 135,
	KEY_NUM_LOCK : 144,
	KEY_SCROLL_LOCK : 145,
	KEY_COMMA : 188,
	KEY_PERIOD : 190,
	KEY_SLASH : 191,
	KEY_BACK_QUOTE : 192,
	KEY_OPEN_BRACKET : 219,
	KEY_BACK_SLASH : 220,
	KEY_CLOSE_BRACKET : 221,
	KEY_QUOTE : 222,
	KEY_META : 224
};
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
 * jQuery Plugin for JSized Custom Checkbox Select
 */
jQuery.fn.JSizedFormCheckbox = function (options) {
	return this.each(function () {
		new JSized.Ui.Form.Checkbox(this, options);
	});
};

/**
 * @class Custom Form Checkbox
 * @param {HTMLElement} element element ID or element reference for the checkbox to be styled
 */
JSized.Ui.Form.Checkbox = function Checkbox(element, options) {
	if (!element) {
		return;
	}

	element = jQuery(element);

	if (element.data('JSizedStyled') == true) {
		return;
	}

	// Construct an object if we're called as a function
	if (this.constructor === window.constructor) {
		return new arguments.callee(element);
	}

	if (typeof element !== 'undefined') {
		this.options = jQuery.extend(true, {}, this.options, options || {});

		this.basename = 'checkbox';
		this.elements = element;
		this.links = jQuery.map(this.elements, this.styleElement.bind(this));
	}
};

JSized.Ui.Form.Checkbox.prototype.options = {
	copyClassName: false
};

/**
 * Create the extra elements and events to style a single Input element
 * @param {HTMLElement} element the Input element to be styled
 * @param {Number} index the index of the element in the elements array
 * @returns {HTMLElement} the newly created DOM element that is styled to replace the Input
 */
JSized.Ui.Form.Checkbox.prototype.styleElement = function styleElement(element, index) {
	element = jQuery(element).data('JSizedStyled', true);

	var self = this,
		link = jQuery('<a />').attr({
			href: '#',
			'class': this.basename
		});

	if (this.options.copyClassName) {
		link.addClass(element.attr('class'));
	}

	if (element[0].checked) {
		this.check(link, index);
	}

	link.insertBefore(element.css({position: 'absolute', opacity: 0, left: '-999em'}));

	element.bind('change', this.onChange.bindAsEventListener(this));
	element.closest('form').bind('reset', function () {
		window.setTimeout(function () {
			self.onChange({target:element});
		}, 50);
	});

	element.closest('label').add(jQuery('label[for="' + element.attr('id') + '"]')).bind('click', function () {
		link.focus();
	});


	link.bind('click keypress', this.clicked.bindAsEventListener(this));

	return link.get(0);
};

JSized.Ui.Form.Checkbox.prototype.onChange = function onChange(event) {

	var index = this.elements.index(event.target);

	if (this.elements[index].checked) {
		this.check(this.links[index], index);
	}
	else {
		this.uncheck(this.links[index], index);
	}
};


JSized.Ui.Form.Checkbox.prototype.check = function check(link, i) {
	jQuery(link).addClass(this.basename + '-checked');
};

JSized.Ui.Form.Checkbox.prototype.uncheck = function uncheck(link, i) {
	jQuery(link).removeClass(this.basename + '-checked');
};

JSized.Ui.Form.Checkbox.prototype.clicked = function clicked(e) {
	if (e.type === 'keypress') {
		if (JSized.Util.Event.getKeyCode(e) !== JSized.Util.Event.keyCodes.KEY_SPACE) {
			return;
		}
	}

	var element = e.target,
		index = this.links.indexOf(element);

	element.focus();

	e.preventDefault();
	e.stopPropagation();

	this.elements[index].checked = !this.elements[index].checked;

	this.elements.eq(index).trigger('change');
};

/**
 * jQuery Plugin for JSized Custom Checkbox Select
 */
jQuery.fn.JSizedFormRadio = function (options) {
	return this.each(function () {
		new JSized.Ui.Form.Radio(this, options);
	});
};

/**
 * @class Custom Form Radio Button
 * @augments JSized.Ui.Form.Checkbox
 * @param {HTMLElement} element element ID or element reference for the radiobutton to be styled
 */
JSized.Ui.Form.Radio = function Radio(element, options) {
	element = jQuery(element);

	if (element.data('JSizedStyled') == true) {
		return;
	}

	// Construct an object if we're called as a function
	if (this.constructor === window.constructor) {
		return new arguments.callee(element);
	}

	this.inherits(JSized.Ui.Form.Checkbox);

	this.options = jQuery.extend(true, {}, this.options, options || {});

	this.basename = 'radio';

	this.elements = jQuery('input[name="' + element.attr('name') + '"]');

	this.links = jQuery.map(this.elements, this.styleElement.bind(this));
};
JSized.Ui.Form.Radio.inherits(JSized.Ui.Form.Checkbox);

JSized.Ui.Form.Radio.prototype.onChange = function onChange(event) {

	var index = this.elements.index(event.target);

	var self = this;
	jQuery.each(this.links, function (i, link) {
		self[self.elements[i].checked ? 'check' : 'uncheck'](link, i);
	});
	this[this.elements[index].checked ? 'check' : 'uncheck'](this.links[index], index);
};

JSized.Ui.Form.Radio.prototype.clicked = function clicked(e) {
	if (e.type === 'keypress') {
		if (JSized.Util.Event.getKeyCode(e) !== JSized.Util.Event.keyCodes.KEY_SPACE) {
			return;
		}
		e.preventDefault();
		e.stopPropagation();
	}


	var element = e.target,
		index = this.links.indexOf(element);

	element.focus();

	e.preventDefault();
	e.stopPropagation();

	this.elements[index].checked = true;

	this.elements.eq(index).trigger('change');
};

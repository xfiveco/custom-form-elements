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

/**
 * HTML5 Placeholder for Legacy Browsers, v1.0
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
jQuery.fn.JSizedFormPlaceholder = function (options) {
	return this.each(function () {
		new JSized.Ui.Form.Placeholder(this, options);
	});
};

/**
 * @class HTML5 Placeholder for Legacy Browsers
 * @param {HTMLElement} element element ID or element reference to initialise Placeholder on
 */
JSized.Ui.Form.Placeholder = function (element, options) {

	/**
	 * The Input element
	 * @type HTMLElement
	 */
	this.element = jQuery(element);

	if (!this.element.length || this.nativeSupport(this.element)) {
		return;
	}

	this.options = jQuery.extend(true, {}, this.options, options || {});

	/**
	 * The placeholder text (false if none)
	 * @type String|Boolean
	 */
	this.placeholderText = this.element.attr('placeholder');

	/**
	 * Indicates if placeholder text is showing
	 * @type Boolean
	 */
	this.active = false;

	/**
	 * Indicates if we're dealing with a password field
	 * @type Boolean
	 */
	this.passwordMode = this.element.get(0).type === 'password';


	this.passwordFieldFixed = false;

	if (this.placeholderText) {
		this.events();
		this.show();
	}
};

JSized.Ui.Form.Placeholder.prototype.options = {
	'activeClassName': 'placeholder-active',
	'emulatedPasswordClassName': 'emulated-password-placeholder',
	'isEmulatedPasswordClassName': 'emulated-password-placeholder-original',
	'color' : 'GrayText'
};

JSized.Ui.Form.Placeholder.prototype.nativeSupport = function (element) {

	var type = element.get(0).nodeName.toLowerCase(),
		e = document.createElement(type);

	return 'placeholder' in e;
};

JSized.Ui.Form.Placeholder.prototype.events = function () {
	this.element.bind('focus placeholderhide', this.hide.bindAsEventListener(this));
	this.element.closest('form').bind('submit', this.hide.bindAsEventListener(this));
	this.element.closest('form').bind('reset', this.reset.bindAsEventListener(this));
	this.element.bind('blur placeholdershow', this.show.bindAsEventListener(this));
};


JSized.Ui.Form.Placeholder.prototype.fixPasswordField = function () {

	this._element = this.element;

	this.otherField = jQuery('<input />').attr('type', 'text').addClass(this.element.attr('class')).addClass(this.options.emulatedPasswordClassName).bind('focus', this.hide.bindAsEventListener(this));

	jQuery('label[for="' + this.element.attr('id') + '"]').bind('observe', 'click', this.focus.bind(this));

	this.element.addClass(this.options.isEmulatedPasswordClassName).parent().get(0).insertBefore(this.otherField.get(0), this.element.get(0));

	this.passwordFieldFixed = true;
};

/**
 * Show the placeholder text
 */
JSized.Ui.Form.Placeholder.prototype.show = function (event) {
	if (this.element.val().length === 0) {

		if (this.passwordMode) {
			try {
				this.element.attr('type', 'text');
			}
			catch(e) {
				if (!this.passwordFieldFixed) {
					this.fixPasswordField();
				}

				this.element.hide();
				this.otherField.show();

				this.element = this.otherField;
			}
		}

		this.element.val(this.placeholderText);
		this.element.css('color', this.options.color);
		this.element.addClass(this.options.activeClassName);
		this.active = true;
	}
};


/**
 * Hide the placeholder text
 */
JSized.Ui.Form.Placeholder.prototype.hide = function (event) {
	if (this.active) {

		if (this.passwordMode) {
			try {
				this.element.attr('type', 'password');
			}
			catch(e) {
				if (!this.passwordFieldFixed) {
					this.fixPasswordField();
				}

				this.otherField.hide();
				this.element = this._element;
				this.active = false;
				this.element.show();

				if (event.type === 'focus') {
					this.element.focus();
				}
			}
		}


		this.element.val('');
		var toFocus = false;

		this.element.css('color', '');
		this.element.removeClass(this.options.activeClassName);
		this.active = false;
	}
};

JSized.Ui.Form.Placeholder.prototype.focus = function () {
	this.element.focus();
};

JSized.Ui.Form.Placeholder.prototype.reset = function () {
	window.setTimeout(this.show.bind(this), 20);
};

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

/**
 * Custom form elements - Select, v1.2.2
 *
 * @copyright Copyright (c) 2014 XHTMLized, <a href="http://xhtmlized.com/">XHTMLized</a>
 * @author Stephen Reay
 * @version 1.2
 */

if (!Object.map) {
  /**
   * Creates a new Object with the results of calling a provided function on every element in this Object
   * @param {Object} object the Object to iterate over
   * @param {Function} callback function that produces an element of the new Object from an element of the current one
   * @param {Object} [context] to use as this when executing callback
   * @returns {Object} new Object with the results of calling a provided function on every element in this Object
   * @example
   * function makePseudoPlural(single) {
   *     return single.replace(/o/g, "e");
   * }
   * var singles = {"human":"foot", "dinner":"goose", "target":"moose"];
   * var plurals = Object.map(singles, makePseudoPlural); //{"human":"feet", "dinner":"geese", "target":"meese"}
   */
  Object.map = function (object, callback, context) {
    if (callback.constructor !== Function) {
      throw new TypeError();
    }

    var obj = {};

    for (var i in object) {
      if (object.hasOwnProperty(i)) {
        obj[i] = callback.call(context, object[i], i, object);
      }
    }

    return obj;
  };
}

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
 * jQuery Plugin for Custom form elements -  Select
 * @param {Object} [options] configuration options
 * @param {String} [options.containerClass='custom-select'] the CSS class name to apply to the custom select's container element
 * @param {String} [options.wrapperClass='custom-select-wrapper'] the CSS class name to apply to the custom select's wrapper element
 * @param {String} [options.wrapperClass='custom-select-wrapper'] the CSS class name to apply to the custom select's wrapper element
 */
jQuery.fn.JSizedFormSelect = function (options) {
  return this.each(function () {
    new JSized.Ui.Form.Select(this, options);
  });
};

/**
 * @class Custom Form Select
 * @param {HTMLElement} element element ID or element reference for the select element to be styled
 * @param {Object} [options] configuration options
 * @param {String} [options.containerClass='custom-select'] the CSS class name to apply to the custom select's container element
 * @param {String} [options.wrapperClass='custom-select-wrapper'] the CSS class name to apply to the custom select's wrapper element
 * @param {String} [options.wrapperClass='custom-select-wrapper'] the CSS class name to apply to the custom select's wrapper element
 */
JSized.Ui.Form.Select = function (element, options) {

  // Construct an object if we're called as a function
  if (this.constructor === window.constructor) {
    return new arguments.callee(element);
  }

  this.element = jQuery(element);

  this.selectedIndex = this.element.get(0).selectedIndex || -1;

  this.options = jQuery.extend(true, {}, this.options, options || {});

  this.isOpen = false;

  this.styleElement();



  this.element.bind('focus', this.grabFocus.bindAsEventListener(this));
  this.element.bind('change', this.onChange.bindAsEventListener(this));
};

JSized.Ui.Form.Select.prototype.options = {
  altTextAttribute: false,
  containerClass: 'custom-select',
  wrapperClass: 'custom-select-wrapper',
  selectedClass: 'current-selected',
  defaultText: false,
  defaultTextOnOpen: false,
  maxItems: 'auto',
  maxItemsUseMaxHeight: true,
  maxItemsOptionIndex: 0,
  maxItemsDelayInit: 0,
  zebraStripes: true,
  zebraStripesClasses: {
    odd: 'odd',
    even: 'even'
  },
  appendTo: null
};

JSized.Ui.Form.Select.prototype.styleElement = function () {
  this.container = jQuery('<div />').addClass(this.options.containerClass);

  this.wrapper = jQuery('<div><ul></ul><div class="bottom"></div></div>').addClass(this.options.wrapperClass);

  this.appendTo = this.options.appendTo ? jQuery(this.options.appendTo) : this.container;

  this.element.hide().before(this.container);

  this.optList = this.wrapper.find('ul');

  this.optListEntries = jQuery.map(this.element[0].options, this.addOption.bind(this));

  this.selected = jQuery('<a />')
    .addClass(this.options.selectedClass)
    .attr({
      tabIndex: this.element.attr('tabIndex'),
      href: '#'
    })
    .html(this.options.defaultText ? this.options.defaultText : jQuery(this.optListEntries[this.element[0].selectedIndex]).attr('data-display-text'));

  this.element.attr('tabIndex','-1');

  this.container.append(this.selected);
  this.appendTo.append(this.wrapper);

  var self = this;
  this.element.closest('form').bind('reset', function () {
    window.setTimeout(self.onChange.bind(self), 50);
  });

  window.setTimeout(this.maxHeightInit.bind(this), this.options.maxItemsDelayInit);

  this.selected.bind('click', this.toggle.bindAsEventListener(this));
  this.selected.bind('keydown', this.keydown.bindAsEventListener(this));
  this.optList.bind('click', this.click.bindAsEventListener(this));
};

JSized.Ui.Form.Select.prototype.maxHeightInit = function () {

  if (this.options.maxItems !== 'auto' && (this.options.maxItemsUseMaxHeight || this.optListEntries.length >= this.options.maxItems)) {
    var optionToCheck = this.options.maxItemsOptionIndex === -1 ? this.optListEntries.length - 1 : this.options.maxItemsOptionIndex,
      itemHeight = jQuery(this.optListEntries[optionToCheck]).outerHeight(),
      totalHeight = itemHeight * this.options.maxItems,
      style = {
        'overflow-x': 'hidden',
        'overflow-y': 'auto'
      };

    style[(this.options.maxItemsUseMaxHeight ? 'max-height' : 'height')] = totalHeight + 'px';


    this.wrapper.css(style);
  }


};


JSized.Ui.Form.Select.prototype.grabFocus = function () {
  this.selected.focus();
};

JSized.Ui.Form.Select.prototype.onChange = function (event, fromUs) {

  if (typeof fromUs !== 'undefined' && fromUs) {
    return;
  }

  this.selectByIndex(this.element[0].selectedIndex, false);
};

JSized.Ui.Form.Select.prototype.addOption = function (element, i) {
  element = jQuery(element);

  var el = jQuery('<li />').addClass(element.hasClass('all') ? 'all' : '').attr({
      'data-display-text': (this.options.altTextAttribute ? element.attr(this.options.altTextAttribute) || element.html() : element.html())
    }),
    anchor = jQuery('<a />').addClass(element.attr('selected') ? 'selected' : '').attr({
      href: '#',
      tabIndex: '-1'
     }).html(element.html()).appendTo(el);


  if (this.options.zebraStripes) {
    el.addClass(i % 2 === 0 ? this.options.zebraStripesClasses.odd : this.options.zebraStripesClasses.even);
  }

  this.optList.append(el);

  return el[0];

};

JSized.Ui.Form.Select.prototype.toggle = function (e) {
  e.preventDefault();

  if (this.isOpen) {
    this.close(e);
  }
  else {
    this.selected.focus();
    this.open(e);
  }
};


JSized.Ui.Form.Select.prototype.open = function (e) {
  var ctOffset = this.container.offset();
  var ap = this.wrapper.offsetParent();
  var apOffset = ap.offset();
  var top = ctOffset.top + this.container.outerHeight() - apOffset.top - ap.css('borderTopWidth');
  var left = ctOffset.left - apOffset.left - ap.css('borderLeftWidth');

  this.container.addClass('open');
  this.wrapper.addClass('open').css({
    top: top,
    left: left,
    width: this.container.outerWidth()
  });
  this.isOpen = true;

  if (this.options.defaultTextOnOpen) {
    this.selected.html(this.options.defaultText);
  }

  this.element.trigger('selectopen', this);

  window.setTimeout(this.setupEvents.bind(this), 10);
};

JSized.Ui.Form.Select.prototype.close = function (e) {
  this.container.removeClass('open');
  this.wrapper.removeClass('open').css({
    top: '',
    left: '',
    width: ''
  });
  this.optList.find('.current').removeClass('current');
/*  jQuery(this.optListEntries).removeClass('selected'); */
  if (this.selectedIndex >= 0) {
    jQuery('a', this.optListEntries[this.selectedIndex]).addClass('current');
  }
  this.isOpen = false;
  this.element.trigger('selectclose', this);

  this.removeEvents(e);
};


JSized.Ui.Form.Select.prototype.setupEvents = function () {
  var that = this;
  if (this.callbacks) {
    return;
  }

  this.callbacks = Object.map({
    click: this.close,
    keydown: this.keydown,
    mouseover: this.mouseover
  }, function (func, key) {
    var callback = func.bindAsEventListener(that);
    jQuery(document).bind(key, callback);

    return callback;
  });
};

JSized.Ui.Form.Select.prototype.removeEvents = function (e) {

  if (this.callbacks) {
    jQuery.each(this.callbacks, function (index, callback) {
      jQuery(document).unbind(index, callback);
    });
  }

  this.callbacks = false;
};


JSized.Ui.Form.Select.prototype.mouseover = function (e, element) {
  element = e ? jQuery(e.target) : element;

  if (element[0].nodeName.toLowerCase() === 'a') {
    this.optList.find('.current').removeClass('current');
    element.addClass('current');
  }
};

JSized.Ui.Form.Select.prototype.keydown = function (e) {
  var element = this.optList.find('.current'),
    ev_element = jQuery(e.target),
    currentIndex = element ? this.optListEntries.indexOf(element.parent()[0]) : -1,
    newIndex = false;

  switch(JSized.Util.Event.getKeyCode(e)) {
    // Use space to open the Select when it has focus
    case JSized.Util.Event.keyCodes.KEY_SPACE:
      if (ev_element[0] === this.selected[0]) {
        e.stopPropagation();
        e.preventDefault();
        this.open(e);
      }
      break;

    // Tab
    case JSized.Util.Event.keyCodes.KEY_TAB:
      this.close(e);
      this.element.trigger('change', [true]);
      break;

    // Escape
    case JSized.Util.Event.keyCodes.KEY_ESC:
      this.close(e);
      break;

    // Return
    case JSized.Util.Event.keyCodes.KEY_RETURN:
      e.stopPropagation();
      e.preventDefault();
      if (currentIndex !== -1) {
        this.selectByElement(element);
      }
      this.close(e);
      break;

    // Key up
    case JSized.Util.Event.keyCodes.KEY_UP:
      e.stopPropagation();
      e.preventDefault();
      if (this.isOpen) {
        newIndex = currentIndex -1;
      }
      else {
        this.selectByOffset(-1);
      }
      break;

    // Key down
    case JSized.Util.Event.keyCodes.KEY_DOWN:
      e.stopPropagation();
      e.preventDefault();
      if (this.isOpen) {
        newIndex = currentIndex +1;
      }
      else {
        this.selectByOffset(1);
      }
      break;
  }

  if (newIndex !== false) {
    if (newIndex < 0) {
      newIndex = this.optListEntries.length - 1;
    }
    else if (newIndex >= this.optListEntries.length) {
      newIndex = 0;
    }
    this.mouseover(false, jQuery('a', this.optListEntries[newIndex]));
  }
};

JSized.Ui.Form.Select.prototype.click = function (e) {
  var element = e ? jQuery(e.target) : false;

  e.preventDefault();

  if (element[0] && element[0].nodeName.toLowerCase() === 'a') {
    this.selectByElement(element);
    this.close(e);
  }
};


JSized.Ui.Form.Select.prototype.selectByOffset = function (offset) {

  var newIndex = this.element[0].selectedIndex + offset;

  if (newIndex < 0) {
    newIndex = this.optListEntries.length - 1;
  }
  if (newIndex >= this.optListEntries.length) {
    newIndex = 0;
  }

  this.selectByIndex(newIndex, false);

};

JSized.Ui.Form.Select.prototype.selectByElement = function (element) {
  element = jQuery(element);

  var index = parseInt(this.optListEntries.indexOf(element.closest('li')[0]));

  this.selectByIndex(index, true);

};

JSized.Ui.Form.Select.prototype.selectByIndex = function (index, triggerFunction) {

  if (index >= 0 && index < this.element[0].options.length) {
    var oldIndex = this.element[0].selectedIndex,
      textToUse = jQuery(this.optListEntries[index]).attr('data-display-text');

    this.selectedIndex = this.element[0].selectedIndex = index;
    this.selected.html(textToUse);

    if (triggerFunction && oldIndex !== index) {
      this.element.trigger('change', [true]);
    }
  }

};

JSized.Ui.Form.Select.prototype.getDisplayText = function (option) {
  var $option = jQuery(option);
};

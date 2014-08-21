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
	}
};

JSized.Ui.Form.Select.prototype.styleElement = function () {
	this.container = jQuery('<div />').addClass(this.options.containerClass);

	this.wrapper = jQuery('<div><ul></ul><div class="bottom"></div></div>').addClass(this.options.wrapperClass);

	this.element.hide().attr('tabIndex','-1').before(this.container);

	this.optList = this.wrapper.find('ul');

	this.optListEntries = jQuery.map(this.element[0].options, this.addOption.bind(this));

	this.selected = jQuery('<a />')
		.addClass(this.options.selectedClass)
		.attr({
			tabIndex: this.element.attr('tabIndex'),
			href: '#'
		})
		.html(this.options.defaultText ? this.options.defaultText : jQuery(this.optListEntries[this.element[0].selectedIndex]).attr('data-display-text'));

	this.container.append(this.selected).append(this.wrapper);

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
			'data-display-text': (this.options.altTextAttribute ? element.attr(this.options.altTextAttribute) : element.html())
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
	this.container.addClass('open');
	this.isOpen = true;

	if (this.options.defaultTextOnOpen) {
		this.selected.html(this.options.defaultText);
	}

	this.element.trigger('selectopen', this);

	window.setTimeout(this.setupEvents.bind(this), 10);
};

JSized.Ui.Form.Select.prototype.close = function (e) {
	this.container.removeClass('open');
	this.optList.find('.current').removeClass('current');
/* 	jQuery(this.optListEntries).removeClass('selected'); */
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

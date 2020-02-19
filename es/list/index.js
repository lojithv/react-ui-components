import React from 'react';
import { Icon } from '../icon';
export var List = function List(props) {
  var listClass = function listClass() {
    var result = '';
    var className = {
      list: 'list',
      dense: props.dense ? 'dense' : '',
      dark: props.dark ? 'dark' : '',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    className: listClass()
  }, props.header ? React.createElement("div", {
    className: "list-header"
  }, props.header) : '', props.children);
};
export var ListItem = function ListItem(props) {
  var itemClass = function itemClass() {
    var result = '';
    var className = {
      item: 'list-item',
      right: props.right && !props.left ? 'right' : '',
      left: props.left && !props.right ? 'left' : '',
      active: props.isActiveItem && props.isActiveItem(props.item) ? 'active' : '',
      hover: props.hover ? 'hover' : '',
      noDivider: props.noDivider ? '' : 'divider',
      className: props.className ? props.className : ''
    };

    for (var key in className) {
      if (className[key]) result += className[key] + ' ';
    }

    return result.trim();
  };

  return React.createElement("div", {
    onClick: function onClick() {
      return props.onClick ? props.onClick() : {};
    },
    className: itemClass()
  }, !props.render ? React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement("div", {
    className: "row align-center"
  }, props.icon ? React.createElement(Icon, {
    name: props.icon,
    className: "mr-5"
  }) : '', React.createElement("div", {
    className: "list-item__left-side"
  }, props.checkbox, props.item[props.itemTitle] ? props.item[props.itemTitle] : props.item)), React.createElement("div", {
    className: "list-item__right-side"
  }, props.controls)), props.subTitle ? React.createElement("div", {
    className: "list-subtitle"
  }, props.subTitle) : '') : props.render);
};
//# sourceMappingURL=index.js.map
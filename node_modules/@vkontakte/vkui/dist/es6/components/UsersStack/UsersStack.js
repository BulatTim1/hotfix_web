import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { createMasks } from './masks';
createMasks();

var UsersStack = function UsersStack(props) {
  var platform = usePlatform();

  var className = props.className,
      photos = props.photos,
      count = props.count,
      size = props.size,
      vertical = props.vertical,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["className", "photos", "count", "size", "vertical", "children"]);

  var othersCount = Math.max(0, photos.length - count);
  var canShowOthers = othersCount > 0 && size === 'm';
  var photosShown = photos.slice(0, count);
  return React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('UsersStack', platform), className, 'UsersStack--size-' + size, {
      'UsersStack--with-others': canShowOthers,
      'UsersStack--v': vertical
    })
  }), React.createElement("div", {
    className: "UsersStack__photos"
  }, photosShown.map(function (photo, i) {
    return React.createElement("div", {
      key: i,
      className: "UsersStack__photo",
      style: {
        backgroundImage: "url(".concat(photo, ")")
      }
    });
  }), canShowOthers && React.createElement("div", {
    className: "UsersStack__photo UsersStack__photo--others"
  }, "+".concat(othersCount))), children && React.createElement("div", {
    className: "UsersStack__text"
  }, children));
};

UsersStack.defaultProps = {
  photos: [],
  size: 's',
  count: 3
};
export default React.memo(UsersStack);
//# sourceMappingURL=UsersStack.js.map
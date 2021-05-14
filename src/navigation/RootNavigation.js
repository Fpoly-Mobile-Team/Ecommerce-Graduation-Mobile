import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function push(name, params) {
  navigationRef.current?.push(name, params);
}

export function replace(name, params) {
  navigationRef.current?.replace(name, params);
}

export function reset(index, name) {
  navigationRef.current?.reset({
    index,
    routes: [{name}],
  });
}

export function pop(count) {
  navigationRef.current?.pop(count);
}

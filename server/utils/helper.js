import colors from "colors";

export const clearProp = (object, property, nestedProp) =>
  Object.keys(object).forEach((prop) => {
    if (property !== undefined && nestedProp !== undefined) {
      delete object[property][nestedProp];
    } else {
      console.log(`${nestedProp} not found in ${object}.${property}`.red);
    }
  });

export const addProp = (object, prop, val) =>
  Object.defineProperty(object, prop, { value: val, writable: true, enumerable: true, configurable: true });

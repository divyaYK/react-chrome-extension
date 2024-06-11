export const getValueFromLocation = (
  key: string,
  obj: { [x: string]: any },
) => {
  if (key.includes(".")) {
    const allKeys = key.split(".");
    let value = obj;
    for (const eachKey of allKeys) {
      if (typeof value === "object" && value[eachKey] !== undefined) {
        value = value[eachKey];
      } else {
        return undefined;
      }
    }
    return value;
  } else {
    return obj[key];
  }
};

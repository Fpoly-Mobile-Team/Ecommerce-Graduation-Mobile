export const validEmail = email => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(String(email).toLowerCase());
};

export const validPhone = str => {
  var patt = new RegExp(
    /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/,
  );
  return patt.test(str);
};

export const reverseString = str => {
  var arrayOfChars = str.split('');
  var strToArray = arrayOfChars.reverse();
  var newString = strToArray.join('');
  var sliceString = newString.slice(0, 6);
  var toUpString = sliceString.toUpperCase();
  return toUpString;
};

export const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

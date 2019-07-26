export function convertDateToYYYYMMDD (date) {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();
  return [date.getFullYear(),
    (mm>9 ? '' : '0') + mm,
    (dd>9 ? '' : '0') + dd
  ].join('-');
}

export function convertStrToDate (str) {
  const date = str.split(' ');
  const dateString  = date[0].replace(/\D/g,'');
  const year        = dateString.substring(0,4);
  const month       = dateString.substring(4,6);
  const day         = dateString.substring(6,8);
  return new Date(year, month-1, day);
}
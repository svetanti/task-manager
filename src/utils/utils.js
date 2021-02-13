export const setSelectedOption = (list) => list.split(' ').join('-').toLowerCase();

export const setTaskText = (value) => {
  const delimiter = value.indexOf('//');
  return delimiter !== -1 ? value.slice(0, delimiter) : value;
};

export const setNoteText = (value) => {
  const delimiter = value.indexOf('//');
  return delimiter !== -1 ? value.slice(delimiter) : '';
};

export const setDate = () => {
  const DATE_LOCALES = "fr-CA";
  const DATE_OPTIONS = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Intl.DateTimeFormat(DATE_LOCALES, DATE_OPTIONS).format(Date.now());
}
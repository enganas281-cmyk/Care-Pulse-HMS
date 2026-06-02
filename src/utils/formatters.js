export function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function compactNumber(value) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function classNames(...values) {
  return values.filter(Boolean).join(" ");
}

export function getRecordKey(row, index = 0) {
  return row.id || row.name || row.item || row.patient || `${index}`;
}

export function matchesSearch(row, search) {
  if (!search.trim()) return true;
  const haystack = Object.values(row).join(" ").toLowerCase();
  return haystack.includes(search.toLowerCase());
}

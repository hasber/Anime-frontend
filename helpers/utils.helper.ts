/* eslint-disable  @typescript-eslint/no-explicit-any */
export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(number: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number).replace(/\D00$/, '');
}

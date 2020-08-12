
declare module "@ayamejs/humanize" {
  export function duration(time: number): string;
  export function bytes(bytes: number): string;
  export function ordinal(num: number): string;

  const version: string;
  export { version };
}

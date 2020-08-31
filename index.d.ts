
declare module "@ayamejs/humanize" {
  export function duration(time: number): string;
  export function bytes(bytes: number): string;
  export function ordinal(num: number): string;
  export function join(data: string[], sep?: string, word?: string): string;

  const version: string;
  export { version };
}

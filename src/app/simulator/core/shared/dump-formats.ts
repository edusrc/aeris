export type DumpFormat = 'binary' | 'hexadecimal' | 'text';

export interface DumpType {
  id?: string;
  label: DumpFormat;
  description: string;
  type: string;
}

export const DUMP_TYPES: readonly DumpType[] = [
  { id: '1', label: 'binary', description: 'Binary', type: 'bin' },
  { id: '2', label: 'hexadecimal', description: 'Hexadecimal', type: 'hex'},
  { id: '3', label: 'text', description: 'Text', type: 'txt' },
] as const;

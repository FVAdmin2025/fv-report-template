export interface Section {
  id: string;
  title: string;
  content: string;
  subSections?: SubSection[];
}

export interface SubSection {
  id: string;
  title: string;
  content: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ChartData {
  labels: string[];
  values: number[];
  colors: string[];
}

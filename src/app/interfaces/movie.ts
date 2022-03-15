import { Pipe, PipeTransform } from '@angular/core';
export interface Movie {
  title: string;
  date: Date;
  summary?: string;
  genre: string;
  time: string;
}

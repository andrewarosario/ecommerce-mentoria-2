import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

export function getParams(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  const clonedRequest = req.clone({
    setHeaders: {
      'x-access-token': 'MEU_TOKEN',
    },
  });

  return next(clonedRequest).pipe(
    catchError((error) => {
      snackBar.open('Ops, houve um erro', 'Fechar', {
        duration: 5000,
      });
      return throwError(() => error);
    })
  );
};

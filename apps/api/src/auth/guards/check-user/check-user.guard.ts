 import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class CheckUserGuard extends AuthGuard('check-user') {
   canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
 
    const result = super.canActivate(context);

     if (result instanceof Promise) {
      return result.catch((error) => {
         if (error.message === 'No auth token') {
           const request = context.switchToHttp().getRequest();
          request.user = null;
           return true;
        }
         throw error;
      });
    }
 
    if (result instanceof Observable) {
      return new Observable((subscriber) => {
        result.subscribe({
          next: (value) => subscriber.next(value),
          error: (error) => {
     
            if (error.message === 'No auth token') {
             
              const request = context.switchToHttp().getRequest();
              request.user = null;
        
              subscriber.next(true);
              subscriber.complete();
            } else {
        
              subscriber.error(error);
            }
          },
          complete: () => subscriber.complete(),
        });
      });
    }

 
    return result;
  }

   handleRequest(err: any, user: any, info: any) {
     return user;
  }
}

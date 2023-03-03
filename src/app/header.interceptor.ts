import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders({
        'app-id': '63dcc744a93a9090e7304e3b'
    });

    const request = req.clone({ headers });
    return next.handle(request);
  }
}

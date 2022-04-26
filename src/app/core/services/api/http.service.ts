import {HttpClient} from "@angular/common/http";
import {environment} from "@root/environments/environment";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = environment.apiUrl;
  constructor(protected http: HttpClient) {}

  get<R>(url: string): Observable<R> {
    return this.http.get<R>(this.apiUrl + url)
  }

  post<T, R>(url: string, data: T, options?: any): Observable<any> {
    return this.http.post<R>(this.apiUrl + url, data, options);
  }

  patch<T, R>(url: string, data: T, options?: any): Observable<any> {
    return this.http.patch<R>(this.apiUrl + url, data, options);
  }
}

import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Course } from '../Shared/employee';

@Injectable({
	providedIn: 'root',
})
export class courseService {
	private REST_API_SERVER_URL = 'http://localhost:3000';
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private httpClient: HttpClient) { }

	getAllCourse(): Observable<Course[]> {
		const url = this.REST_API_SERVER_URL + '/courses';

		return this.httpClient
			.get<Course[]>(url, this.httpOptions)
			.pipe(catchError(this.handleError));
	}

	createCourse(course: any): Observable<Course> {
		return this.httpClient
			.post<Course>(
				this.REST_API_SERVER_URL + '/courses',
				course,
				this.httpOptions
			)
	}


	private handleError(error: HttpErrorResponse) {
		if (error.status === 404) {
			return throwError(
				() => new Error(error.statusText)
			);
		} else {
			return throwError(
				() => new Error(error.message)
			);
		}
	}
}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { courseService } from './http.service';
import { Course } from '../Shared/employee';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


describe('HttpService', () => {
	let service: courseService;
	let httpController: HttpTestingController;
	let url = 'http://localhost:3000';
	const expectedCourses: Course[] =
		[
			{ "id": 1, "name": "course 1", "numberOfLessons": 24 },
			{ "id": 2, "name": "course 2", "numberOfLessons": 18 },
			{ "id": 3, "name": "course 3", "numberOfLessons": 12 },
			{ "id": 4, "name": "course 4", "numberOfLessons": 10 },
			{ "id": 5, "name": "course 5", "numberOfLessons": 25 },
		];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				courseService
			]
		});
		service = TestBed.inject(courseService);
		httpController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpController.verify(); //Xác minh rằng không có request chưa khớp nào còn tồn đọng.
	});

	it('Nên trả về tất cả khóa học',(done) => {
		service.getAllCourse().subscribe({
			next: courses => {
				expect(courses).toEqual(expectedCourses); //Mong đợi giá trị thực tế bằng với dự kiến, sử dụng ===
				console.log(courses);
				done();
			},
		});

		//Mong đợi rằng một yêu cầu duy nhất đã được thực hiện phù hợp với các tham số đã cho và trả về mô hình(mock) của nó.
		const req = httpController.expectOne({ 
			method: 'GET',
			url: `${url}/courses`,
		});

		req.flush(expectedCourses); //gửi response
	});


	//# POST COURSE
	it('Nên tạo thêm 1 khóa học', (done) => {
		const newCourse = { id: 7, name: 'course 7', numberOfLessons: 19 };

		service.createCourse(newCourse).subscribe({
			next: course => {
				console.log(course);
				expect(course).toEqual(newCourse);
				done();
			}
		});

		const req = httpController.expectOne({
			method: 'POST',
			url: `${url}/courses`,
		});

		expect(req.request.method).toEqual('POST');
		expect(req.request.body).toEqual(newCourse);

		const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: newCourse });
		req.event(expectedResponse);
	});

	it('Nên trả về lỗi 404', (done) => {
		const newCourse = { id: 7, name: 'course 7', numberOfLessons: 19 };
		const msg = '404 error';

		service.createCourse(newCourse).subscribe({
			error: (error: HttpErrorResponse) => {
				console.log(error);
				expect(error).toBeTruthy();
			  	expect(error.status).withContext('status').toEqual(404);
			  	expect(error.statusText).withContext('statusText').toEqual('Not Found');
				done();
			}
		});

		const req = httpController.expectOne({
			method: 'POST',
			url: `${url}/courses`,
		});

		// Respond with mock error
		req.flush(msg, { status: 404, statusText: 'Not Found' });
	});
});



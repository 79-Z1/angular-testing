import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { courseService } from './Sevices/http.service';

describe('AppComponent', () => {
	let appComponent: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientTestingModule],
			declarations: [AppComponent, CounterComponent],
			providers: [courseService],
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		appComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('nên khởi tạo component app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it('Tiêu đề nên là unit-test', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('unit-test');
	});
});

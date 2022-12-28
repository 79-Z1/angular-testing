import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { courseService } from './Sevices/http.service';

describe('AppComponent', () => {
	let appComponent: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HttpClientTestingModule
			],
			declarations: [
				AppComponent,
				CounterComponent
			],
			providers: [courseService]
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		appComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {

	});

});

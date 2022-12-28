import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { take, toArray } from 'rxjs/operators';

import { click, expectText, setFieldValue } from '../../helpers/testing-helper';
import { By } from '@angular/platform-browser';


describe('CounterComponent', () => {
	const startCount = 100;
	const newCount = 200;

	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;

	function expectCount(count: number): void {
		expectText(fixture, 'count', String(count));
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CounterComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		component.startCount = startCount;
		component.ngOnChanges();
		fixture.detectChanges();
	});

	it('Hiển thị count', () => {
		expectCount(startCount);
	});

	it('Tăng count lên 1 đơn vị', () => {
		click(fixture, 'increment-button');
		fixture.detectChanges();
		expectCount(startCount + 1);
	});

	it('Giảm count xuống 1 đơn vị', () => {
		click(fixture, 'decrement-button');
		fixture.detectChanges();
		expectCount(startCount - 1);
	});

	it('reset biến count', () => {
		setFieldValue(fixture, 'reset-input', String(newCount));
		click(fixture, 'reset-button');
		fixture.detectChanges();
		expectCount(newCount);
	});

	it('không reset nếu giá trị không phải là số', () => {
		const value = 'not a number';
		setFieldValue(fixture, 'reset-input', value);
		click(fixture, 'reset-button');
		fixture.detectChanges();
		expectCount(startCount);
	});

	it('emits countChange events', () => {
		let actualCounts: number[] | undefined;
		component.countChange.pipe(take(3), toArray()).subscribe((counts) => {
			actualCounts = counts;
		});

		click(fixture, 'increment-button');
		click(fixture, 'decrement-button');
		setFieldValue(fixture, 'reset-input', String(newCount));
		click(fixture, 'reset-button');

		expect(actualCounts).toEqual([startCount + 1, startCount, newCount]);
	});
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { TestComponent } from '../test/test.component';

describe('HighlightDirective', () => {
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HighlightDirective, TestComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();
	});

	it('Màu nền mặc định nên là đỏ', () => {
		const element = fixture.debugElement.queryAll(By.directive(HighlightDirective));
		const elBGRColor = element[0].nativeElement.style.backgroundColor;
		expect(elBGRColor).toBe('red');
	});

	it('Đổi nền sang màu vàng khi đưa con trỏ chuột vào', () => {
		const element = fixture.debugElement.queryAll(By.directive(HighlightDirective));
		const h1 = element[0].nativeElement as HTMLHeadingElement;
		h1.dispatchEvent(new MouseEvent('mouseenter'));
		expect(h1.style.backgroundColor)
		.toBe('yellow');
	});

	it('Đổi nền sang màu mặc định khi đưa con trỏ chuột ra', () => {
		const element = fixture.debugElement.queryAll(By.directive(HighlightDirective));
		const h1 = element[0].nativeElement as HTMLHeadingElement;
		h1.dispatchEvent(new MouseEvent('mouseleave'));
		expect(h1.style.backgroundColor)
		.toBe('');
	});

});

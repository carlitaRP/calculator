import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiComponent } from './ui.component';

// Importa las funciones directamente
import { addition } from '../addition/addition';
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { division } from '../division/division';
import { sqrt } from '../sqrt/sqrt';

describe('UiComponent Integration Tests', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should perform addition operation on button click', fakeAsync(() => {
    // Arrange
    component.operator1 = 2;
    component.operator2 = 3;

    // Act
    component.addition();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.result).toEqual(5);
  }));

  it('should perform subtraction operation on button click', fakeAsync(() => {
    // Arrange
    component.operator1 = 8;
    component.operator2 = 3;

    // Act
    component.substraction();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.result).toEqual(5);
  }));

  it('should perform multiplication operation on button click', fakeAsync(() => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 4;

    // Act
    component.multiplication();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.result).toEqual(20);
  }));

  it('should perform division operation on button click', fakeAsync(() => {
    // Arrange
    component.operator1 = 10;
    component.operator2 = 2;

    // Act
    component.division();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.result).toEqual(5);
  }));

  it('should perform square root operation on button click', fakeAsync(() => {
    // Arrange
    component.operator1 = 25;

    // Act
    component.sqrt();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.result).toEqual(5);
  }));
});



/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { Coffee } from './coffee';
import { CoffeeComponent } from './coffee.component';
import { CoffeeService } from './coffee.service';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('Service: Coffee', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CoffeeComponent],
      providers: [CoffeeService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;

    component.coffees = [
      new Coffee(faker.datatype.number(10), faker.name.firstName(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number({ min: 10, max: 100 }), faker.image.avatar()),
      new Coffee(faker.datatype.number(10), faker.name.firstName(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number({ min: 10, max: 100 }), faker.image.avatar()),
      new Coffee(faker.datatype.number(10), faker.name.firstName(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number({ min: 10, max: 100 }), faker.image.avatar())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create service ...', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have <th> with textContent "Nombre"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const th = bannerElement.querySelectorAll('th')!;
    expect(th[1].textContent).toEqual('Nombre');
  });

  it('should have 4 element "tr" (1 thead tr, 3 tr rows)', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const tr = bannerElement.querySelectorAll('tr')!;
    expect(tr.length).toBe(4);
  });

  it('should have <p> wich includes "Total café de origen"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p')!;
    expect(p.textContent).toContain('Total café de origen');
  });

});

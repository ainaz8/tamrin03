import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privatetemplet } from './privatetemplet';

describe('Privatetemplet', () => {
  let component: Privatetemplet;
  let fixture: ComponentFixture<Privatetemplet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privatetemplet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privatetemplet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

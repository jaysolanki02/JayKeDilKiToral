import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bride } from './bride';

describe('Bride', () => {
  let component: Bride;
  let fixture: ComponentFixture<Bride>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bride]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bride);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

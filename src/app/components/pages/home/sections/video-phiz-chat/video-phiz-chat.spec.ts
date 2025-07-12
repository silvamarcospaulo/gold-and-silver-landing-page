import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPhizChat } from './video-phiz-chat';

describe('VideoPhizChat', () => {
  let component: VideoPhizChat;
  let fixture: ComponentFixture<VideoPhizChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPhizChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPhizChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

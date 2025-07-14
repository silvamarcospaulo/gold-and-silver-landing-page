import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-video-seo',
  imports: [],
  templateUrl: './video-seo.html',
  styleUrl: './video-seo.scss'
})
export class VideoSeo implements AfterViewInit {
  @ViewChild('videoElement', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoRef.nativeElement;
    console.log('Video carregado:', video);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((e) => console.error('Erro ao reproduzir:', e));
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(video);
  }
}

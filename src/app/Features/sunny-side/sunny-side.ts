import { Component } from '@angular/core';
import { HeaderSection } from "../sunnyside-sections/header-section/header-section";
import { TransformationSection } from "../sunnyside-sections/transformation-section/transformation-section";
import { StandingOutSection } from "../sunnyside-sections/standing-out-section/standing-out-section";
import { GallerySection } from "../sunnyside-sections/gallery-section/gallery-section";
import { TestimonialsSection } from "../sunnyside-sections/testimonials-section/testimonials-section";
import { SunnysideImagesSection } from "../sunnyside-sections/sunnyside-images-section/sunnyside-images-section";
import { SunnysideFooterSection } from "../sunnyside-sections/sunnyside-footer-section/sunnyside-footer-section";

@Component({
  selector: 'app-sunny-side',
  imports: [HeaderSection, TransformationSection, StandingOutSection, GallerySection, TestimonialsSection, SunnysideImagesSection, SunnysideFooterSection],
  templateUrl: './sunny-side.html',
  styleUrl: './sunny-side.css',
})
export class SunnySide {

}

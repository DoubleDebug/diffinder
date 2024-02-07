import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import SingleImage from './SingleImage';
import { onMount } from 'solid-js';

const ImageSwiper = (data: DifferenceMetadata) => {
  onMount(
    () =>
      new Swiper('.swiper', {
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
  );

  return (
    <div class="flex w-[90vw]">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <SingleImage left data={data} />
          </div>
          <div class="swiper-slide">
            <SingleImage data={data} />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default ImageSwiper;

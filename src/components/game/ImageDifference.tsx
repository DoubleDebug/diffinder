import ImageSwiper from './ImageSwiper';
import SingleImage from './SingleImage';

const ImageDifference = (data: DifferenceMetadata) => {
  return (
    <>
      <div class="hidden sm:flex gap-[10px]">
        <SingleImage left data={data} />
        <SingleImage data={data} />
      </div>
      <div class="flex sm:hidden justify-center items-center">
        <ImageSwiper {...data} />
      </div>
    </>
  );
};

export default ImageDifference;

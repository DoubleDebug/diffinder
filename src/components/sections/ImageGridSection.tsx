import ImagePreview from '../game/ImagePreview';

const ImageGridSection = () => {
  return (
    <section class="bg-white dark:bg-gray-900 pt-8 pb-24">
      <div class="py-4 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {Array(6)
            .fill('')
            .map((_, index) => (
              <ImagePreview index={index + 1} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGridSection;

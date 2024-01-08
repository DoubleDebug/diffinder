const ImagePreview = (data: DifferenceMetadata) => {
  return (
    <div class="flex flex-col text-center">
      <img
        class="object-contain h-[250px] mb-2"
        src={`/images/${data["image-left"]}`}
      />
      <h3 class="mb-1 text-xl font-bold dark:text-white">{data.name}</h3>
      <p class="text-gray-500 dark:text-gray-400">
        Find all <strong>{data.differences.length}</strong> differences
      </p>
    </div>
  );
};

export default ImagePreview;

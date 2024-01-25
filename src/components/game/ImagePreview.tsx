type Props = {
  data: DifferenceMetadata;
};

const ImagePreview = (props: Props) => {
  const { data } = props;
  return (
    <div class="flex flex-col items-center">
      <a href={`/games/${props.data.id}`} class="cursor-pointer">
        <img
          class="object-contain h-[250px] mb-2"
          src={`/images/${data['image-left']}`}
        />
      </a>
      <h3 class="mb-1 text-xl font-bold dark:text-white">{data.name}</h3>
      <p class="text-gray-500 dark:text-gray-400">
        Find all <strong>{data.differences.length}</strong> differences
      </p>
    </div>
  );
};

export default ImagePreview;

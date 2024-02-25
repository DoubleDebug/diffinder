import SingleImage from './SingleImage';

const ImageDifference = (data: DifferenceMetadata) => {
  return (
    <>
      <div class="grid sm:flex gap-[10px]">
        <SingleImage left data={data} />
        <SingleImage data={data} />
      </div>
    </>
  );
};

export default ImageDifference;

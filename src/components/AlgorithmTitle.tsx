const AlgorithmTitle = ({ name }: { name: string }) => {
  return (
    <h1 className="mx-auto w-max text-3xl font-bold border-b-2 border-black pb-1">
      {name}
    </h1>
  );
};

export default AlgorithmTitle;

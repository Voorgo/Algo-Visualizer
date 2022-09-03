const AlgorithmMain = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <main className="w-full flex flex-col gap-3">{children}</main>;
};

export default AlgorithmMain;

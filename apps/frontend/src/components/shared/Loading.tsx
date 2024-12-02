import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-96">
      <Image src="/loading.gif" alt="Loading" width={60} height={60} />
    </div>
  );
};

export default Loading;

const AlreadySortedModal = () => {
  return (
    <div className="flex px-3 py-2 gap-3 absolute right-[20px] top-[20px] bg-white shadow-[3px_4px_8px_-1px_gray] rounded text-xl font-semibold items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="red"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <p>Array already sorted!</p>
    </div>
  );
};

export default AlreadySortedModal;

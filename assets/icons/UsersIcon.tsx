interface Props {
  className?: string;
}

const UsersIcon = (props: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 16.6666C17.5 15.2153 16.1087 13.9806 14.1667 13.523M12.5 16.6667C12.5 14.8257 10.2614 13.3334 7.5 13.3334C4.73858 13.3334 2.5 14.8257 2.5 16.6667M12.5 10.8334C14.3409 10.8334 15.8333 9.34097 15.8333 7.50002C15.8333 5.65907 14.3409 4.16669 12.5 4.16669M7.5 10.8334C5.65905 10.8334 4.16667 9.34097 4.16667 7.50002C4.16667 5.65907 5.65905 4.16669 7.5 4.16669C9.34095 4.16669 10.8333 5.65907 10.8333 7.50002C10.8333 9.34097 9.34095 10.8334 7.5 10.8334Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;

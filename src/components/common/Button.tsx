const Button = ({
  onClick,
  content,
}: {
  onClick?: () => void;
  content: JSX.Element | string | number;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'transparent',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        height: '2.5rem',
      }}
    >
      {content}
    </button>
  );
};

export default Button;

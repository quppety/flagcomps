import { ButtonProps } from './Button.types';

const Button = ({ onClick, labelContent }: ButtonProps) => {
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
      {labelContent}
    </button>
  );
};

export default Button;

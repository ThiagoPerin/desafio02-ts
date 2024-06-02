import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
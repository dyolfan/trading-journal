import { FunctionComponent } from 'react';

type PencilIconProps = {
  isVisible?: boolean;
  isHovered?: boolean;
  height?: number;
  width?: number;
  hoverColor?: string;
  color?: string;
};

const PencilIcon: FunctionComponent<PencilIconProps> = ({
  isVisible = false,
  isHovered = false,
  height = 24,
  width = 24,
  hoverColor = 'black',
  color = 'white',
}) => {
  const strokeColor = isHovered ? hoverColor : color;
  return isVisible ? (
    <svg
      className="feather feather-edit-2"
      fill="none"
      height={height}
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ) : (
    <span />
  );
};

export default PencilIcon;

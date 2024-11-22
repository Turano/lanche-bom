import * as Styled from './styles';

export type TextareaProps = {
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

export const Textarea: React.FC<TextareaProps> = ({
  value = '',
  placeholder = 'Type something...',
  rows = 5,
  cols = 30,
  onChange,
  disabled = false,
}) => {
  return (
    <Styled.Textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

import { AccessibilityButton } from '../../components/AccessibilityButton';
import { MainHeader } from '../../components/MainHeader';
import { ScrollJumpButton } from '../../components/ScrollJumpButton';
import { ScrollJump, Wrapper } from './styles';

export const Cardapio: React.FC = () => {
  return (
    <Wrapper>
      <MainHeader />
      <ScrollJump>
        <ScrollJumpButton icon="hamburger" />
        <ScrollJumpButton icon="hotdog" />
        <ScrollJumpButton icon="drink" />
        <ScrollJumpButton icon="pastel" />
      </ScrollJump>
      <AccessibilityButton />
    </Wrapper>
  );
};

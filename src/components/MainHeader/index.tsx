import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Logo } from './styles';
import { SearchButton } from '../SearchButton';

export const MainHeader = () => {
  return (
    <HeaderContainer>
      <HamburgerMenu />
      <Logo
        src="src/assets/logo.png"
        alt="Logo do lanche bom: Uma tampinha de garrafa vermelha contendo o texto Lanche Bom e Pastelaria"
      />
      <SearchButton />
    </HeaderContainer>
  );
};

import { Link } from 'react-router-dom';

// react-bootstrap
import Image from 'react-bootstrap/Image';

// project-import
import { APP_DEFAULT_PATH, MenuOrientation, ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// assets
import logo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';

export const DrawerHeader = ({ sidebarTheme }) => {
  const { mode, menuOrientation } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL;
  const imgSrc = isHorizontal ? (mode === ThemeMode.DARK ? logo : DarkLogo) : sidebarTheme === true ? DarkLogo : logo;

  return (
    <div className="m-header">
      <Link to={APP_DEFAULT_PATH} className="b-brand text-primary">
        <Image src={imgSrc} fluid className="logo logo-lg" alt="logo" />
      </Link>
    </div>
  );
};

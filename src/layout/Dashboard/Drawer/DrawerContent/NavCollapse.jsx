import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';

// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import NavItem from './NavItem';
import { useGetMenuMaster } from 'api/menu';
import useConfig from 'hooks/useConfig';
import { MenuOrientation, ThemeDirection } from 'config';

// ==============================|| NAVIGATION - COLLAPSE ||============================== //

export default function NavCollapse({ menu, level, parentId, setSelectedItems, selectedItems, setSelectedLevel, selectedLevel }) {
  const { menuMaster } = useGetMenuMaster();
  const navigation = useNavigate();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { menuOrientation, themeDirection } = useConfig();
  const { pathname } = useLocation();
  const currentPath = pathname;

  const isMenuActive = useCallback((menu, currentPath) => {
    if (menu.type === 'item') {
      return menu.url === currentPath;
    }
    if (menu.type === 'collapse' && Array.isArray(menu.children)) {
      return menu.children.some((child) => isMenuActive(child, currentPath));
    }
    return false;
  }, []);

  const active = useMemo(() => isMenuActive(menu, currentPath), [isMenuActive, menu, currentPath]);

  const handleClick = (isRedirect) => {
    setSelectedLevel(level);
    const willOpen = !open;
    setOpen(willOpen);
    setSelected(willOpen ? menu.id : null);
    setSelectedItems(willOpen ? menu : undefined);
    if (menu.url && isRedirect) navigation(menu.url);
  };

  useEffect(() => {
    if (selected === selectedItems?.id) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);

        if (drawerOpen) {
          setSelected(null);
        }
      }
    }
  }, [selectedItems, level, selected, drawerOpen, selectedLevel]);

  useEffect(() => {
    if (pathname === menu.url) {
      setSelected(menu.id);
    }
  }, [pathname, menu.id, menu.url]);

  const checkOpenForParent = useCallback(
    (child, id) => {
      child.forEach((item) => {
        if (item.url === pathname) {
          setOpen(true);
          setSelected(id);
        }
      });
    },
    [pathname]
  );

  // menu collapse for sub-levels
  useEffect(() => {
    setOpen(false);
    if (!menu.children) return;

    for (const item of menu.children) {
      if (item.children?.length) {
        checkOpenForParent(item.children, menu.id);
      }

      if (item.link && matchPath({ path: item?.link, end: false }, pathname)) {
        setSelected(menu.id);
        setOpen(true);
        break;
      }

      if (item.url === pathname) {
        setSelected(menu.id);
        setOpen(true);
        break;
      }
    }
  }, [pathname, menu.id, menu.children, checkOpenForParent]);

  useEffect(() => {
    if (menu.url === pathname) {
      setSelected(menu.id);
      setOpen(true);
    }
  }, [pathname, menu.url, menu.id]);
  const navCollapse = useMemo(
    () =>
      menu.children?.map((item) => {
        switch (item.type) {
          case 'collapse':
            return (
              <NavCollapse
                key={item.id}
                setSelectedItems={setSelectedItems}
                setSelectedLevel={setSelectedLevel}
                selectedLevel={selectedLevel}
                selectedItems={selectedItems}
                menu={item}
                level={level + 1}
                parentId={parentId}
              />
            );
          case 'item':
            return <NavItem key={item.id} item={item} level={level + 1} />;
          default:
            return (
              <h6 key={item.id} className="text-danger align-center">
                Fix - Collapse or Item
              </h6>
            );
        }
      }) ?? [],
    [menu.children, setSelectedItems, setSelectedLevel, selectedLevel, selectedItems, level, parentId]
  );

  const isTab = menuOrientation === MenuOrientation.TAB;
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL;
  const containerRef = useRef(null);
  const submenuRef = useRef(null);
  const [isEdge, setIsEdge] = useState(false);

  if (isTab) {
    return (
      <ListGroup className={`pc-item pc-hasmenu ${open ? 'pc-trigger' : ''} ${active ? 'active' : ''}`}>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id={`tooltip-${menu.title}`}>
              <FormattedMessage id={menu.title} />
            </Tooltip>
          }
        >
          <Link
            to="#!"
            className="pc-link"
            onClick={() => {
              handleClick(!open);
            }}
          >
            {menu.icon && (
              <span className="pc-micon">
                <i className={menu.icon} />
              </span>
            )}
          </Link>
        </OverlayTrigger>
      </ListGroup>
    );
  }

  // Horizontal: do not use Collapse; render submenu as hoverable list to match CSS
  if (isHorizontal) {
    const handleEnter = () => {
      try {
        const rect = containerRef.current?.getBoundingClientRect();
        const submenuWidth = submenuRef.current?.offsetWidth ?? 240;
        const rightEdge = (rect?.left ?? 0) + submenuWidth;
        setIsEdge(rightEdge > window.innerWidth);
      } catch {
        setIsEdge(false);
      }
      setOpen(true);
    };
    const handleLeave = () => setOpen(false);
    return (
      <ListGroup
        ref={containerRef}
        className={`pc-item pc-hasmenu ${open ? 'pc-trigger' : ''} ${active ? 'active' : ''}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <Link className="pc-link" to="#!" onClick={() => handleClick(false)}>
          {menu.icon && (
            <span className="pc-micon">
              <i className={menu.icon} />
            </span>
          )}
          <span className="pc-mtext">
            <FormattedMessage id={menu.title} />
          </span>
          <span className="pc-arrow">
            <i className={`ti ti-chevron-right`} />
          </span>
          {menu.badge && <Badge className="pc-badge">{menu.badge}</Badge>}
        </Link>
        <ul ref={submenuRef} className={`pc-submenu ${(themeDirection === ThemeDirection.RTL || isEdge) && 'edge'}`}>
          {navCollapse}
        </ul>
      </ListGroup>
    );
  }

  return (
    <ListGroup className={`pc-item pc-hasmenu ${open ? 'pc-trigger' : ''}`}>
      <Link className="pc-link" to="#!" onClick={() => handleClick(true)}>
        {menu.icon && (
          <span className="pc-micon">
            <i className={menu.icon} />
          </span>
        )}
        <span className="pc-mtext">
          <FormattedMessage id={menu.title} />
        </span>
        <span className="pc-arrow">
          <i className={`ti ti-chevron-right`} />
        </span>
        {menu.badge && <Badge className="pc-badge">{menu.badge}</Badge>}
      </Link>
      <Collapse in={open} mountOnEnter unmountOnExit>
        <div>
          <ul className={`pc-submenu ${themeDirection === ThemeDirection.RTL && 'edge'}`}>{navCollapse}</ul>
        </div>
      </Collapse>
    </ListGroup>
  );
}

NavCollapse.propTypes = {
  menu: PropTypes.any,
  level: PropTypes.number,
  parentId: PropTypes.string,
  setSelectedItems: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  selectedItems: PropTypes.any,
  setSelectedLevel: PropTypes.func,
  selectedLevel: PropTypes.number
};

import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react-bootstrap
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import Navigation from '../DrawerContent';
import { useGetMenuMaster, handlerDrawerOpen } from 'api/menu';
import SimpleBarScroll from 'components/third-party/SimpleBar';
import useConfig from 'hooks/useConfig';
import menuItems from 'menu-items';

export default function TabDrawerContent({ selectedItems, setSelectedItems }) {
  const { onChangeMenuOrientation } = useConfig();
  const [selectTab, setSelectTab] = useState(menuItems.items[0]);
  const { menuMaster } = useGetMenuMaster();
  const { pathname } = useLocation();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const [open, setOpen] = useState({});

  const collectDescendantIds = useCallback((entry) => {
    const ids = [];
    const walk = (node) => {
      if (!node?.children) return;
      node.children.forEach((child) => {
        if (child.id) ids.push(child.id);
        walk(child);
      });
    };
    walk(entry);
    return ids;
  }, []);

  const handleClick = (item, siblings) => {
    if (!item.id) return;

    const isMobile = window.innerWidth <= 1024;

    setOpen((prev) => {
      const next = { ...prev };

      // Close siblings at the same level (accordion behavior)
      if (Array.isArray(siblings)) {
        siblings.forEach((sib) => {
          if (sib.id && sib.id !== item.id) {
            next[sib.id] = false;
            // also close all descendants of closed sibling
            collectDescendantIds(sib).forEach((descId) => {
              next[descId] = false;
            });
          }
        });
      }

      // Toggle the clicked item
      const willOpen = !prev[item.id];
      next[item.id] = willOpen;

      // If closing the clicked item, also close its descendants
      if (!willOpen) {
        collectDescendantIds(item).forEach((descId) => {
          next[descId] = false;
        });
      }

      return next;
    });

    if (isMobile || !drawerOpen) {
      setSelectedItems(item);

      // On mobile, close sidebar when clicking on items with URLs (same as vertical layout)
      if (isMobile && item.url) {
        handlerDrawerOpen(false);
      }
    }
  };

  const isActive = useCallback(
    (item) => {
      if (!item.url) return false;
      return pathname.toLowerCase().includes(item.url.toLowerCase());
    },
    [pathname]
  );

  const autoOpenParents = useCallback(
    (items) => {
      const openMap = {};

      const findAndMark = (entries = []) => {
        entries.forEach((item) => {
          if (item.children) {
            const match = item.children.find((child) => isActive(child) || child.children?.some(isActive));
            if (match) openMap[item.id] = true;

            findAndMark(item.children);
          }
        });
      };

      findAndMark(items);
      setOpen(openMap);
    },
    [isActive, setOpen]
  );

  useEffect(() => {
    autoOpenParents(selectTab?.children);
  }, [autoOpenParents, selectTab]);

  return (
    <>
      <div className="tab-sidemenu">
        <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
          <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSelectTab={setSelectTab} />
        </SimpleBarScroll>
      </div>
      <div className="tab-link">
        <div className="navbar-content pc-trigger">
          <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
            <ul className="pc-navbar">
              {selectTab?.children?.map((item) => (
                <ListGroup
                  key={item.id}
                  className={`pc-item pc-hasmenu ${open[item.id] ? 'pc-trigger' : ''} ${isActive(item) ? 'active' : ''}`}
                >
                  <Link to={item.url || '#'} className="pc-link" onClick={() => handleClick(item, selectTab?.children)}>
                    {item.icon && (
                      <span className="pc-micon">
                        <i className={item.icon} />
                      </span>
                    )}
                    <span className="pc-mtext">
                      <FormattedMessage id={item.title} />
                    </span>
                    {item.type === 'collapse' && (
                      <span className="pc-arrow">
                        <i className="ti ti-chevron-right" />
                      </span>
                    )}
                  </Link>

                  {item.children && (
                    <Collapse in={!!open[item.id]} mountOnEnter unmountOnExit>
                      <div>
                        <ul className="pc-submenu">
                          {item.children.map((child) => (
                            <li
                              key={child.id}
                              className={`pc-item ${child.type === 'collapse' ? 'pc-hasmenu' : ''} ${open[child.id] ? 'pc-trigger' : ''} ${isActive(child) ? 'active' : ''}`}
                            >
                              <Link
                                to={child.url || '#'}
                                className="pc-link"
                                onClick={() => {
                                  handleClick(child, item.children);
                                  if (child?.layout === child?.title) {
                                    onChangeMenuOrientation(child?.layout);
                                  }
                                }}
                              >
                                {child.icon && (
                                  <span className="pc-micon">
                                    <i className={child.icon} />
                                  </span>
                                )}
                                <FormattedMessage id={child.title} />
                                {child.type === 'collapse' && (
                                  <span className="pc-arrow">
                                    <i className="ti ti-chevron-right" />
                                  </span>
                                )}
                              </Link>

                              {child.children && (
                                <Collapse in={!!open[child.id]} mountOnEnter unmountOnExit>
                                  <div>
                                    <ul className="pc-submenu">
                                      {child.children.map((value) => (
                                        <li
                                          key={value.id}
                                          className={`pc-item ${value.type === 'collapse' ? 'pc-hasmenu' : ''} ${open[value.id] ? 'pc-trigger' : ''} ${isActive(value) ? 'active' : ''}`}
                                        >
                                          <Link
                                            className="pc-link"
                                            to={value.url || ''}
                                            onClick={() => {
                                              handleClick(value, child.children);
                                              if (value?.layout === value?.title) {
                                                onChangeMenuOrientation(value?.layout);
                                              }
                                            }}
                                          >
                                            {value.icon && (
                                              <span className="pc-micon">
                                                <i className={value.icon} />
                                              </span>
                                            )}
                                            <FormattedMessage id={value.title} />
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </Collapse>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Collapse>
                  )}
                </ListGroup>
              ))}
            </ul>
          </SimpleBarScroll>
        </div>
      </div>
    </>
  );
}

TabDrawerContent.propTypes = { selectedItems: PropTypes.any, setSelectedItems: PropTypes.oneOfType([PropTypes.func, PropTypes.any]) };

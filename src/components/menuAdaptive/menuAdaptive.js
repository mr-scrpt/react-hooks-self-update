import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import s from './menuAdaptive.module.css';
import { CSSTransition } from 'react-transition-group';

import { menuOutsideClose } from '@hl/menuOutsideClose';

export const MenuAdaptive = ({ menu }) => {
	const menuRef = useRef(null);
	const [isMenuOpen, setMenuOpen] = useState(true);

	const menuWrap = cx({
		[s.nav__inner]: true,
		[s.nav__inner_open]: isMenuOpen
	});

	useEffect(
		() => {
			const closer = menuOutsideClose(menuRef, setMenuOpen);
			return () => {
				closer();
			};
		},
		[menuRef]
	);

	const handleClick = () => {
		setMenuOpen(false);
	};

	return (
		<nav className={s.nav} ref={menuRef}>
			<div className={s.nav__wrap}>
				<CSSTransition
					timeout={250}
					mountOnEnter
					unmountOnExit
					in={!isMenuOpen}
					classNames={{
						enter: s.open_enter,
						enterActive: s.open_enterActive,
						enterDone: s.open_enterDone,
						exit: s.open_exit,
						exitActive: s.open_exitActive,
						exitDone: s.open_exitDone
					}}
				>
					<span className={`${s.nav__link} ${s.nav__open}`} onClick={() => setMenuOpen(true)}>
						<i className={`material-icons`}>menu</i>
					</span>
				</CSSTransition>
				<div className={menuWrap}>
					<span className={`${s.nav__link} ${s.nav__close}`} onClick={() => setMenuOpen(false)}>
						<i className={`material-icons ${s.buttonIcon}`}>close</i>
					</span>
					{menu.map((item) => {
						return (
							<NavLink to={item.to} className={s.nav__link} onClick={handleClick} key={item.name}>
								{item.icon && <i className={`material-icons ${s.nav__linkIcon}`}>{item.icon}</i>}
								<span className={`link-text ${s.nav__linkText}`}>{item.name}</span>
							</NavLink>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

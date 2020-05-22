import React from 'react';
import { connect } from 'react-redux';

import { getUserAuth, getIsLoggedIn } from 'modules/userAuth';

import { menuList } from 'helpers/menuList';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components/logo';
import { MenuAdaptive } from 'components/menuAdaptive';

import { Button, ButtonWithIcon, ButtonWithImg } from 'components/buttons';
import AvatarDefault from 'assets/img/avatar_default.jpg';
import cx from 'classnames';

import s from './header.module.css';

export const Component = ({ user, isLoggedIn }) => {
	const menu = menuList(isLoggedIn, user);

	const menuClasses = cx({
		[s.header__menu]: true,
		[s.header__menu_auth]: isLoggedIn
	});

	const logoClasses = cx({
		[s.header__logo]: true,
		[s.header__logo_auth]: isLoggedIn
	});

	const mediaClasses = cx({
		[s.header__media]: true,
		[s.header__media_auth]: isLoggedIn
	});

	return (
		<div className={s.header}>
			<div className={s.header__wrap}>
				<div className={s.header__inner}>
					<div className={logoClasses}>
						<Logo />
					</div>

					<div className={mediaClasses}>
						<div className={menuClasses}>
							<MenuAdaptive menu={menu} />
						</div>

						{isLoggedIn && (
							<div className={s.header__user}>
								<ButtonWithImg
									tag="a"
									to={`/profile/${user.username}`}
									size="l"
									img={user.image}
									alt={`Аватарка ${user.username}`}
									imgDefault={'//dummyimage.com/100x100/abq/fre'}
									type="around"
								>
									{user.username}
								</ButtonWithImg>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: getUserAuth(state),
	isLoggedIn: getIsLoggedIn(state)
});

export const Header = connect(mapStateToProps)(Component);

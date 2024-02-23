import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            selectedItem: null,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
        this.setState({ selectedItem: path });
    };

    render() {
        const { isOpened, selectedItem } = this.state;
        const containerClassnames = classnames('sidebar', {
            opened: isOpened,
            closed: !isOpened,
        });

        return (
            <div className={containerClassnames}>
                <div className='logo'>
                    <img
                        src={logo}
                        alt="TensorFlow logo"
                    />
                    <span>TensorFlow</span>
                    <button onClick={this.toggleSidebar}>
                        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                    </button>
                </div>

                <div className='items'>
                    <div className='topItems'>
                        {routes.map((route) => (
                            <div
                                key={route.title}
                                className={classnames('item', 'topItem', {
                                    selected: selectedItem === route.path, // Apply the 'selected' class if this item is selected
                                })}
                                onClick={() => this.goToRoute(route.path)}
                            >
                                <FontAwesomeIcon icon={route.icon} />
                                <span>{route.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className='bottomItems'>
                        {bottomRoutes.map((route) => (
                            <div
                                key={route.title}
                                className={classnames('item', 'bottomItem', {
                                    selected: selectedItem === route.path, // Apply the 'selected' class if this item is selected
                                })}
                                onClick={() => this.goToRoute(route.path)}
                            >
                                <FontAwesomeIcon icon={route.icon} />
                                <span>{route.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

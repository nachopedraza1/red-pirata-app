import '../Components/Navbar.scss';

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const [menuState, setMenuState] = useState(false);

    const onClickMenu = () => {
        setMenuState(!menuState);
    }

    return (
        <div className="top-nav">
            <Container fluid="xxl" className='d-flex justify-content-between align-items-center' >
                <div className='d-flex align-items-center'>
                    <button className={`hamburger hamburger--squeeze shadow-none d-lg-none ${menuState && "is-active"}`} type="button"
                        id="btnMenu" >
                        <span className="hamburger-box" onClick={() => onClickMenu()}>
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <div>
                        <h5 className='m-0  text-white mx-3'>
                            <span>RED</span>
                            <img className='mx-2' src="assets\belgrano calavera.png" height="25px" alt="" />
                            <span className='text-primary'>PIRA7A</span>
                        </h5>
                    </div>
                </div>

                <ul className={`menu-nav nav ${menuState && "menu-nav-active"}`} onClick={() => setMenuState(false)}>
                    <li><NavLink className="nav-link px-2" to="/home">INICIO</NavLink></li>
                    <li><NavLink className="nav-link px-2" to="/">PLANTEL</NavLink></li>
                    <li><NavLink className="nav-link px-2" to="/">POSICIONES</NavLink></li>
                    <li><NavLink className="nav-link px-2" to="/">FIXTURE</NavLink></li>
                    <li><NavLink className="nav-link px-2" to="/">TIENDA OFICIAL</NavLink></li>


                    <div className='d-flex d-sm-none flex-column'>
                        <hr className='px-2 text-white' />
                        <div>
                            <button className='btn-login'>
                                Ingresa
                            </button>
                            <button className='btn-register'>
                                Registrate
                            </button>
                        </div>
                    </div>
                </ul>

                <div className='d-none d-sm-flex'>
                    <button className='btn-login'>
                        Ingresa
                    </button>
                    <button className='btn-register'>
                        Registrate
                    </button>
                </div>
            </Container>
        </div>
    )
}

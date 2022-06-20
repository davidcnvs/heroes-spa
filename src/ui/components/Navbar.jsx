import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ps-4 pe-4">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroDex
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={isActive =>
                            "nava-item nav-link" + (!isActive ? " unselected" : "")
                          } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={isActive =>
                            "nava-item nav-link" + (!isActive ? " unselected" : "")
                          }  
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        David
                    </span>
                    <button 
                    className='nav-item nav-link btn'
                    onClick={handleLogout}
                    >
                          Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
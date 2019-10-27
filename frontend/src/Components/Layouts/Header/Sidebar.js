import React from 'react';
import Logo from "../../../assets/img/brand/magicare.png";

const Sidebar = () => {
    return (
        <div>
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <a className="navbar-brand pt-0">
                        <img src={Logo} className="navbar-brand-img" alt="..."/>
                    </a>
                    <ul className="nav align-items-center d-md-none">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-bell-55"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right"
                                 aria-labelledby="navbar-default_dropdown_1">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">
                                <div className="media align-items-center">
                                  <span className="avatar avatar-sm rounded-circle">
                                    <img alt="Image placeholder" src={Logo}/>
                                  </span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                <div className=" dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </div>
                                <a className="dropdown-item">
                                    <i className="ni ni-single-02"/>
                                    <span>My profile</span>
                                </a>
                                <a className="dropdown-item">
                                    <i className="ni ni-settings-gear-65"/>
                                    <span>Settings</span>
                                </a>
                                <a className="dropdown-item">
                                    <i className="ni ni-calendar-grid-58"/>
                                    <span>Activity</span>
                                </a>
                                <a className="dropdown-item">
                                    <i className="ni ni-support-16"/>
                                    <span>Support</span>
                                </a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item">
                                    <i className="ni ni-user-run"/>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a>
                                        <img src={Logo} alt={'...'}/>
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                                            data-target="#sidenav-collapse-main" aria-controls="sidenav-main"
                                            aria-expanded="false" aria-label="Toggle sidenav">
                                        <span/>
                                        <span/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <form className="mt-4 mb-3 d-md-none">
                            <div className="input-group input-group-rounded input-group-merge">
                                <input type="search"
                                       className="form-control form-control-rounded form-control-prepended"
                                       placeholder="Search" aria-label="Search"/>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="fa fa-search"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className=" nav-link active "> <i
                                    className="ni ni-tv-2 text-primary"/> Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
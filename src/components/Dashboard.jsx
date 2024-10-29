import React from "react";
import ".././App.css";
import Logo from "./../assets/Images/full-logo.png";
import Test from "./Test";


function Dashboard() {
    return (
        <>
            <div className="container-wrapper">
                {/* <!-- Sidebar --> */}
                <aside className="sidebar">
                    <div className="logo">
                        {/* <h2>Guidex</h2> */}
                        <img style={{ width: '100px' }} src={Logo} alt="" />

                    </div>

                    <ul className="accordion accordion-flush menu" id="accordionFlushExample" >

                        <li className="accordion-item cust-heading">
                            <a className="accordion-header ">
                                <button
                                    className="accordion-button collapsed cust-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
                                >
                                    <i className="ri-dashboard-3-fill cust-icon"></i>
                                    <span className="pradeep">Getting Started</span>
                                </button>
                            </a>

                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Introduction</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Core Features</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">File Structure</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Starter Page</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Customization</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li className="accordion-item">
                            <a className="accordion-header cust-heading">
                                <button
                                    className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
                                >
                                    <i className="ri-file-text-line cust-icon"></i>
                                    Content
                                </button>
                            </a>

                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Icons</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Code</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Images</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li className="accordion-item">
                            <a className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    <i className="ri-open-source-line cust-icon"></i>
                                    Source Files
                                </button>
                            </a>

                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">CSS Files</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">JS Files </a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">JS Files</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>


                        <hr />

                        <p className="side-sub-heading"> CONFIGURATION </p>

                        <li className="accordion-item">
                            <a className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFour"
                                >
                                    <i className="ri-install-line cust-icon"></i>
                                    Installation
                                </button>
                            </a>

                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Local Server</a>
                                        </li>
                                        <li>
                                            <i className="ri-record-circle-line cust-circle-icon" />
                                            <a href="#">Live Server </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>

                        <hr />

                        <p className="side-sub-heading">INFO </p>


                        <li className="">

                            <a className="" href="#">
                                <i className="ri-time-line cust-icon" ></i>
                                Change Log
                            </a>
                        </li>

                        <li className="">

                            <a className="" href="#">
                                <i className="ri-star-smile-line cust-icon"></i>
                                Thank You
                            </a>
                        </li>





                    </ul>


                </aside>

                <header className="topbar">

                    <div className="d-flex align-items-center">
                        <div className="form-check form-switch">
                            <input className="form-check-input aaa" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            {/* <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
                        </div>

                        <input type="text" className="search" name="search" placeholder="Search..." />

                    </div>

                    <button className="buy-btn">Buy Now</button>
                </header>

                {/* <!-- Main Content --> */}
                <main className="main-content">




                    <div className="content">
                        <div className="">
                            <h1>Getting Started</h1>
                        </div>



                        <div className="content-wrapper">
                            <div className="">
                                <div className="box">
                                    <h2>Introduction</h2>
                                    <div className="details">
                                        <p><strong>Item Name:</strong> Guidex - Online Documentation Template.</p>
                                        <p><strong>Item Version:</strong> 3.1.0</p>
                                        <p><strong>Author:</strong> ashishmaraviya</p>
                                        <p><strong>Copyright:</strong> 2024</p>
                                    </div>
                                    <p>Welcome to the documentation for the Guidex template! This page will guide you on how to use and customize the template to suit your needs.</p>
                                    <h2>Guidex - Online Documentation Template.</h2>
                                    <p>An online documentation HTML template is a pre-designed structure and layout that helps developers and creators present their template, projects, or products in an organized and user-friendly manner.</p>
                                </div>

                                <div className="box">
                                    <h2>Introduction</h2>
                                    <div className="details">
                                        <p><strong>Item Name:</strong> Guidex - Online Documentation Template.</p>
                                        <p><strong>Item Version:</strong> 3.1.0</p>
                                        <p><strong>Author:</strong> ashishmaraviya</p>
                                        <p><strong>Copyright:</strong> 2024</p>
                                    </div>
                                    <p>Welcome to the documentation for the Guidex template! This page will guide you on how to use and customize the template to suit your needs.</p>
                                    <h2>Guidex - Online Documentation Template.</h2>
                                    <p>An online documentation HTML template is a pre-designed structure and layout that helps developers and creators present their template, projects, or products in an organized and user-friendly manner.</p>
                                </div>

                                <div className="box">
                                    <h2>Introduction</h2>
                                    <div className="details">
                                        <p><strong>Item Name:</strong> Guidex - Online Documentation Template.</p>
                                        <p><strong>Item Version:</strong> 3.1.0</p>
                                        <p><strong>Author:</strong> ashishmaraviya</p>
                                        <p><strong>Copyright:</strong> 2024</p>
                                    </div>
                                    <p>Welcome to the documentation for the Guidex template! This page will guide you on how to use and customize the template to suit your needs.</p>
                                    <h2>Guidex - Online Documentation Template.</h2>
                                    <p>An online documentation HTML template is a pre-designed structure and layout that helps developers and creators present their template, projects, or products in an organized and user-friendly manner.</p>
                                </div>

                                {/* <Test /> */}
                               
                            </div>


                            <div className="topics">
                                <h3>Topics</h3>
                                <ul>
                                    <li><a href="#">Introduction</a></li>
                                    <li><a href="#">Core Features</a></li>
                                    <li><a href="#">File Structure</a></li>
                                    <li><a href="#">Starter Page</a></li>
                                    <li><a href="#">Customization</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>





                </main>
            </div>

        </>
    )
}

export default Dashboard;
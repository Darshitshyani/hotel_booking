import React from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { NavHoverData } from '../../Data';
const Navbar = () => {
    return (
        <>
            <div className='main-nav'>
                <div className='container'>
                    <div className='navbars'>
                        <div className='drop-nav'>

                            <svg className="logos" viewBox="0 0 65 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z" fill="rgb(79,70,229)"></path><path d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="13" cy="15" r="4" fill="white"></circle><path d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z" fill="#1F2937"></path></svg>

                            <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Home
                                </button>
                                <ul class="dropdown-menu fs-1" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Online  booking</a></li>
                                    <li><a class="dropdown-item" href="#">Real  Estate</a></li>
                                    <li><a class="dropdown-item" href="#">Home-3</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Five Columns
                                </button>
                                <ul class="dropdown-menu p11" aria-labelledby="dropdownMenuButton">
                                    <div className="colms" href="#">
                                        {NavHoverData.map((val) => {

                                            return <>
                                                <div className='indivs'>
                                                    <img src={val.img} />
                                                    <h5 style={{ fontWeight: '600' }}>{val.title}</h5>
                                                    {val.menu.map((val) => {
                                                        return <>
                                                            <p class="p1">{val}</p>
                                                        </>
                                                    })
                                                    }
                                                </div>
                                            </>
                                        })}
                                    </div>

                                </ul>
                            </div>
                            <div class="dropdown">
                                <button
                                    class="btn  dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Listing Page
                                </button>
                                <ul class="dropdown-menu p-1-1" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <div class="btn-group dropend">
                                            <button type="button" class="btn dropdown-toggle in-btns1" data-mdb-toggle="dropdown" aria-expanded="false">
                                                Stay listing
                                            </button>
                                            <ul class="dropdown-menu sideLi-div1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="btn-group dropend">
                                            <button type="button" class="btn dropdown-toggle in-btns2" data-mdb-toggle="dropdown" aria-expanded="false">
                                                Experince listing
                                            </button>
                                            <ul class="dropdown-menu sideLi-div2">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="btn-group dropend">
                                            <button type="button" class="btn dropdown-toggle in-btns3" data-mdb-toggle="dropdown" aria-expanded="false">
                                                cars listing
                                            </button>
                                            <ul class="dropdown-menu sideLi-div3">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="btn-group dropend">
                                            <button type="button" class="btn dropdown-toggle in-btns4" data-mdb-toggle="dropdown" aria-expanded="false">
                                                Real Estate Listing
                                            </button>
                                            <ul class="dropdown-menu sideLi-div4 ">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li><p className='dropdown-item fg-1'>Flight Listing</p></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Templates
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Other pages
                                </button>
                                <ul class="dropdown-menu k-1-1" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item k1" href="#">Blog Page</a></li>
                                    <li><a class="dropdown-item k1" href="#">Blog single</a></li>
                                    <li><a class="dropdown-item k1" href="#">About</a></li>
                                    <li><a class="dropdown-item k1" href="#">Contact us</a></li>
                                    <li><a class="dropdown-item k1" href="#">Login</a></li>
                                    <li><a class="dropdown-item k1" href="#">SignUp</a></li>
                                    <li><a class="dropdown-item k1" href="#">SignUp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='search-btn'>
                            <SearchIcon />
                            <button className='sign-btn'>sign up </button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
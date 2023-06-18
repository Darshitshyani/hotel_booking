import React, { useState } from 'react'
import './hotelFatures.scss'
import { HotelsData, houseHotel, userData, DriveData, houseTwoData } from '../../Data'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarIcon from '@mui/icons-material/Star';
import VideoPlayer from './VideoPlayer';


import Slider from "react-slick";
const HotelFatures = () => {
    const [ActiveTab, setActiveTab] = useState(undefined);
    const [allData, setAllData] = useState(HotelsData);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", border: '1px solid #E7E8EC', width: '40px', height: '40px', borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", border: '1px solid #E7E8EC', width: '40px', height: '40px', borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1424,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const settingss = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1424,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const HandleLike = (value) => {
        setAllData(allData.map((item) => {
            if (value.id === item.id && item.isLiked) {
                item.isLiked = false
            } else if (value.id === item.id && !item.isLiked) {
                item.isLiked = true
            }
            return item
        }))
    }

    return (
        <>
            <div className='container' style={{ marginTop: '100px', backgroundColor: '#F3F4F6', padding: "30px", borderRadius: '30px' }}>
                <h1 style={{ fontFamily: 'poppins', fontWeight: '900', color: 'black' }}>Featured places to stay</h1>
                <p style={{ fontFamily: 'poppins', fontSize: '22px', marginTop: '30px' }}>Popular places to stay that Chisfis recommends for you</p>
                <div className='tabs'>
                    <div className='tab-btns'>
                        <p className={ActiveTab === 'New York' && 'active-tabs'} onClick={() => setActiveTab('New York')}>New York</p>
                        <p className={ActiveTab === 'Tokyo' && 'active-tabs'} onClick={() => setActiveTab('Tokyo')}>Tokyo</p>
                        <p className={ActiveTab === 'Paris' && 'active-tabs'} onClick={() => setActiveTab('Paris')}>Paris</p>
                        <p className={ActiveTab === 'London' && 'active-tabs'} onClick={() => setActiveTab('London')}>London</p>
                    </div>
                    <div className='viewall'>
                        <p >View all <span>{'->'}</span></p>
                    </div>
                </div>
                <div className='hotels-sec'>
                    {allData.map((val) => (
                        <div className='hotel-card'>
                            <div className='slider-Hotel-img'>
                                <>
                                    <div>
                                        <Slider {...settings}>
                                            {val.imgs.map((val) => (
                                                <>
                                                    <div>
                                                        <div style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                                                            <img src={val} style={{ width: '320px', height: '230px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </Slider>

                                        <div className='hotel-discpration'>
                                            <p className='mb-1' style={{ fontFamily: 'poppins', fontSize: '17px' }}>Entire cabin : {val.cabins}</p>
                                            <h4 style={{ fontFamily: 'poppins', fontSize: '22px', color: 'black', fontWeight: '600' }}>{val.title}</h4>
                                            <p className='mb-0' style={{ fontFamily: 'poppins', fontSize: '18px' }}><span><svg xmlns="http://www.w3.org/2000/svg" style={{ width: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span> {val.location}</p>
                                            <div className='d-flex justify-content-between mt-3'>
                                                <p style={{ fontFamily: 'poppins', fontSize: '18px' }}><span style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '600' }}>${val.rate}</span>/night</p>
                                                <p><span style={{ fontWeight: '600' }}>4.3</span>(26)</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                <div className='like-btn' onClick={() => HandleLike(val)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill={`${val.isLiked ? '#fff' : "none"}`} viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center mt-5 mb-3'>
                    <button style={{ textAlign: 'center', height: '50px', width: '200px', fontFamily: 'poppins', fontSize: "20px", color: 'white', backgroundColor: '#7F7AEA', border: '0px', borderRadius: '30px' }}>Show me more</button>
                </div>
            </div>
            <div className=' container d-flex justify-content-center flex-column align-items-center position-relative' style={{ marginTop: '120px' }}>
                <h1 style={{ color: 'black' }}>How it work</h1>
                <p style={{ fontFamily: 'poppins', fontSize: '20px' }}>Keep calm & travel on</p>
                <div className='d-flex justify-content-between' style={{ marginTop: '80px' }}>
                    <img src='https://chisfis-template.vercel.app/static/media/VectorHIW.2a56b4d0aa5690494df25bc0b2bb3bf6.svg' style={{ position: 'absolute', zIndex: '-1', bottom: '210px', width: '93%' }} />
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src='	https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png' style={{ width: '200px' }} />
                        <h4 className='mt-5' style={{ color: 'black' }}>Book & relax</h4>
                        <p className='mt-2' style={{ fontSize: '18px', fontFamily: 'poppins', width: '400px' }}>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src='https://chisfis-template.vercel.app/static/media/HIW2.f68577684c76e764a351.png' style={{ width: '200px' }} />
                        <h4 className='mt-5' style={{ color: 'black' }}>Smart Checklist</h4>
                        <p className='mt-2' style={{ fontSize: '18px', fontFamily: 'poppins', width: '400px' }}>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <img src='https://chisfis-template.vercel.app/static/media/HIW3.b650d652a9db697619b9.png' style={{ width: '200px' }} />
                        <h4 className='mt-5' style={{ color: 'black' }}>Save more</h4>
                        <p className='mt-2' style={{ fontSize: '18px', fontFamily: 'poppins', width: '400px' }}>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: '120px', backgroundColor: 'rgb(255,247,237)', borderRadius: '40px', padding: '60px', height: "830px" }}>
                <h1 style={{ color: 'black', textAlign: 'center', fontSize: '45px' }}>Suggestions for discovery</h1>
                <p style={{ fontFamily: 'poppins', fontSize: '20px', textAlign: 'center', fontSize: '25px' }}>Popular places to stay that Chisfis recommends for you</p>
                <div className='House-Hotel-slider'>
                    <Slider {...settingss}>
                        {houseHotel.map((val) => {
                            return <>
                                <div className='d-flex justify-content-center flex-column align-items-center'>
                                    <img src={val.img} style={{ width: '280px', height: '400px', borderRadius: '20px' }} />
                                    <p style={{ fontSize: '22px', marginTop: '20px', fontWeight: '600', color: 'black' }} className='mb-0'>{val.title}</p>
                                    <p>{val.data}</p>
                                </div>
                            </>
                        })}
                    </Slider>
                </div>
            </div>

            <div className=' container newsletter'>
                <div className='d-flex justify-content-between'>
                    <div className='writer-sec'>
                        <h1>Join our newsletter🎉</h1>
                        <p style={{ fontFamily: 'poppins', fontSize: '20px' }}>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                        <p tyle={{ fontFamily: 'poppins', fontSize: '40px' }}><span style={{ color: '#3151B7', backgroundColor: '#DBEAFE', fontSize: '20px', borderRadius: '10px', fontFamily: 'poppins', fontWeight: '600', marginRight: '10px', padding: "4px" }}>01</span>Get more discount</p>
                        <p tyle={{ fontFamily: 'poppins', fontSize: '40px' }}><span style={{ color: 'rgb(169,59,59)', backgroundColor: '#FEE2E2', fontSize: '20px', borderRadius: '10px', fontFamily: 'poppins', fontWeight: '600', marginRight: '10px', padding: "3px" }}>02</span>Get premium magazines</p>
                        <div className='d-flex justify-content-between input-boxes'>
                            <input placeholder='Enter your Email' />
                            <button>{<ArrowRightAltIcon />}</button>
                        </div>
                    </div>
                    <div className='w-50'>
                        <img src='https://chisfis-template.vercel.app/static/media/SVG-subcribe2.efb832b25bd6eca32484.png' className='w-100' />
                    </div>
                </div>
            </div>
            <div className='container author-sec'>
                <h1>Top 10 author of the month</h1>
                <p>Rating based on customer reviews</p>
                <div className='user-map'>
                    {userData.map((val) => {
                        return <>
                            <div className='user-card'>
                                <img src={val.img} />
                                <p style={{ fontWeight: '600', fontSize: '18px', marginTop: "15px" }} className='mb-0'>{val.name}</p>
                                <p style={{ fontSize: '18px', marginTop: "10px" }} className='mb-0' >{val.city}</p>
                                <p className='ratings'>{val.rating} <span style={{ marginLeft: '5px', color: '#F59E0B' }}><StarIcon /></span></p>
                            </div>
                        </>
                    })}
                </div>
                <div className='btns-auth'>
                    <button className='p11'>Show me more</button>
                    <button className='p2'>Become a host</button>
                </div>
            </div>

            <div className=' container explore'>
                <h1>Explore nearby</h1>
                <p style={{ fontFamily: 'poppins', fontSize: '22px' }}>Discover great places near where you live</p>
                <div className='loop-secs'>
                    {DriveData.map((val) => {
                        return <>
                            <div className='drive-card'>
                                <img src={val.img} />
                                <div className='ms-3'>
                                    <p style={{ fontWeight: '600' }}>{val.city}</p>
                                    <p>{val.drive}</p>
                                </div>
                                <div className='numbers'>
                                    <p>{val.num}</p>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>

            <div className='container choose'>
                <div className='text-secs'>
                    <svg style={{ width: '100px' }} viewBox="0 0 65 32" fill="#4F46E5" xmlns="http://www.w3.org/2000/svg"><path d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z" fill="currentColor"></path><path d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="13" cy="15" r="4" fill="white"></circle><path d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z" fill="#1F2937"></path></svg>
                    <h1>
                        Why did you choose us?</h1>
                    <p>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels, private houses, apartments... becomes fast, convenient and easy.</p>
                    <button>Become an author</button>

                </div>
                <div className='w-50'>
                    <img src='https://chisfis-template.vercel.app/static/media/BecomeAnAuthorImg.02703848a9dd53f8bbac.png' className='w-100' />
                </div>
            </div>
            <div className='Explore container'>
                <h1>Explore by types of stays</h1>
                <p style={{ fontFamily: 'poppins', fontSize: '20px' }}>Explore houses based on 10 types of stays</p>
                <div className='housetwoslider'>
                    <Slider {...settingss}>
                        {houseTwoData.map((val) => {
                            return <>
                                <div className='d-flex justify-content-center flex-column align-items-center'>
                                    <img src={val.img} style={{ width: '280px', height: '200px', borderRadius: '20px' }} />
                                    <p style={{ fontSize: '22px', marginTop: '20px', fontWeight: '600', color: 'black' }} className='mb-0'>{val.title}</p>
                                    <p>{val.value}</p>
                                </div>
                            </>
                        })}
                    </Slider>
                </div>
            </div>
            <VideoPlayer />
        </>
    )
}

export default HotelFatures;
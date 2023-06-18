import React, { Fragment, useState, Component, useEffect } from 'react'
import './home.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Slider from "react-slick";
import { Slider1Data } from '../../../src/Data'
import HotelFatures from './HotelFatures';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Home = () => {
    console.log(AdapterDayjs)
    const people = [
        { id: 1, name: 'Arlene Mccoy' },
        { id: 2, name: 'Arlene Mccoy' },
        { id: 3, name: 'Devon Webb' },
        { id: 4, name: 'Tom Cook' },
        { id: 5, name: 'Tanya Fox' },
        { id: 6, name: 'Hellen Schmidt' },
    ]

    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('1')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )


    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [total, settotal] = useState(null)
    const [adults, setadults] = useState(0);
    const [children, setchildren] = useState(0);
    const [infans, setinfans] = useState(0);
    const [toggles, settoggles] = useState(1);

    //Slider sec............

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", border: '1px solid #E7E8EC', width: '45px', height: '45px', borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", border: '1px solid #E7E8EC', width: '45px', height: '45px', borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    }
    const settings = {

        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1420,
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


    useEffect(() => {

        if (total <= 18) {

            settotal(adults + children + infans)
        } else {

        }
    }, [adults, children, infans])

    return (
        <>
            <div className='mt-5'>
                <div className='container' style={{ position: 'relative' }}>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column mt-4'>
                            <h1 style={{ fontSize: '4.5rem', width: '400px', color: 'black', zIndex: '-1' }}>Hotel, car & experiences</h1>
                            <h3 style={{ width: '700px', fontSize: '22px', fontFamily: 'poppins', marginTop: '30px', zIndex: '-1' }}>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</h3>
                            <button className='mt-3' style={{ width: '250px', height: "50px", borderRadius: '30px', border: "0px", backgroundColor: 'rgb(79,70,229)', fontFamily: 'poppins', color: 'white', fontWeight: '500', fontSize: '18px' }}>Start your search</button>
                            <div className='p-buttons' style={{ marginTop: '75px' }}>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label="Stays" value="1" />
                                                <Tab label="experiences" value="2" />
                                                <Tab label="cars" value="3" />
                                                <Tab label="Flights" value="4" />
                                            </TabList>
                                        </Box>
                                        <div className='tabs-body'>
                                            <TabPanel value="1" style={{ padding: '0px', justifyContent: 'space-around', display: 'flex' }}>
                                                <div className='sty-div'>
                                                    <div className='d-flex align-items-center'>
                                                        <svg className='location-Svg' style={{ zIndex: '-1' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                                                        <div className="fixed top-16">
                                                            <Combobox value={selected} onChange={setSelected}>
                                                                <div className="d-flex align-content-center">
                                                                    <div className="back-search-div">
                                                                        <Combobox.Input
                                                                            className="search-input"
                                                                            displayValue={(person) => person.name}
                                                                            onChange={(event) => setQuery(event.target.value)}
                                                                            placeholder='Location'
                                                                            type='search'
                                                                        />
                                                                        <p className='mb-0'>Where are you giong</p>
                                                                    </div>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                        afterLeave={() => setQuery('')}
                                                                    >
                                                                        <Combobox.Options className="search-box">
                                                                            {filteredPeople.length === 0 && query !== '' ? (
                                                                                <div>
                                                                                    Nothing found.
                                                                                </div>
                                                                            ) : (
                                                                                filteredPeople.map((person) => (
                                                                                    <Combobox.Option
                                                                                        key={person.id}
                                                                                        className='optionss'
                                                                                        value={person}
                                                                                    >
                                                                                        {({ selected, active }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                        }`}
                                                                                                >
                                                                                                    {person.name}
                                                                                                </span>
                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                            }`}
                                                                                                    >
                                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Combobox.Option>
                                                                                ))
                                                                            )}
                                                                        </Combobox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </Combobox>
                                                        </div>
                                                    </div>
                                                    <div>

                                                    </div>
                                                    <div>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DemoContainer components={['SingleInputDateRangeField']}>
                                                                <DateRangePicker slots={{ field: SingleInputDateRangeField }} onChange={(e) => { console.log(e) }} />
                                                            </DemoContainer>
                                                        </LocalizationProvider>
                                                    </div>
                                                    <div className='d-flex' style={{ width: "320px" }}>
                                                        <Button
                                                            id="basic-button"
                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            onClick={handleClick}
                                                            style={{ textTransform: 'lowercase', width: '300px', color: 'black' }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className='user-svg'><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path></svg>
                                                            <span className='d-flex flex-column align-items-lg-start'>
                                                                <p className='mb-0'><span>{total}</span> Guests</p>
                                                                <p className='mb-0'>Add Guests</p>
                                                            </span>

                                                        </Button>
                                                        <Menu
                                                            id="basic-menu"
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={handleClose}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}

                                                        >

                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <div>
                                                                    <p className='mb-0'>Adults</p>
                                                                    <p>Ages 13 or above</p>
                                                                </div>
                                                                <div className='d-flex gap-2 align-items-center cbtns'>
                                                                    <button onClick={() => {
                                                                        if (adults <= 0) {

                                                                        } else {

                                                                            setadults(adults - 1)
                                                                        }
                                                                    }}>-</button>
                                                                    {adults}
                                                                    <button onClick={() => {
                                                                        if (adults >= 10) {

                                                                        } else {
                                                                            setadults(adults + 1)
                                                                        }
                                                                    }}>+</button>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <div>
                                                                    <p className='mb-0'>Children</p>
                                                                    <p>Ages 2–12</p>
                                                                </div>
                                                                <div className='d-flex gap-2 align-items-center cbtns'>
                                                                    <button onClick={() => {
                                                                        if (children <= 0) {

                                                                        } else {
                                                                            setchildren(children - 1)
                                                                        }
                                                                    }}>-</button>
                                                                    {children}
                                                                    <button onClick={() => {
                                                                        if (children >= 4) {

                                                                        } else {
                                                                            setchildren(children + 1)
                                                                        }
                                                                    }} >+</button>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <div>
                                                                    <p className='mb-0'>Infants</p>
                                                                    <p>Ages 0–2</p>
                                                                </div>
                                                                <div className='d-flex gap-2 align-items-center cbtns'>
                                                                    <button onClick={() => {
                                                                        if (infans <= 0) {

                                                                        } else {
                                                                            setinfans(infans - 1)
                                                                        }
                                                                    }}>-</button>
                                                                    {infans}
                                                                    <button onClick={() => {
                                                                        if (infans >= 4) {

                                                                        } else {
                                                                            setinfans(infans + 1)
                                                                        }
                                                                    }}>+</button>
                                                                </div>
                                                            </div>


                                                        </Menu>
                                                        <button className='search-inbtns' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="2" className='tabs-2'>
                                                <div className='sty-div'>
                                                    <div className='d-flex align-items-center'>
                                                        <svg className='location-Svg' style={{ zIndex: '-1' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                                                        <div className="fixed top-16">
                                                            <Combobox value={selected} onChange={setSelected}>
                                                                <div className="d-flex align-content-center">
                                                                    <div className="back-search-div">
                                                                        <Combobox.Input
                                                                            className="search-input"
                                                                            displayValue={(person) => person.name}
                                                                            onChange={(event) => setQuery(event.target.value)}
                                                                            placeholder='Location'
                                                                            type='search'
                                                                        />
                                                                        <p className='mb-0'>Where are you giong</p>
                                                                    </div>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                        afterLeave={() => setQuery('')}
                                                                    >
                                                                        <Combobox.Options className="search-box">
                                                                            {filteredPeople.length === 0 && query !== '' ? (
                                                                                <div>
                                                                                    Nothing found.
                                                                                </div>
                                                                            ) : (
                                                                                filteredPeople.map((person) => (
                                                                                    <Combobox.Option
                                                                                        key={person.id}
                                                                                        className='optionss'
                                                                                        value={person}
                                                                                    >
                                                                                        {({ selected, active }) => (
                                                                                            <>
                                                                                                <span
                                                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                        }`}
                                                                                                >
                                                                                                    {person.name}
                                                                                                </span>
                                                                                                {selected ? (
                                                                                                    <span
                                                                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                            }`}
                                                                                                    >
                                                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                    </span>
                                                                                                ) : null}
                                                                                            </>
                                                                                        )}
                                                                                    </Combobox.Option>
                                                                                ))
                                                                            )}
                                                                        </Combobox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </Combobox>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DemoContainer components={['SingleInputDateRangeField']}>
                                                                <DateRangePicker slots={{ field: SingleInputDateRangeField }} onChange={(e) => { console.log(e) }} />
                                                            </DemoContainer>
                                                        </LocalizationProvider>
                                                    </div>
                                                    <div className='d-flex' style={{ width: '330px' }}>
                                                        <Button
                                                            id="basic-button"
                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            onClick={handleClick}
                                                            style={{ textTransform: 'lowercase', width: '300px', color: 'black' }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className='user-svg'><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path></svg>
                                                            <span className='d-flex flex-column align-items-lg-start'>
                                                                <p className='mb-0'><span>{total}</span> Guests</p>
                                                                <p className='mb-0'>Add Guests</p>
                                                            </span>

                                                        </Button>
                                                        <Menu
                                                            id="basic-menu"
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={handleClose}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}

                                                        >

                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <div>
                                                                    <p className='mb-0'>Adults</p>
                                                                    <p>Ages 13 or above</p>
                                                                </div>
                                                                <div className='d-flex gap-2 align-items-center cbtns'>
                                                                    <button onClick={() => {
                                                                        if (adults <= 0) {

                                                                        } else {

                                                                            setadults(adults - 1)
                                                                        }
                                                                    }}>-</button>
                                                                    {adults}
                                                                    <button onClick={() => {
                                                                        if (adults >= 10) {

                                                                        } else {
                                                                            setadults(adults + 1)
                                                                        }
                                                                    }}>+</button>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <div>
                                                                    <p className='mb-0'>Children</p>
                                                                    <p>Ages 2–12</p>
                                                                </div>
                                                                <div className='d-flex gap-2 align-items-center cbtns'>
                                                                    <button onClick={() => {
                                                                        if (children <= 0) {

                                                                        } else {
                                                                            setchildren(children - 1)
                                                                        }
                                                                    }}>-</button>
                                                                    {children}
                                                                    <button onClick={() => {
                                                                        if (children >= 4) {

                                                                        } else {
                                                                            setchildren(children + 1)
                                                                        }
                                                                    }} >+</button>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <div>
                                                                    <p className='mb-0'>Infants</p>
                                                                    <p>Ages 0–2</p>
                                                                </div>
                                                                <div className='d-flex gap-2 align-items-center cbtns'>
                                                                    <button onClick={() => {
                                                                        if (infans <= 0) {

                                                                        } else {
                                                                            setinfans(infans - 1)
                                                                        }
                                                                    }}>-</button>
                                                                    {infans}
                                                                    <button onClick={() => {
                                                                        if (infans >= 4) {

                                                                        } else {
                                                                            setinfans(infans + 1)
                                                                        }
                                                                    }}>+</button>
                                                                </div>
                                                            </div>


                                                        </Menu>
                                                        <button className='search-inbtnss' >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <div className='tab3'>
                                                    <div className='tab3-btn'>
                                                        <button onClick={() => { settoggles(1) }} className={toggles === 1 && 'tg-class'}>Different drop off</button>
                                                        <button onClick={() => { settoggles(2) }} className={toggles === 2 && 'tg-class'}>Same drop off</button>
                                                    </div>
                                                    <div className='toggle-tab3'>
                                                        <div className='d-flex align-items-center w-100'>
                                                            <svg className='location-Svg' style={{ zIndex: '1' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                                                            <div className="fixed top-16">
                                                                <Combobox value={selected} onChange={setSelected}>
                                                                    <div className="d-flex align-content-center">
                                                                        <div className="back-search-div">
                                                                            <Combobox.Input
                                                                                className="search-input"
                                                                                displayValue={(person) => person.name}
                                                                                onChange={(event) => setQuery(event.target.value)}
                                                                                placeholder='City or Airpot'
                                                                                type='search'
                                                                            />
                                                                            <p className='mb-0'>Pick up location</p>
                                                                        </div>
                                                                        <Transition
                                                                            as={Fragment}
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                            afterLeave={() => setQuery('')}
                                                                        >
                                                                            <Combobox.Options className="search-box">
                                                                                {filteredPeople.length === 0 && query !== '' ? (
                                                                                    <div>
                                                                                        Nothing found.
                                                                                    </div>
                                                                                ) : (
                                                                                    filteredPeople.map((person) => (
                                                                                        <Combobox.Option
                                                                                            key={person.id}
                                                                                            className='optionss'
                                                                                            value={person}
                                                                                        >
                                                                                            {({ selected, active }) => (
                                                                                                <>
                                                                                                    <span
                                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                            }`}
                                                                                                    >
                                                                                                        {person.name}
                                                                                                    </span>
                                                                                                    {selected ? (
                                                                                                        <span
                                                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                                }`}
                                                                                                        >
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                        </span>
                                                                                                    ) : null}
                                                                                                </>
                                                                                            )}
                                                                                        </Combobox.Option>
                                                                                    ))
                                                                                )}
                                                                            </Combobox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </Combobox>
                                                            </div>
                                                        </div>
                                                        {toggles === 1 && <div className='d-flex align-items-center'>
                                                            <svg className='location-Svg' style={{ zIndex: '1' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                                                            <div className="fixed top-16 w-72">
                                                                <Combobox value={selected} onChange={setSelected}>
                                                                    <div className="d-flex align-content-center">
                                                                        <div className="back-search-div">
                                                                            <Combobox.Input
                                                                                className="search-input"
                                                                                displayValue={(person) => person.name}
                                                                                onChange={(event) => setQuery(event.target.value)}
                                                                                placeholder='City or Airpot'
                                                                                type='search'
                                                                            />
                                                                            <p className='mb-0'>Pick up location</p>
                                                                        </div>
                                                                        <Transition
                                                                            as={Fragment}
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                            afterLeave={() => setQuery('')}
                                                                        >
                                                                            <Combobox.Options className="search-box">
                                                                                {filteredPeople.length === 0 && query !== '' ? (
                                                                                    <div>
                                                                                        Nothing found.
                                                                                    </div>
                                                                                ) : (
                                                                                    filteredPeople.map((person) => (
                                                                                        <Combobox.Option
                                                                                            key={person.id}
                                                                                            className='optionss'
                                                                                            value={person}
                                                                                        >
                                                                                            {({ selected, active }) => (
                                                                                                <>
                                                                                                    <span
                                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                            }`}
                                                                                                    >
                                                                                                        {person.name}
                                                                                                    </span>
                                                                                                    {selected ? (
                                                                                                        <span
                                                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                                }`}
                                                                                                        >
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                        </span>
                                                                                                    ) : null}
                                                                                                </>
                                                                                            )}
                                                                                        </Combobox.Option>
                                                                                    ))
                                                                                )}
                                                                            </Combobox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </Combobox>
                                                            </div>
                                                        </div>}
                                                        <div className='d-flex align-items-center justify-content-between' style={{ width: '320px' }}>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['SingleInputDateRangeField']}>
                                                                    <DateRangePicker slots={{ field: SingleInputDateRangeField }} onChange={(e) => { console.log(e) }} />
                                                                </DemoContainer>
                                                            </LocalizationProvider>

                                                            <button className='search-inbtnsss' >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                                        </div>
                                                    </div>



                                                </div>

                                            </TabPanel>

                                            <TabPanel value="4">

                                                <div className='tab3'>
                                                    <div className='tab3-btn'>
                                                        <button onClick={() => { settoggles(1) }} className={toggles === 1 && 'tg-class'}>Round-trip</button>
                                                        <button onClick={() => { settoggles(2) }} className={toggles === 2 && 'tg-class'}>One-way</button>
                                                        <div>
                                                            <Button
                                                                id="basic-button"
                                                                aria-controls={open ? 'basic-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                onClick={handleClick}
                                                                style={{ textTransform: 'lowercase', width: '150px', color: 'black' }}
                                                            >

                                                                <span className='d-flex flex-column align-items-lg-start'>
                                                                    <p className='mb-0'><span>{total}</span> Guests</p>

                                                                </span>

                                                            </Button>
                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={anchorEl}
                                                                open={open}
                                                                onClose={handleClose}
                                                                MenuListProps={{
                                                                    'aria-labelledby': 'basic-button',
                                                                }}

                                                            >

                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                    <div>
                                                                        <p className='mb-0'>Adults</p>
                                                                        <p>Ages 13 or above</p>
                                                                    </div>
                                                                    <div className='d-flex gap-2 align-items-center cbtns'>
                                                                        <button onClick={() => {
                                                                            if (adults <= 0) {

                                                                            } else {

                                                                                setadults(adults - 1)
                                                                            }
                                                                        }}>-</button>
                                                                        {adults}
                                                                        <button onClick={() => {
                                                                            if (adults >= 10) {

                                                                            } else {
                                                                                setadults(adults + 1)
                                                                            }
                                                                        }}>+</button>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                    <div>
                                                                        <p className='mb-0'>Children</p>
                                                                        <p>Ages 2–12</p>
                                                                    </div>
                                                                    <div className='d-flex gap-2 align-items-center cbtns'>
                                                                        <button onClick={() => {
                                                                            if (children <= 0) {

                                                                            } else {
                                                                                setchildren(children - 1)
                                                                            }
                                                                        }}>-</button>
                                                                        {children}
                                                                        <button onClick={() => {
                                                                            if (children >= 4) {

                                                                            } else {
                                                                                setchildren(children + 1)
                                                                            }
                                                                        }} >+</button>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                    <div>
                                                                        <p className='mb-0'>Infants</p>
                                                                        <p>Ages 0–2</p>
                                                                    </div>
                                                                    <div className='d-flex gap-2 align-items-center cbtns'>
                                                                        <button onClick={() => {
                                                                            if (infans <= 0) {

                                                                            } else {
                                                                                setinfans(infans - 1)
                                                                            }
                                                                        }}>-</button>
                                                                        {infans}
                                                                        <button onClick={() => {
                                                                            if (infans >= 4) {

                                                                            } else {
                                                                                setinfans(infans + 1)
                                                                            }
                                                                        }}>+</button>
                                                                    </div>
                                                                </div>


                                                            </Menu>

                                                        </div>
                                                    </div>
                                                    <div className='toggle-tab3'>

                                                        <div className='d-flex align-items-center'>
                                                            <svg className='location-Svg' style={{ zIndex: '1' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                                                            <div className="fixed">
                                                                <Combobox value={selected} onChange={setSelected}>
                                                                    <div className="d-flex align-content-center">
                                                                        <div className="back-search-div">
                                                                            <Combobox.Input
                                                                                className="search-input"
                                                                                displayValue={(person) => person.name}
                                                                                onChange={(event) => setQuery(event.target.value)}
                                                                                placeholder='Flying from'
                                                                                type='search'
                                                                            />
                                                                            <p className='mb-0'>Where do you want to fly from?</p>
                                                                        </div>
                                                                        <Transition
                                                                            as={Fragment}
                                                                            leave="transition ease-in duration-100"
                                                                            leaveFrom="opacity-100"
                                                                            leaveTo="opacity-0"
                                                                            afterLeave={() => setQuery('')}
                                                                        >
                                                                            <Combobox.Options className="search-box">
                                                                                {filteredPeople.length === 0 && query !== '' ? (
                                                                                    <div>
                                                                                        Nothing found.
                                                                                    </div>
                                                                                ) : (
                                                                                    filteredPeople.map((person) => (
                                                                                        <Combobox.Option
                                                                                            key={person.id}
                                                                                            className='optionss'
                                                                                            value={person}
                                                                                        >
                                                                                            {({ selected, active }) => (
                                                                                                <>
                                                                                                    <span
                                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                            }`}
                                                                                                    >
                                                                                                        {person.name}
                                                                                                    </span>
                                                                                                    {selected ? (
                                                                                                        <span
                                                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                                }`}
                                                                                                        >
                                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                        </span>
                                                                                                    ) : null}
                                                                                                </>
                                                                                            )}
                                                                                        </Combobox.Option>
                                                                                    ))
                                                                                )}
                                                                            </Combobox.Options>
                                                                        </Transition>
                                                                    </div>
                                                                </Combobox>
                                                            </div>
                                                            <div className='d-flex align-items-center'>
                                                                <svg className='location-Svg' style={{ zIndex: '1' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                                                                <div className="fixed top-16 w-72">
                                                                    <Combobox value={selected} onChange={setSelected}>
                                                                        <div className="d-flex align-content-center">
                                                                            <div className="back-search-div">
                                                                                <Combobox.Input
                                                                                    className="search-input"
                                                                                    displayValue={(person) => person.name}
                                                                                    onChange={(event) => setQuery(event.target.value)}
                                                                                    placeholder='Flying to'
                                                                                    type='search'
                                                                                />
                                                                                <p className='mb-0'>Where you want to fly to?</p>
                                                                            </div>
                                                                            <Transition
                                                                                as={Fragment}
                                                                                leave="transition ease-in duration-100"
                                                                                leaveFrom="opacity-100"
                                                                                leaveTo="opacity-0"
                                                                                afterLeave={() => setQuery('')}
                                                                            >
                                                                                <Combobox.Options className="search-box">
                                                                                    {filteredPeople.length === 0 && query !== '' ? (
                                                                                        <div>
                                                                                            Nothing found.
                                                                                        </div>
                                                                                    ) : (
                                                                                        filteredPeople.map((person) => (
                                                                                            <Combobox.Option
                                                                                                key={person.id}
                                                                                                className='optionss'
                                                                                                value={person}
                                                                                            >
                                                                                                {({ selected, active }) => (
                                                                                                    <>
                                                                                                        <span
                                                                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                                }`}
                                                                                                        >
                                                                                                            {person.name}
                                                                                                        </span>
                                                                                                        {selected ? (
                                                                                                            <span
                                                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                                    }`}
                                                                                                            >
                                                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                            </span>
                                                                                                        ) : null}
                                                                                                    </>
                                                                                                )}
                                                                                            </Combobox.Option>
                                                                                        ))
                                                                                    )}
                                                                                </Combobox.Options>
                                                                            </Transition>
                                                                        </div>
                                                                    </Combobox>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center  justify-content-between' style={{ width: '330px', overflow: 'hidden' }}>
                                                            {toggles === 1 ? <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['SingleInputDateRangeField']}>
                                                                    <DateRangePicker slots={{ field: SingleInputDateRangeField }} onChange={(e) => { console.log(e) }} />
                                                                </DemoContainer>
                                                            </LocalizationProvider> : <>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DemoContainer components={['DatePicker']}>
                                                                        <DatePicker />
                                                                    </DemoContainer>
                                                                </LocalizationProvider></>}

                                                            <button className='search-inbtnsss' >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </TabPanel>
                                        </div>
                                    </TabContext>
                                </Box>
                            </div>
                        </div>
                        <div className='d-flex w-50'>
                            <img src='https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png' style={{ height: '100%', width: '100%', zIndex: "-1" }} />
                        </div>
                    </div>
                    <div className='slider-dept'>
                        <h1 style={{ color: 'black' }}>Heading of sections</h1>
                        <div className='d-flex justify-content-between'>
                            <h3 style={{ fontFamily: 'poppins' }}>Descriptions for sections</h3>
                        </div>
                        <div className='mt-3'>

                            <Slider {...settings}>
                                {Slider1Data.map((val) => {
                                    return <>
                                        <div className='mt-3'>
                                            <div>
                                                <img src={val.img} style={{ width: '220px', height: '340px', borderRadius: '20px' }} />
                                                <h4 className='mt-2' style={{ fontFamily: 'poppins', fontWeight: '600' }}>{val.country}</h4>
                                                <p>{val.data}</p>
                                            </div>
                                        </div>
                                    </>
                                })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-5' >
                        <div className='w-50'>
                            <img src='https://chisfis-template.vercel.app/static/media/our-features.d69027726b5a972c1b17.png' className='w-100 h-100' />
                        </div>
                        <div className='d-flex justify-content-start flex-column w-50' style={{ paddingLeft: "20px" }}>
                            <p>BENNEFITS</p>
                            <h1 style={{ fontFamily: 'poppins', fontWeight: '800', color: 'black' }}>Happening cities</h1>
                            <div className='mt-5'>
                                <p style={{ backgroundColor: 'rgb(219,234,254)', width: "100px", color: 'rgb(34,67,177)', textAlign: 'center', borderRadius: '10px' }}>Advertising</p>
                                <h3 style={{ fontFamily: 'poppins', fontWeight: '600', color: 'black' }}>Cost-effective advertising</h3>
                                <p style={{ fontFamily: 'poppins', fontSize: '18px' }}>With a free listing, you can advertise your rental with no upfront costs</p>
                            </div>
                            <div className='mt-5'>
                                <p style={{ backgroundColor: 'rgb(220,252,231)', width: "90px", color: 'rgb(38,113,66)', textAlign: 'center', borderRadius: '10px' }}>Exposure</p>
                                <h3 style={{ fontFamily: 'poppins', fontWeight: '600', color: 'black' }}>Reach millions with Chisfis</h3>
                                <p style={{ fontFamily: 'poppins', fontSize: '18px' }}>Millions of people are searching for unique places to stay around the world</p>
                            </div>
                            <div className='mt-5'>
                                <p style={{ backgroundColor: 'rgb(254,226,226)', width: "85px", color: 'rgb(174,68,68)', textAlign: 'center', borderRadius: '10px' }}>Secure</p>
                                <h3 style={{ fontFamily: 'poppins', fontWeight: '600', color: 'black' }}>Secure and simple</h3>
                                <p style={{ fontFamily: 'poppins', fontSize: '18px' }}>A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                            </div>
                        </div>
                    </div>
                </div>
                <HotelFatures />





            </div>

        </>
    )
}

export default Home
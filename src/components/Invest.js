import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import hot from '../images/hot.svg'
import ProductCard from './ProductCard'
import img202 from '../images/productImage.jpg'
import img302 from '../images/i5.jpg'
import { ContextApi } from '../App'
import i1 from '../images/i1.png';
import i2 from '../images/i2.png';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';
import i6 from '../images/i6.jpg';
import i7 from '../images/i7.jpg';
import i8 from '../images/i8.jpg';

const Invest = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster } = useContext(ContextApi);


    const [stable, setStable] = useState('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
    const [welfare, setWelfare] = useState('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
    const [activity, setActivity] = useState('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
    const [activelist, setActivelist] = useState('stable')

    const swiperHandel = name => {
        setActivelist(name)
        if (name === 'stable') {
            setStable('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
            setWelfare('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setActivity('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
        }
        else if (name === 'welfare') {
            setStable('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setWelfare('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
            setActivity('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
        }
        else {
            setStable('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setWelfare('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setActivity('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
        }
    }


    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
    }, [])




    return (
        <>

            <div className="mx-auto mb-28 bgimg">
                <div className="w-full mx-auto max-w-[800px]" >

                    <Link to={`/orders`}>
                        <div className='max-w-full min-h-[90px] mx-auto bg-[rgb(1,77,173)] invite pb-[120px] ' >

                            <div className="relative z-10 flex flex-wrap items-start pt-5 px-5 pb-[10px]">

                                <div className="flex-[3]">
                                    <p className='text-[26px] font-bold text-white leading-none' >
                                        <em className='p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                        {userDetails?.totalInvestment.toFixed(2)}
                                    </p>
                                    <span className=' text-white opacity-80 leading-none'>Total Investment</span>
                                </div>

                                <div className="flex-[2]">
                                    <p className='text-[26px] font-bold text-white leading-none' >
                                        {/* {amount}  */}
                                        {userDetails?.earning}
                                    </p>
                                    <span className=' text-white opacity-80 leading-none'>Bought-in</span>
                                </div>

                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </Link>

                    <div className="relative -top-[120px] mx-auto z-[1]">

                        {/* itemlist */}

                        <div className="m-[10px]">

                            {/* toogle */}

                            <div className="mx-auto relative overflow-hidden p-0 z[1] ">

                                <div className="swiper pt-[10px] overflow-hidden overflow-x-scroll relative w-full h-full z-[1] flex transition-transform box-content rounded-[7px] ">

                                    <div onClick={() => swiperHandel('stable')} className={`${stable} w-auto mr-[3px] px-[15px] pt-[15px] pb-5 no-underline inline-block relative flex-shrink-0 h-full transition-transform rounded-tl-[7px] rounded-tr-[7px]  `}>
                                        <p>Stable</p>
                                        {activelist === 'stable' &&
                                            <>
                                                <div className="opacity-100 block -left-10 -bottom-[5px] rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-r-white rounded-[100%] duration-300 "></div>
                                                <div className="opacity-100 block -right-10 -bottom-[5px] -rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-l-white rounded-[100%] duration-300 "></div>
                                            </>
                                        }
                                    </div>

                                    <div onClick={() => swiperHandel('welfare')} className={`${welfare} w-auto mr-[3px] px-[15px] pt-[15px] pb-5 no-underline inline-block relative flex-shrink-0 h-full transition-transform rounded-tl-[7px] rounded-tr-[7px]  `}>
                                        <p>Welfare</p>
                                        {activelist === 'welfare' &&
                                            <>
                                                <div className="opacity-100 block -left-10 -bottom-[5px] rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-r-white rounded-[100%] duration-300 "></div>
                                                <div className="opacity-100 block -right-10 -bottom-[5px] -rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-l-white rounded-[100%] duration-300 "></div>
                                            </>
                                        }
                                    </div>

                                    <div onClick={() => swiperHandel('activity')} className={`${activity} w-auto mr-[3px] px-[15px] pt-[15px] pb-5 no-underline inline-block relative flex-shrink-0 h-full transition-transform rounded-tl-[7px] rounded-tr-[7px]  `}>
                                        <img className='w-6 top-0 right-0 absolute' src={hot} alt="" />
                                        <p>Activity</p>

                                        {activelist === 'activity' &&
                                            <>
                                                <div className="opacity-100 block -left-10 -bottom-[5px] rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-r-white rounded-[100%] duration-300 "></div>
                                                <div className="opacity-100 block -right-10 -bottom-[5px] -rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-l-white rounded-[100%] duration-300 "></div>
                                            </>
                                        }

                                    </div>
                                </div>


                            </div>

                            {/* list */}

                            <div className="">

                                {activelist === 'stable' &&
                                    <div className="block bg-white -top-[10px] pt-[10px] px-[5px] pb-12 relative z-[2] rounded-[7px] ">
                                        <div className="flex flex-wrap items-center justify-between">

                                            <ProductCard
                                                product_image={i1}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={575}
                                                plan_daily_earning={224.25}
                                            />

                                            <ProductCard
                                                product_image={i2}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={2000}
                                                plan_daily_earning={800}
                                            />

                                            <ProductCard
                                                product_image={i3}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={5000}
                                                plan_daily_earning={2000}
                                            />

                                            <ProductCard
                                                product_image={i4}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={10000}
                                                plan_daily_earning={4100}
                                            />

                                            <ProductCard
                                                product_image={i5}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={30000}
                                                plan_daily_earning={12600}
                                            />

                                            <ProductCard
                                                product_image={i6}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={50000}
                                                plan_daily_earning={795500}
                                            />

                                            <ProductCard
                                                product_image={i7}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={100000}
                                                plan_daily_earning={44000}
                                            />

                                            <ProductCard
                                                product_image={i8}
                                                product_type={0}
                                                plan_cycle={37}
                                                plan_amount={200000}
                                                plan_daily_earning={90000}
                                            />

                                        </div>
                                    </div>

                                }

                                {activelist === 'welfare' &&
                                    <div className="block bg-white -top-[10px] pt-[10px] px-[5px] pb-12 relative z-[2] rounded-[7px] ">
                                        <div className="flex flex-wrap items-center justify-between">

                                            <ProductCard
                                                product_type={1}
                                                plan_cycle={1}
                                                plan_amount={300}
                                                plan_daily_earning={402}
                                            />

                                            <ProductCard
                                                product_type={2}
                                                plan_cycle={3}
                                                plan_amount={2000}
                                                plan_daily_earning={880}
                                            />

                                            <ProductCard
                                                product_type={3}
                                                plan_cycle={3}
                                                plan_amount={5000}
                                                plan_daily_earning={2500}
                                            />

                                            {/* <ProductCard
                                                product_type={4}
                                                plan_cycle={3}
                                                plan_amount={10000}
                                                plan_daily_earning={6000}
                                            />

                                            <ProductCard
                                                product_type={5}
                                                plan_cycle={3}
                                                plan_amount={30000}
                                                plan_daily_earning={21000}
                                            />

                                            <ProductCard
                                                product_type={6}
                                                plan_cycle={3}
                                                plan_amount={50000}
                                                plan_daily_earning={37500} 
                                            />*/}

                                        </div>
                                    </div>

                                }

                                {activelist === 'activity' &&
                                    <div className="block bg-white -top-[10px] pt-[10px] px-[5px] pb-12 relative z-[2] rounded-[7px] ">
                                        {/* <div className="flex flex-wrap items-center justify-between">

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={3000}
                                                plan_daily_earning={300}
                                                activity_plan={true}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={10000}
                                                plan_daily_earning={1200}
                                                activity_plan={true}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={''}
                                                plan_cycle={27}
                                                plan_amount={11500}
                                                plan_daily_earning={8970}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={1500}
                                                plan_daily_earning={675}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={5000}
                                                plan_daily_earning={2350}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={10000}
                                                plan_daily_earning={5000}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={50000}
                                                plan_daily_earning={40000}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={''}
                                                plan_cycle={1}
                                                plan_amount={200}
                                                plan_daily_earning={300}
                                                active={false}
                                            />

                                            <ProductCard
                                                product_type={2}
                                                product_image={''}
                                                plan_cycle={1}
                                                plan_amount={2700}
                                                plan_daily_earning={3483}
                                                active={false}
                                            /> 

                                        </div> */}
                                        <div className="text-center h-screen mt-52">no plan available</div>

                                    </div>

                                }

                            </div>

                        </div>

                    </div>

                    <Tradmark />

                </div>
            </div>

            {/* footer  */}
            <Navbar />
        </>
    )
}

export default Invest
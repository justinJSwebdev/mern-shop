import React from 'react'
import Category from '../../components/Category/Category'
import Slider from '../../components/Slider/Slider'
import Slider1 from "../../assets/images/slider1.webp"
import Slider2 from "../../assets/images/slider2.webp"
import Slider3 from "../../assets/images/slider3.webp"
import CardComponent from '../../components/Card/CardComponent'
import Navbar from '../../components/Navbar/Navbar'
export default function Homepage() {
    const arr = ['TV', 'Laptop', 'Desktop']
    return (
        <div className="grid grid-cols-[250p_minmax(0,1fr)]">
            <Navbar></Navbar>
            <div className="container">
                <div className="flex gap-x-6 items-center justify-start border-b-2 border-red-400 h-[44px] ">
                    {arr.map((item, index) => (
                        <Category key={index}>{item}</Category>
                    ))}
                </div>
                <Slider images={[Slider1, Slider2, Slider3]}></Slider>
                {/* CartList */}
                <div className="grid grid-cols-4 gap-x-5 py-4 items-center justify-center">
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                </div>
            </div>
        </div>

    )
}

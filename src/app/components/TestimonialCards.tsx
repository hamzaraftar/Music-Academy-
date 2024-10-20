"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {musicSchoolTestimonials} from "../musicSchoolTestimonials"

const TestimonialCards = () => {
    return (
        <div className=''>
            <h2>Here our Harmony : Voices of sucess</h2>
            <div>
                <div>
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards

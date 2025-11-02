"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from './ClientReviewCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const ClientReview = () => {
    return (
        <section id="testimonials" className='scroll-mt-24 pt-16 pb-16'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                Kind words from satisfied <br />
                <span className='text-cyan-200'>clients</span>
            </h1>
            <div className='mt-16 w-[70%] mx-auto'>
                <Carousel
                    // swipeable={false}
                    // draggable={false}
                    showDots={false}
                    responsive={responsive}
                    //ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
                >
                    <ClientReviewCard
                        image="/images/c1.png"
                        name="Janny Doe"
                        role="CEO, Landscape Co."
                    />
                    <ClientReviewCard
                        image="/images/c2.png"
                        name="John Doe"
                        role="UI UX Designer"
                    />
                    <ClientReviewCard
                        image="/images/c3.png"
                        name="Jassica Smith"
                        role="CEO, Tech Company"
                    />
                    <ClientReviewCard
                        image="/images/c4.png"
                        name="Jara William"
                        role="Web Developer"
                    />
                    <ClientReviewCard
                        image="/images/c5.png"
                        name="Jorah Smith"
                        role="CEO, Marketing Agency"
                    />
                </Carousel>;
            </div>
        </section>
    )
}

export default ClientReview
import React from 'react'

function About() {
    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='flex items-center gap-x-10 p-10 max-w-6xl mx-auto mb-8'>
                    <div>
                        <img className='max-w-full rounded-md' src="src/assets/media/about.png" alt="about" />
                    </div>
                    <div className='text-left flex flex-col gap-4'>
                        <h3 className='uppercase text-xl text-blue-800 font-semibold'> About University </h3>
                        <h2 className='text-4xl font-bold text-[#000f38] leading-tight'> Nurturing Tomorrow's Leaders Today </h2>
                        <p className='text-[#676767] font-medium text-sm tracking-wider '>Embark on a transformative educational journey with our university's comprehensive education programs.
                            Our cutting-edge curriculum is designed to empower students with the knowledge,
                            skills, and experiences needed to excel in the dynamic field of education.
                        </p>
                        <p className='text-[#676767] font-medium text-sm tracking-wider '>
                            With a focus on innovation, hands-on learning, and personalized mentorship, our programs
                            prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
                        </p>
                        <p className='text-[#676767] font-medium text-sm tracking-wider '>
                            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of
                            programs offers the perfect pathway to achieve your goals and unlock your
                            full potential in shaping the future of education.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
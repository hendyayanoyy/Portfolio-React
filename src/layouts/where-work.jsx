import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    } from "../components/accordion-where-work"

function Work() {
    return (
    <>
    <div className='text-2xl mb-20'>Where I've worked
        </div>

        <div className='flex flex-col'>
            {/* Work 1 */}
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Security Guard</AccordionTrigger>
                    <AccordionContent>
                    Assisting in both internal and external client security
                    measures, documenting every guest and supplier
                    entering company premises, maintaining order in client
                    company processes and activities. Responsibilities
                    include Arranging, Guarding, Escorting, and Patrolling at PT. Aditya Mandala Sakti
                    </AccordionContent>
            </AccordionItem>
        </Accordion>

         {/* Work 2 */}
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Teacher</AccordionTrigger>
                    <AccordionContent>
                    I am a part-time Teacher of Information and Communication
                    Technology (TIK) at a junior high school, where I provide instruction on
                    information and communication technology. I am also accustomed to
                    effective communication in the teaching process at SMP Mitra Bintaro Islamic School
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </>
)
}

export default Work
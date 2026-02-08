import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

const ContactSection = () => {
    return (
        <section className="py-24 px-4 relative-bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md;text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className='space-y-8'>
                        <h3>Contact Information</h3>

                        <div className='space-y-6 justify-center'>
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:funminiyi_adedoyin@yahoo.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        funminiyi_adedoyin@yahoo.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+447949118410" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +44 (794) 98-4110
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        England, United Kingdom
                                    </a>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className='font-medium mb-4'> Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#"><Linkedin /></a>
                                    <a href="#">
                                        <Twitter/>
                                    </a>
                                    <a href="#">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactSection

import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useToast } from './ui/useToast';


const ContactSection = () => {
    const { showToast } = useToast();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTimeout(()=> {
            showToast("Message sent successfully!");
        }, 1500)
    }
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
                                    <a href="#" target='_blank'><Linkedin /></a>
                                    <a href="#" target='_blank'>
                                        <Twitter />
                                    </a>
                                    <a href="#" target='_blank'>
                                        <Instagram />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-card p-8 rounded-lg shadow-xs">
                                <div className="text-2xl font-semibold mb-6">
                                    Send a Message

                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                        <input type="text" name="name" id="name"  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Jess Wraith...' />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className='block text-sm font-medium mb-2'> Your Email</label>
                                        <input type="email" name="email" id="email"  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Jess wraith@mail.com...' />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                        <textarea name="message" id="message"  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder="Hello I'd like to talk about..." />
                                    </div>

                                    <button
                                        type='submit'
                                        className={cn("cosmic-button w-full flex items-center  justify-center gap-2")}>
                                        Send Message <Send size={16} />
                                    </button>
                                    
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactSection

import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 perspective-[1000px] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800"
          >
            Get in <span className="text-orange-500">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have questions or want to place a special order? We'd love to hear from you. 
            Reach out to the Swadodisha team.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Chandrashekharpur<br />
                      Bhubaneswar, Odisha
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 7846805157</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">himansunayak183@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map Placeholder with Tilt */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
              <Card className="overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center relative group">
                  <div className="text-center space-y-2 relative z-10">
                    <MapPin className="w-12 h-12 text-orange-400 mx-auto" />
                    <p className="text-gray-600 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-500">Visit us at our restaurant location</p>
                  </div>
                  <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Card>
            </Tilt>
          </motion.div>

          {/* Contact Form with Tilt */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="transform-gpu"
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000}>
              <Card className="shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-none overflow-hidden bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name *</label>
                        <Input required placeholder="Himansu" className="bg-gray-50 border-none focus:bg-white transition-colors h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name *</label>
                        <Input required placeholder="Nayak" className="bg-gray-50 border-none focus:bg-white transition-colors h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input type="email" required placeholder="himansu@example.com" className="bg-gray-50 border-none focus:bg-white transition-colors h-12" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input type="tel" placeholder="+91 7846XXXXXX" className="bg-gray-50 border-none focus:bg-white transition-colors h-12" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message *</label>
                      <Textarea required placeholder="Tell us more about your inquiry..." className="bg-gray-50 border-none focus:bg-white transition-colors min-h-[120px] resize-none" />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 h-12 text-lg font-bold shadow-[0_10px_20px_rgba(249,115,22,0.2)] hover:scale-[1.02] transition-transform"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

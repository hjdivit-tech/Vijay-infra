import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1 inline-block mb-4">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Let's Build Something <br/><span className="italic font-light text-primary">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
              Whether you're planning a new build, a renovation, or an interior redesign, our experts are here to guide you.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white shadow-sm border border-border flex items-center justify-center rounded-full text-primary shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">WhatsApp Us</h4>
                  <p className="text-muted-foreground">For immediate assistance</p>
                </div>
              </div>
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white h-12 px-8 rounded-full shadow-lg shadow-[#25D366]/20">
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-border">
            <h3 className="text-2xl font-bold text-secondary mb-6">Request a Free Consultation</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Full Name</label>
                  <Input placeholder="John Doe" className="bg-background h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Phone Number</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="bg-background h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="bg-background h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Project Type</label>
                <Select>
                  <SelectTrigger className="bg-background h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="architecture">Architecture Planning</SelectItem>
                    <SelectItem value="interior">Interior Design</SelectItem>
                    <SelectItem value="renovation">Home Renovation</SelectItem>
                    <SelectItem value="commercial">Commercial Space</SelectItem>
                    <SelectItem value="automation">Home Automation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-background min-h-[120px] resize-none" />
              </div>

              <Button className="w-full h-14 text-base bg-secondary hover:bg-secondary/90">
                Submit Request
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

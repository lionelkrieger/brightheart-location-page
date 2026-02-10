/* Design Philosophy: Warm Modernism with Educational Trust Signals
 * - Diagonal flow architecture for visual momentum
 * - Vibrant pink (#FF0066) for emotional connection
 * - Trust signals prominently displayed
 * - Location-specific content for SEO
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Award, Heart, Users, BookOpen, CheckCircle2, Star, Clock } from "lucide-react";

export default function Home() {
  // Location-specific data (template variables)
  const location = {
    city: "London",
    region: "Greater London",
    areas: ["Central London", "North London", "South London", "East London", "West London"],
    postcodes: ["SW", "SE", "N", "E", "W", "NW", "WC"],
  };

  const stats = [
    { icon: Users, value: "200+", label: "Families Supported" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "UK's #1", label: "Tuition Business 2022" },
    { icon: BookOpen, value: "QTS", label: "Qualified Teachers" },
  ];

  const services = [
    { name: "ADHD", description: "Specialist tutoring for children with ADHD, focusing on attention, organization, and executive function skills." },
    { name: "Autism Spectrum", description: "Tailored support for autistic children with experienced tutors trained in ASC approaches." },
    { name: "Dyslexia", description: "Evidence-based interventions for reading, writing, and spelling difficulties." },
    { name: "Dyscalculia", description: "Specialized maths tutoring using multisensory approaches for number difficulties." },
    { name: "Anxiety", description: "Nurturing support for children experiencing school anxiety or learning-related stress." },
    { name: "General SEN", description: "Comprehensive support for various special educational needs and learning challenges." },
  ];

  const whyChoose = [
    { icon: Award, title: "Award-Winning Service", description: "UK's Tuition Business of the Year 2022, with runner-up recognition in 2023, 2024, and 2025." },
    { icon: Users, title: "QTS-Qualified Oversight", description: "All tutoring is overseen by qualified teachers with QTS status, ensuring educational excellence." },
    { icon: Heart, title: "Heart-Based Approach", description: "We focus on building confidence and emotional wellbeing alongside academic progress." },
    { icon: CheckCircle2, title: "Meet Tutors First", description: "We meet all tutors in person before any tutoring takes place to ensure quality and safety." },
    { icon: BookOpen, title: "Individual Learning Plans", description: "Every student receives a personalized ILP with SEMH and SMART academic targets." },
    { icon: Clock, title: "Refundable Trial Lessons", description: "Try our service risk-free with refundable trial lessons to ensure the perfect match." },
  ];

  const testimonials = [
    {
      quote: "While other agencies focus on getting that one better grade, this one transforms lives.",
      author: "Parent, Kensington",
      rating: 5,
    },
    {
      quote: "Our son's confidence has grown tremendously. The tutor really understands his ADHD and works with his strengths.",
      author: "Parent, Hampstead",
      rating: 5,
    },
    {
      quote: "Professional, caring, and effective. We've seen real progress in just a few months.",
      author: "Parent, Richmond",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-foreground">Bright Heart</div>
                <div className="text-xs text-muted-foreground">Education</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:02080643800" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">0208 064 3800</span>
              </a>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-white to-secondary overflow-hidden">
        <div className="container mx-auto py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>Serving {location.city} & Surrounding Areas</span>
              </div>
              <h1 className="text-foreground">
                ADHD & SEN Tutors in {location.city}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Award-winning specialist SEN tutoring in {location.city}. Home visits and online sessions with carefully matched, 
                experienced tutors overseen by qualified teachers. Transforming lives through trusted, nurturing special needs tuition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-lg px-8 py-6">
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" className="font-display font-semibold text-lg px-8 py-6 border-2">
                  Call 0208 064 3800
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 from 277 reviews</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/riyxjIyjZ7y5xTFKjPbVhD/sandbox/oB49th5pMowSiE5j5RNW15-img-1_1770720247000_na1fn_aGVyby10dXRvci1zdHVkZW50LWxvbmRvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcml5eGpJeWpaN3k1eFRGS2pQYlZoRC9zYW5kYm94L29CNDl0aDVwTW93U2lFNWo1Uk5XMTUtaW1nLTFfMTc3MDcyMDI0NzAwMF9uYTFmbl9hR1Z5YnkxMGRYUnZjaTF6ZEhWa1pXNTBMV3h2Ym1SdmJnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rfOzj5TaVucB~LRdad7HE6CdYvCR84E1ojV-jsysVtUAAe~xeLH19yQQzsqCjgNUCURscLGYm~gk5HIUCjLJAlcpyJ7RyVVwErebY74HN5XOzgoV24BnrfTX2unxhImV4J7ZjwrzfExuNbDO7wTqghqQbL2OyZzHNXpecoZt42XdKFr6-RY-zmB-S~089bLwYmTpJPcznnmfEAlJ~uqtswX7bjjWdS9qhPhZfUrunZzRZRBsENZJ4jjUwk~i2a7Pe88aR3z~GaOooho-eX-oMF6UuSyFiJlKlb9DBAy-nn4kM69Nc32zrJkYf-hdOIlu-IVHtV~GQqWZYwc0bZUMDQ__"
                  alt="SEN tutor working with student in London"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-display font-bold text-sm">UK's #1</div>
                    <div className="text-xs text-muted-foreground">Tuition Business 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="font-display font-bold text-3xl text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">SEN Tutoring Services in {location.city}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in supporting children with a wide range of special educational needs and learning differences 
              across {location.city}, including {location.areas.slice(0, 3).join(", ")}, and more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h3 className="text-primary mb-3 font-display">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 80%, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-foreground mb-6">Why Choose Bright Heart in {location.city}?</h2>
              <div className="space-y-6">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/riyxjIyjZ7y5xTFKjPbVhD/sandbox/oB49th5pMowSiE5j5RNW15-img-3_1770720240000_na1fn_Y2hpbGQtbGVhcm5pbmctc3VjY2Vzcw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcml5eGpJeWpaN3k1eFRGS2pQYlZoRC9zYW5kYm94L29CNDl0aDVwTW93U2lFNWo1Uk5XMTUtaW1nLTNfMTc3MDcyMDI0MDAwMF9uYTFmbl9ZMmhwYkdRdGJHVmhjbTVwYm1jdGMzVmpZMlZ6Y3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QFHZBfeXPrfpttjH9Ga3nHb-aoXfEozy3TV5gmEd3-KZ22YLnRGfEofxW5pRMes2emtoMhDY-338iByVdlp8xYplqQjUmrLQkhwf5ZkFMzchlNlTSEdsu9RjIYNsLUS6R9VapLPbu3dChre6GeJeOHVjHwEbQtO1vjxAnkjDNJIeZpnN2DVBHWfrGRrKYdCWlyJSSg2qFXW644BMwOjc2DCwWi9nKvZ2ZubPI3OYIEVIBWpfwTJvwcNRYijjreluIR88n8FUJwpGe42CEwhK9~zv~a8AxyAQ2u5hrJZr-Kkz9epJUEnphuqHA6y3iuzJFgYAr4v1-rsNOhG-vQtJRg__"
                  alt="Child celebrating learning success"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Areas We Serve in {location.city}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide home tutoring and online sessions across all {location.city} boroughs and postcodes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">Coverage Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {location.areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-display font-semibold text-foreground mb-4">Postcodes Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.postcodes.map((postcode, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {postcode}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Online tutoring available nationwide.</strong> While we offer in-person tutoring 
                    throughout {location.city}, our online sessions are available to families across the entire UK.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/riyxjIyjZ7y5xTFKjPbVhD/sandbox/oB49th5pMowSiE5j5RNW15-img-5_1770720250000_na1fn_dWstbWFwLXBhdHRlcm4.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcml5eGpJeWpaN3k1eFRGS2pQYlZoRC9zYW5kYm94L29CNDl0aDVwTW93U2lFNWo1Uk5XMTUtaW1nLTVfMTc3MDcyMDI1MDAwMF9uYTFmbl9kV3N0YldGd0xYQmhkSFJsY200LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iNTQDcH~1UK5fnDEK3CBzSXFEjedDGEycbXuYsaE2L215bjoNqLZMf8UEeqIs1wPfrXqSmWwRnw5Hl~AceMUqTaxvKdYsfydvW-LX~LHPrV~cbejuroSroUclTlSBjW0DWc5908Xq75wG-89W0UtNareeD-mBYD8ChDUbFgHvjNtGxEHm2p5Rp-4BHkpIRQi1B6YDmAQYkUDElI96otWERIr4GoXbyX9f2jz~3X6vcj6CERLdxy2upqPcxUEpgrcrCF1OKxJb5RXW69JO850uyJuZOdb5L0xQeQKnCddbs5ZsCilUB6eTUZDsbcHaqyhyhttUmZnFLxxYfhkmeXdFw__"
                alt="UK service coverage map"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">What {location.city} Families Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from parents we've supported in {location.city}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-secondary to-white border-2 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                  <div className="text-sm text-muted-foreground font-medium">— {testimonial.author}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/riyxjIyjZ7y5xTFKjPbVhD/sandbox/oB49th5pMowSiE5j5RNW15-img-2_1770720245000_na1fn_bG9uZG9uLWVkdWNhdGlvbi1hYnN0cmFjdA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcml5eGpJeWpaN3k1eFRGS2pQYlZoRC9zYW5kYm94L29CNDl0aDVwTW93U2lFNWo1Uk5XMTUtaW1nLTJfMTc3MDcyMDI0NTAwMF9uYTFmbl9iRzl1Wkc5dUxXVmtkV05oZEdsdmJpMWhZbk4wY21GamRBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y~9lCfMuRR3PNOBEkRUr4dRHiAf0ndnMpoQxHCsE42fEddbt19AscZnQDMA0596eE5SMgdAIXTGO7wuG4u1nwZGpBlZQfGJMh7SlFR2JIQu4-VCDxNJoAXVKwWyefl0CkSLo12TzfZr-o0g6lkyFBWpl9TaUFzILAbmJpoEM8VaH2~3v3HwRg2sr--RKqFEXnoeawZf4A75bYDrTp2IeowEFBM~2DeliVtW15Z1aoc3l~OyeWU6m-Fbo2R~4B3UKq73FEBxIR4K-wwZFffpXMe6nHUXWf5kQcT-LKPIQkxyYly6oydySx5i4ZvKKWe8wgsthNAhzI5gR27VpAz2p6w__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary-foreground mb-6">Ready to Transform Your Child's Learning Journey?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Book a free consultation with our education team in {location.city}. We'll discuss your child's needs and 
              match them with the perfect tutor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-display font-semibold text-lg px-8 py-6">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="font-display font-semibold text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call 0208 064 3800
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-6">
              Refundable trial lessons available • No long-term commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
                </div>
                <div className="font-display font-bold text-lg">Bright Heart</div>
              </div>
              <p className="text-sm text-background/70">
                Award-winning SEN tutoring across the UK
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>ADHD Tutoring</li>
                <li>Autism Support</li>
                <li>Dyslexia Help</li>
                <li>Online Tutoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Safeguarding</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0208 064 3800
                </li>
                <li>hello@brightheart.co.uk</li>
                <li>{location.city}, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2026 Bright Heart Education. All rights reserved. | UK's Tuition Business of the Year 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

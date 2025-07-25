import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import heroProperty from "@/assets/hero-property.jpg";
import teamExecutives from "@/assets/team-executives.jpg";
import propertyPortfolio from "@/assets/property-portfolio.jpg";
import floridaMarket from "@/assets/florida-market.jpg";
import { 
  TrendingUp, 
  DollarSign, 
  Home, 
  Users, 
  Calendar, 
  Award, 
  MapPin, 
  Star, 
  Building, 
  BarChart3, 
  Shield, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  PieChart,
  Target,
  Briefcase,
  Globe
} from "lucide-react";

const LandingPage = () => {
  const roiData = [
    { year: "2017", percentage: "42%", property: "Ocean View Villa" },
    { year: "2018", percentage: "38%", property: "Beachfront Condo" },
    { year: "2019", percentage: "45%", property: "Luxury Resort Unit" },
    { year: "2020", percentage: "52%", property: "Premium Beach House" },
    { year: "2021", percentage: "67%", property: "Oceanfront Estate" },
    { year: "2022", percentage: "48%", property: "Coastal Retreat" },
    { year: "2023", percentage: "58%", property: "Waterfront Lodge" },
  ];

  const portfolioProperties = [
    {
      name: "Ocean Vista Resort",
      location: "Miami Beach, FL",
      value: "$15.2M",
      roi: "24%",
      units: 42,
      image: propertyPortfolio,
      type: "Luxury Resort"
    },
    {
      name: "Sunset Bay Villas",
      location: "Key Largo, FL", 
      value: "$8.7M",
      roi: "19%",
      units: 18,
      image: propertyPortfolio,
      type: "Premium Villas"
    },
    {
      name: "Coastal Paradise Condos",
      location: "Naples, FL",
      value: "$12.4M", 
      roi: "22%",
      units: 35,
      image: propertyPortfolio,
      type: "Beachfront Condos"
    }
  ];

  const teamMembers = [
    {
      name: "Hamza Razzaq",
      role: "CEO & Founder",
      experience: "20+ years in real estate development",
      background: "Former Goldman Sachs VP, Harvard MBA"
    },
    {
      name: "Sarah Chen",
      role: "Chief Investment Officer", 
      experience: "15+ years in institutional real estate",
      background: "Ex-Blackstone, Wharton School of Business"
    },
    {
      name: "Michael Torres",
      role: "Head of Property Operations",
      experience: "18+ years in hospitality management",
      background: "Former Marriott International Executive"
    }
  ];

  const marketStats = [
    { label: "Florida Tourism Growth", value: "+15%", period: "YoY 2023" },
    { label: "Vacation Rental Demand", value: "+32%", period: "Since 2020" },
    { label: "Median Property Value", value: "+8.4%", period: "Annual" },
    { label: "Occupancy Rate", value: "78%", period: "Average" }
  ];

  const testimonials = [
    {
      name: "Robert Mitchell",
      title: "Private Equity Manager",
      quote: "Equisource has delivered consistent returns that outperform traditional real estate investments. Their Florida portfolio is exceptional.",
      investment: "$75,000",
      returns: "127% total return"
    },
    {
      name: "Diana Rodriguez", 
      title: "Retired Financial Advisor",
      quote: "The transparency and professionalism of the Equisource team gives me confidence in my investment. Plus, the free stays are amazing!",
      investment: "$50,000",
      returns: "89% total return"
    }
  ];

  const investmentProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Schedule a personalized consultation to discuss your investment goals and learn about our opportunities."
    },
    {
      step: 2, 
      title: "Due Diligence",
      description: "Review detailed property information, financial projections, and legal documentation."
    },
    {
      step: 3,
      title: "Investment Selection", 
      description: "Choose your investment package and specific properties that align with your portfolio strategy."
    },
    {
      step: 4,
      title: "Documentation & Funding",
      description: "Complete investment agreements and transfer funds through our secure platform."
    },
    {
      step: 5,
      title: "Portfolio Management",
      description: "Receive quarterly reports, dividend payments, and enjoy your investor benefits."
    }
  ];

  const investmentOptions = [
    {
      title: "Starter Investment",
      amount: "$10,000", 
      returns: "12-15% Annual ROI",
      features: ["Property ownership share", "Quarterly dividends", "Online portfolio tracking", "Investor newsletter access"],
    },
    {
      title: "Growth Package",
      amount: "$25,000",
      returns: "15-20% Annual ROI", 
      features: ["Multiple property access", "Priority booking", "Annual property report", "Free property visit", "Direct advisor access"],
      popular: true,
    },
    {
      title: "Premium Portfolio",
      amount: "$50,000+",
      returns: "20-25% Annual ROI",
      features: ["Premium property portfolio", "VIP investor status", "Free stays included", "Direct management contact", "IPO early access", "Concierge services"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-ocean rounded-full"></div>
              <span className="text-xl font-bold text-foreground">Equisource Holdings</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#investments" className="text-muted-foreground hover:text-foreground transition-colors">
                Investments
              </a>
              <a href="#performance" className="text-muted-foreground hover:text-foreground transition-colors">
                Performance
              </a>
              <a href="#properties" className="text-muted-foreground hover:text-foreground transition-colors">
                Properties
              </a>
              <Button variant="investment" size="sm">
                Invest Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroProperty})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-primary/90 via-ocean-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Own Florida's Most Profitable 
              <span className="text-gold block">Vacation Rental Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              8,400% growth since 2017. $100M+ in premium beach properties. 
              Pre-IPO investment opportunity closing soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="premium" size="xl" className="font-semibold">
                <DollarSign className="mr-2" />
                Start Investing Today
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                View Property Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-gold">8,400%</div>
                <div className="text-sm text-white/80">Growth Since 2017</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-gold">$100M+</div>
                <div className="text-sm text-white/80">Property Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-gold">20+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-gold">2026</div>
                <div className="text-sm text-white/80">Planned IPO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Performance Section */}
      <section id="performance" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Proven Track Record of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Consistent high returns year over year across our diverse Florida property portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Historical ROI Performance</h3>
              <div className="space-y-4">
                {roiData.map((data, index) => (
                  <div key={data.year} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-card">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold">
                        {data.year.slice(-2)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{data.property}</div>
                        <div className="text-sm text-muted-foreground">Year {data.year}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-success">{data.percentage}</div>
                      <div className="text-xs text-muted-foreground">Annual ROI</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-elegant">
              <div className="text-center mb-8">
                <TrendingUp className="w-16 h-16 text-ocean-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Why Our Properties Outperform</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Prime Locations</h4>
                    <p className="text-muted-foreground">Strategically selected beachfront properties in high-demand Florida markets</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Professional Management</h4>
                    <p className="text-muted-foreground">Expert property management and vacation rental optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Year-Round Demand</h4>
                    <p className="text-muted-foreground">Florida's climate ensures consistent booking rates throughout the year</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quality Standards</h4>
                    <p className="text-muted-foreground">Luxury amenities and 5-star guest experiences drive premium pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Leading Florida's Vacation Rental Revolution
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2001, Equisource Holdings has been at the forefront of Florida's vacation rental market, 
                building a portfolio of premium beachfront properties that consistently deliver exceptional returns.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-ocean-light/20 rounded-lg">
                  <div className="text-2xl font-bold text-ocean-primary">$100M+</div>
                  <div className="text-sm text-muted-foreground">Assets Under Management</div>
                </div>
                <div className="text-center p-4 bg-ocean-light/20 rounded-lg">
                  <div className="text-2xl font-bold text-ocean-primary">95+</div>
                  <div className="text-sm text-muted-foreground">Premium Properties</div>
                </div>
                <div className="text-center p-4 bg-ocean-light/20 rounded-lg">
                  <div className="text-2xl font-bold text-ocean-primary">23</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-ocean-light/20 rounded-lg">
                  <div className="text-2xl font-bold text-ocean-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Investors</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-muted-foreground">Inc. 5000 eligible growth every year since 2001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-muted-foreground">Vertically integrated property management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-muted-foreground">Strategic locations in high-growth Florida markets</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={floridaMarket} 
                alt="Florida Real Estate Market" 
                className="rounded-xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Property Portfolio */}
      <section id="properties" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Premium Property Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategically located across Florida's most desirable destinations, 
              our properties deliver consistent high returns and exceptional guest experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {portfolioProperties.map((property, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-ocean-primary">
                      {property.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-success text-white">
                      {property.roi} ROI
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{property.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Property Value</div>
                      <div className="text-lg font-bold text-ocean-primary">{property.value}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Units</div>
                      <div className="text-lg font-bold text-foreground">{property.units}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="investment" size="lg">
              <Building className="mr-2" />
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Florida Vacation Rentals?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Florida's tourism industry and real estate market fundamentals create 
              the perfect storm for vacation rental investment success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Market Fundamentals</h3>
                <div className="grid grid-cols-2 gap-4">
                  {marketStats.map((stat, index) => (
                    <div key={index} className="bg-gradient-card p-4 rounded-lg">
                      <div className="text-2xl font-bold text-success">{stat.value}</div>
                      <div className="text-sm font-medium text-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Tourism Capital</h4>
                    <p className="text-muted-foreground">Florida welcomes 130+ million visitors annually, creating consistent demand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Strategic Locations</h4>
                    <p className="text-muted-foreground">Prime beachfront properties in Miami, Naples, and the Keys</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <PieChart className="w-6 h-6 text-ocean-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Diversified Revenue</h4>
                    <p className="text-muted-foreground">Multiple income streams from short-term rentals and appreciation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Competitive Advantages</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium text-foreground">Average Occupancy Rate</span>
                  <span className="text-ocean-primary font-bold">78%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium text-foreground">Premium Pricing Power</span>
                  <span className="text-success font-bold">+25%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium text-foreground">Guest Satisfaction</span>
                  <span className="text-gold font-bold">4.8/5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium text-foreground">Repeat Bookings</span>
                  <span className="text-ocean-primary font-bold">45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Experienced Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Led by industry veterans with decades of experience in real estate, 
              finance, and hospitality management.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-ocean rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-ocean-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <Briefcase className="mr-2" />
              View Full Leadership Team
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Simple Investment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with Equisource in five easy steps. Our team guides you 
              through every stage of your investment journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {investmentProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < investmentProcess.length - 1 && (
                    <div className="flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-ocean-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="premium" size="xl">
              <Phone className="mr-2" />
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Investor Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Our Investors Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real investors who have achieved financial success 
              with Equisource Holdings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Investment: {testimonial.investment}</div>
                        <div className="font-bold text-success">{testimonial.returns}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section id="investments" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Pre-IPO Investment Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure your position before our 2026 public offering. Limited time exclusive access 
              with preferential terms for early investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {investmentOptions.map((option, index) => (
              <Card key={index} className={`relative transition-all duration-300 hover:shadow-elegant hover:scale-105 ${option.popular ? 'ring-2 ring-ocean-primary' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-ocean text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-foreground">{option.title}</CardTitle>
                  <div className="text-3xl font-bold text-ocean-primary">{option.amount}</div>
                  <div className="text-lg font-semibold text-success">{option.returns}</div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={option.popular ? "premium" : "investment"} 
                    className="w-full"
                    size="lg"
                  >
                    {option.popular ? "Start Premium Investment" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-card p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Pre-IPO Benefits</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <Shield className="w-8 h-8 text-ocean-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Early Access</h4>
                <p className="text-sm text-muted-foreground">Get in before public offering</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-ocean-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Better Terms</h4>
                <p className="text-sm text-muted-foreground">Preferential pricing and features</p>
              </div>
              <div>
                <Star className="w-8 h-8 text-ocean-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">VIP Status</h4>
                <p className="text-sm text-muted-foreground">Exclusive investor benefits</p>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 text-ocean-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">IPO Upside</h4>
                <p className="text-sm text-muted-foreground">Potential for significant gains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about investing with Equisource Holdings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="investment" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="investment">Investment</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="ipo">IPO</TabsTrigger>
              </TabsList>
              
              <TabsContent value="investment" className="space-y-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">What is the minimum investment?</h3>
                    <p className="text-muted-foreground">The minimum investment is $10,000 for our Starter Investment package. This gives you fractional ownership in our property portfolio with quarterly dividend payments.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">How liquid is my investment?</h3>
                    <p className="text-muted-foreground">While vacation rental real estate is generally less liquid than stocks, we offer quarterly redemption windows and secondary market opportunities for investors who need liquidity.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="returns" className="space-y-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">How are returns calculated?</h3>
                    <p className="text-muted-foreground">Returns come from two sources: rental income (distributed quarterly) and property appreciation. Our historical average has been 18-25% annual returns across the portfolio.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">Are returns guaranteed?</h3>
                    <p className="text-muted-foreground">No investment returns are guaranteed. However, our track record shows consistent performance over 20+ years, with positive returns in 95% of quarters since inception.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="properties" className="space-y-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">Can I stay at the properties?</h3>
                    <p className="text-muted-foreground">Yes! Investors with $50,000+ receive free annual stays. Smaller investors get discounted rates and priority booking at all properties in our portfolio.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">How do you select properties?</h3>
                    <p className="text-muted-foreground">We use proprietary analytics to identify undervalued beachfront properties in high-demand Florida markets with strong rental potential and appreciation prospects.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ipo" className="space-y-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">When is the planned IPO?</h3>
                    <p className="text-muted-foreground">We plan to go public in 2026, subject to market conditions. Pre-IPO investors will have their shares automatically converted to public company shares.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">What happens to my investment after IPO?</h3>
                    <p className="text-muted-foreground">Your shares become publicly tradeable, providing liquidity. You'll continue receiving dividends and can choose to hold, sell, or buy more shares on the public market.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact & Legal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our investor relations team to learn more about our pre-IPO opportunities 
                and schedule your personalized consultation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-ocean-primary" />
                  <span className="text-foreground">1-800-EQUISOURCE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-ocean-primary" />
                  <span className="text-foreground">investors@equisourceholdings.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-ocean-primary" />
                  <span className="text-foreground">Miami Beach, Florida</span>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="premium" size="xl" className="mr-4">
                  <Phone className="mr-2" />
                  Schedule Call
                </Button>
                <Button variant="outline" size="xl">
                  Download Prospectus
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-foreground">Important Disclosures</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• All investments carry risk and past performance does not guarantee future results</p>
                <p>• Returns are projections based on historical data and market analysis</p>
                <p>• Real estate investments are subject to market volatility and liquidity constraints</p>
                <p>• Minimum investment periods and redemption terms apply</p>
                <p>• This is not a solicitation to buy securities. Full disclosure documents available upon request</p>
                <p>• SEC registration pending for public offering</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Equisource Holdings Corp is committed to transparency and regulatory compliance. 
                  All investment opportunities are subject to thorough due diligence and legal review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Miss Your Chance to Invest in Florida's Premier Vacation Rental Portfolio
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join successful investors who have already secured their positions. 
              Limited pre-IPO opportunities remaining.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="font-semibold">
                <DollarSign className="mr-2" />
                Invest Now - Limited Time
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-white/70">
              * Investments subject to terms and conditions. Past performance does not guarantee future results.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-ocean rounded-full"></div>
                <span className="text-xl font-bold">Equisource Holdings</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Florida's premier vacation rental investment company with over $100M in managed properties.
              </p>
              <div className="text-sm text-primary-foreground/60">
                <p>SEC Filing Status: Pre-Registration</p>
                <p>FINRA Member: Pending</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Investment</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Reports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Management Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal & Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Disclosures</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Equisource Holdings Corp. All rights reserved. | Licensed Investment Advisor</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
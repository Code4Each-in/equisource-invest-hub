import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroProperty from "@/assets/hero-property.jpg";
import { TrendingUp, DollarSign, Home, Users, Calendar, Award } from "lucide-react";

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

  const investmentOptions = [
    {
      title: "Starter Investment",
      amount: "$10,000",
      returns: "12-15% Annual ROI",
      features: ["Property ownership share", "Quarterly dividends", "Online portfolio tracking"],
    },
    {
      title: "Growth Package",
      amount: "$25,000",
      returns: "15-20% Annual ROI",
      features: ["Multiple property access", "Priority booking", "Annual property report", "Free property visit"],
      popular: true,
    },
    {
      title: "Premium Portfolio",
      amount: "$50,000+",
      returns: "20-25% Annual ROI",
      features: ["Premium property portfolio", "VIP investor status", "Free stays included", "Direct management contact", "IPO early access"],
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

      {/* Investment Options Section */}
      <section id="investments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Pre-IPO Investment Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure your position before our 2026 public offering. Limited time exclusive access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                        <div className="w-2 h-2 bg-ocean-primary rounded-full"></div>
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
              <p className="text-primary-foreground/80">
                Florida's premier vacation rental investment company with over $100M in managed properties.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Investment</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property Portfolio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Management Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Releases</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Disclosures</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Equisource Holdings Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
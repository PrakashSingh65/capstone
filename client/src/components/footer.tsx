import { Link } from "react-router-dom";
import { Activity, ShieldCheck, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-sm shadow-emerald-500/10">
                <Activity className="h-4.5 w-4.5" />
              </div>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-lg font-bold tracking-tight text-transparent dark:from-emerald-400 dark:to-teal-300">
                HealthNavigator
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering individuals with reliable, personalized, and AI-driven health navigational intelligence.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              HIPAA & GDPR Compliant Security
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Symptom checker
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Demo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Frequently Asked
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Security & Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  HIPAA Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Trust Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Stay Informed</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get the latest updates on health trends and AI research diagnostics.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="max-w-[240px] focus-visible:ring-emerald-500"
              />
              <Button size="icon" className="bg-emerald-600 hover:bg-emerald-500 text-white shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-border/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-muted-foreground text-center md:text-left leading-relaxed max-w-2xl">
            <strong>Medical Disclaimer:</strong> AI Health Navigator provides informational context and symptom analysis tools for informational guidance only. It is NOT a substitute for professional medical diagnosis, advice, treatment, or clinical assessment. Always consult a qualified medical professional for health concerns.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground whitespace-nowrap">
            <span>© {new Date().getFullYear()} HealthNavigator. Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}

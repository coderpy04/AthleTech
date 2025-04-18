import {
  ZapIcon,
  MailIcon,
  BookIcon,
  HelpCircle,
  ShieldCheck,
  ScrollText,
  Info,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background/80 to-background/90 backdrop-blur-md shadow-inner">
      {/* Top glow */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copy */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <div className="p-2 bg-primary/10 rounded-full">
                <ZapIcon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold font-mono tracking-tight">
                Athle<span className="text-primary">Tech</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AthleTech.ai — All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3 text-sm">
            <FooterLink href="/about" icon={<Info className="w-4 h-4" />}>About</FooterLink>
            <FooterLink href="/terms" icon={<ScrollText className="w-4 h-4" />}>Terms</FooterLink>
            <FooterLink href="/privacy" icon={<ShieldCheck className="w-4 h-4" />}>Privacy</FooterLink>
            <FooterLink href="/contact" icon={<MailIcon className="w-4 h-4" />}>Contact</FooterLink>
            <FooterLink href="/blog" icon={<BookIcon className="w-4 h-4" />}>Blog</FooterLink>
            <FooterLink href="/help" icon={<HelpCircle className="w-4 h-4" />}>Help</FooterLink>
          </div>

          {/* Status & Socials */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-mono text-muted-foreground">SYSTEM OPERATIONAL</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/coderpy04"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.instagram.com/riteshpy_/"
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/riteshpandey04/"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Handcrafted Line */}
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-sm text-muted-foreground">
          Handcrafted with 💗 by <span className="font-semibold text-foreground">Ritesh</span>
        </p>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:underline"
  >
    {icon}
    {children}
  </Link>
);

const SocialIcon = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
  >
    {icon}
  </Link>
);

export default Footer;

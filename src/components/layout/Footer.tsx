/**
 * FOOTER COMPONENT
 * 
 * Required for Google AdSense approval - must have:
 * - Privacy Policy link
 * - Terms of Service link
 * - Contact information
 * - Copyright notice
 */

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#0d0d10] border-t border-game-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-game-text-muted text-sm">
            &copy; 2026 Rinnxus. All rights reserved.
          </p>

          {/* Footer links */}
          <div className="flex items-center space-x-6">
            <a
              href="/privacy"
              className="text-game-text-muted hover:text-game-text text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-game-text-muted hover:text-game-text text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-game-text-muted hover:text-game-text text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Additional info for ad compliance */}
        <div className="mt-6 pt-6 border-t border-game-border/50">
          <p className="text-xs text-game-text-muted text-center">
            This site contains third-party advertisements. By using this site, you consent to the use of cookies for analytics and personalized content.
          </p>
        </div>
      </div>
    </footer>
  );
}
